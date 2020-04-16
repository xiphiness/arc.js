import { Observable } from "rxjs";
import gql from "graphql-tag";
import {
  Arc,
  Plugin,
  Proposal,
  IProposalState,
  GenericScheme
} from "../../index";
import { Address, IApolloQueryOptions } from "../../types";

export interface IGenericSchemeProposalState extends IProposalState { 
  id: string
  contractToCall: Address
  callData: string
  executed: boolean
  returnValue: string
}

export class GenericSchemeProposal extends Proposal<IGenericSchemeProposalState> {

  public static fragment = {
    name: 'GenericSchemeProposalFields',
    fragment: gql`
      fragment GenericSchemeProposalFields on Proposal {
        genericScheme {
          id
          contractToCall
          callData
          executed
          returnValue
        }
      }
    `
  }

  static itemMap (context: Arc, item: any): GenericSchemeProposal | null {

    if (item === null || item === undefined) return null
    
    const genericScheme = GenericScheme.itemMap(context, item) as GenericScheme
    const genericSchemeProposal = new GenericSchemeProposal(context, item.id)

    const baseState = Proposal.itemMapToBaseState(
      context,
      item,
      genericScheme,
      genericSchemeProposal,
      "GenericScheme"
    )

    if(baseState === null) return null
    
    const state: IGenericSchemeProposalState = {
      ...baseState,
      callData: item.genericScheme.callData,
      contractToCall: item.genericScheme.contractToCall,
      executed: item.genericScheme.executed,
      returnValue: item.genericScheme.returnValue
    }

    return new GenericSchemeProposal(context, state)
  }

  public state(apolloQueryOptions: IApolloQueryOptions): Observable<IGenericSchemeProposalState> {
    const query = gql`query ProposalState
      {
        proposal(id: "${this.id}") {
          ...ProposalFields
          votes {
            id
          }
          stakes {
            id
          }
        }
      }
      ${Proposal.baseFragment}
      ${Plugin.baseFragment}
    `

    const result = this.context.getObservableObject(this.context, query, GenericSchemeProposal.itemMap, apolloQueryOptions) as Observable<IGenericSchemeProposalState>
    return result
  }

}