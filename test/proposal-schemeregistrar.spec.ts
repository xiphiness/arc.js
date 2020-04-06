import { Arc } from '../src/arc'
import {
  IProposalStage,
  IProposalState,
  IProposalType,
  Proposal
  } from '../src/proposal'
import { Scheme } from '../src/scheme'
import { ISchemeRegistrar } from '../src/schemes/schemeRegistrar'
import { createAProposal, firstResult, getTestDAO, getTestScheme,
  newArc, voteToPassProposal, waitUntilTrue } from './utils'
import { Wallet } from 'ethers'

jest.setTimeout(60000)

/**
 * Proposal test
 */
describe('Proposal', () => {
  let arc: Arc

  beforeAll(async () => {
    arc = await newArc()
  })

  it('Check proposal state is correct', async () => {
    const dao = await getTestDAO()
    const schemeToRegister = Wallet.createRandom().address.toLowerCase()
    const proposalToAddStates: IProposalState[] = []
    const lastProposalToAddState = (): IProposalState => proposalToAddStates[proposalToAddStates.length - 1]

    const proposalToAdd = await createAProposal(dao, {
      descriptionHash: '',
      parametersHash: '0x0000000000000000000000000000000000000000000000000000000000001234',
      permissions: '0x0000001f',
      scheme: getTestScheme("SchemeRegistrar"),
      schemeToRegister,
      proposalType: IProposalType.SchemeRegistrarAdd
    })
    proposalToAdd.state().subscribe((pState: IProposalState) => {
      proposalToAddStates.push(pState)
    })

    await waitUntilTrue(() => proposalToAddStates.length > 0)

    expect(lastProposalToAddState().schemeRegistrar).toMatchObject({
      decision: null,
      schemeRegistered: null,
      schemeRemoved: null,
      schemeToRegister,
      schemeToRegisterPermission: '0x0000001f',
      schemeToRemove: null
    })

    expect(lastProposalToAddState().type).toEqual('SchemeRegistrarAdd')

    // accept the proposal by voting the hell out of it
    await voteToPassProposal(proposalToAdd)

    await proposalToAdd.execute()
    await waitUntilTrue(() => (lastProposalToAddState().schemeRegistrar as ISchemeRegistrar).schemeRegistered)
    expect(lastProposalToAddState()).toMatchObject({
      stage: IProposalStage.Executed
    })
    expect(lastProposalToAddState().schemeRegistrar).toMatchObject({
      decision: '1',
      schemeRegistered: true
    })

    // we now expect our new scheme to appear in the schemes collection
    const registeredSchemes = await firstResult(Scheme.search(arc, {where: { dao: dao.id }}))
    const registeredSchemesAddresses: string[] = []
    await Promise.all(
      registeredSchemes.map(async (x: Scheme) => {
        const state = await x.fetchState()
        registeredSchemesAddresses.push(state.address)
      })
    )
    expect(registeredSchemesAddresses).toContain(schemeToRegister)

    // we create a new proposal now to edit the scheme
    const proposalToEdit = await createAProposal(dao, {
      descriptionHash: '',
      parametersHash: '0x0000000000000000000000000000000000000000000000000000000000001234',
      permissions: '0x0000001f',
      scheme: getTestScheme("SchemeRegistrar"),
      schemeToRegister: schemeToRegister.toLowerCase(),
      proposalType: IProposalType.SchemeRegistrarEdit
    })
    const proposalToEditStates: IProposalState[]  = []
    proposalToEdit.state().subscribe((pState: IProposalState) => {
      proposalToEditStates.push(pState)
    })
    const lastProposalToEditState = (): IProposalState => proposalToEditStates[proposalToEditStates.length - 1]

    await waitUntilTrue(() => proposalToEditStates.length > 0)

    expect(lastProposalToEditState().schemeRegistrar).toMatchObject({
      decision: null,
      // id: '0x11272ed228de85c4fd14ab467f1f8c6d6936ce3854e240f9a93c9deb95f243e6',
      schemeRegistered: null,
      schemeRemoved: null,
      schemeToRegister,
      schemeToRegisterPermission: '0x0000001f',
      schemeToRemove: null
    })
    expect(lastProposalToEditState().type).toEqual('SchemeRegistrarEdit')

    // we now uregister the new scheme
    const proposalToRemove = await createAProposal(dao, {
      scheme: getTestScheme("SchemeRegistrar"),
      schemeToRegister,
      proposalType: IProposalType.SchemeRegistrarRemove
    })
    expect(proposalToRemove).toBeInstanceOf(Proposal)

    const proposalToRemoveStates: IProposalState[]  = []
    proposalToRemove.state().subscribe((pState: IProposalState) => {
      proposalToRemoveStates.push(pState)
    })
    const lastProposalToRemoveState = (): IProposalState => proposalToRemoveStates[proposalToRemoveStates.length - 1]

    await waitUntilTrue(() => proposalToRemoveStates.length > 0)

    expect(lastProposalToRemoveState().schemeRegistrar).toMatchObject({
      decision: null,
      schemeRegistered: null,
      schemeRemoved: null,
      schemeToRegister: null,
      schemeToRegisterPermission: null,
      schemeToRemove: schemeToRegister.toLowerCase()
    })

    // accept the proposal by voting the hell out of it
    await voteToPassProposal(proposalToRemove)
    await proposalToRemove.execute()
    await waitUntilTrue(() => (lastProposalToRemoveState().schemeRegistrar as ISchemeRegistrar).schemeRemoved)
    expect(lastProposalToRemoveState()).toMatchObject({
      stage: IProposalStage.Executed
    })
    expect(lastProposalToRemoveState().schemeRegistrar).toMatchObject({
      decision: '1',
      schemeRegistered: null,
      schemeRemoved: true,
      schemeToRegisterPermission: null,
      schemeToRemove: schemeToRegister.toLowerCase()
    })
    expect(lastProposalToRemoveState().type).toEqual('SchemeRegistrarRemove')

  })
})
