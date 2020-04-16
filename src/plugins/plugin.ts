
import gql from 'graphql-tag'
import { Observable } from 'rxjs'
import { DocumentNode } from 'graphql'
import { utils } from 'ethers'
import {
  DAO,
  Plugins,
  createGraphQlQuery,
  concat,
  hexStringToUint8Array,
  Arc,
  Entity,
  IEntityRef
} from '../index'
import { Address, ICommonQueryOptions, IApolloQueryOptions } from '../types'

export interface IPluginState {
  id: string
  address: Address
  dao: IEntityRef<DAO>
  name: string
  paramsHash: string
  version: string
  canDelegateCall: boolean
  canUpgradeController: boolean
  canManageGlobalConstraints: boolean
  canRegisterPlugins: boolean
  numberOfQueuedProposals: number
  numberOfPreBoostedProposals: number
  numberOfBoostedProposals: number
}

export interface IPluginQueryOptions extends ICommonQueryOptions {
  where?: {
    address?: Address
    canDelegateCall?: boolean
    canRegisterPlugins?: boolean
    canUpgradeController?: boolean
    canManageGlobalConstraints?: boolean
    dao?: Address
    id?: string
    name?: string
    paramsHash?: string
    [key: string]: any
  }
}

export abstract class Plugin<TPluginState extends IPluginState> extends Entity<TPluginState> {

  public static fragment: { name: string, fragment: DocumentNode } | undefined

  public static baseFragment: DocumentNode = gql`
    fragment PluginFields on ControllerScheme {
      id
      address
      name
      dao { id }
      canDelegateCall
      canRegisterSchemes
      canUpgradeController
      canManageGlobalConstraints
      paramsHash
      numberOfQueuedProposals
      numberOfPreBoostedProposals
      numberOfBoostedProposals
      version
      ${Object.values(Plugins).filter(plugin => plugin.fragment)
        .map(plugin => '...' + plugin.fragment.name).join('\n')}
    }
    ${Object.values(Plugins).filter(plugin => plugin.fragment)
      .map(plugin => '...' + plugin.fragment.name).join('\n')}
  `

  public static search<TPluginState extends IPluginState>(
    context: Arc,
    options: IPluginQueryOptions = {},
    apolloQueryOptions: IApolloQueryOptions = {}
  ): Observable<Plugin<TPluginState>[]> {
    let query
    if (apolloQueryOptions.fetchAllData === true) {
      query = gql`query SchemeSearchAllData {
        controllerSchemes ${createGraphQlQuery(options)}
        {
          ...PluginFields
        }
      }
      ${Plugin.baseFragment}`
    } else {
      query = gql`query SchemeSearch {
        controllerSchemes ${createGraphQlQuery(options)}
        {
            id
            address
            name
            dao { id }
            paramsHash
            version
            contributionRewardExtParams {
              id
              rewarder
            }
        }
      }`
    }

    const itemMap = (context: Arc, item: any): Plugin<TPluginState> | null => {
      if (!options.where) {
        options.where = {}
      }

      return Plugins[item.name].itemMap(context, item)
    }

    return context.getObservableList(
      context,
      query,
      itemMap,
      apolloQueryOptions
    ) as Observable<Plugin<TPluginState>[]>
  }

  public static calculateId(opts: { daoAddress: Address, contractAddress: Address}): string {
    const seed = concat(
      hexStringToUint8Array(opts.daoAddress.toLowerCase()),
      hexStringToUint8Array(opts.contractAddress.toLowerCase())
    )
    return utils.keccak256(seed)
  }
}