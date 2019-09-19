[@daostack/client](../README.md) › [Globals](../globals.md) › [Arc](arc.md)

# Class: Arc

The Arc class holds all configuration.
Any useage of the library typically will start with instantiating a new Arc instance

**`returns`** an instance of Arc

## Hierarchy

* [GraphNodeObserver](graphnodeobserver.md)

  ↳ **Arc**

## Index

### Constructors

* [constructor](arc.md#constructor)

### Properties

* [Logger](arc.md#logger)
* [apolloClient](arc.md#optional-apolloclient)
* [blockHeaderSubscription](arc.md#blockheadersubscription)
* [contractInfos](arc.md#contractinfos)
* [contracts](arc.md#contracts)
* [contractsR](arc.md#contractsr)
* [graphqlHttpProvider](arc.md#optional-graphqlhttpprovider)
* [graphqlSubscribeToQueries](arc.md#optional-graphqlsubscribetoqueries)
* [graphqlWsProvider](arc.md#optional-graphqlwsprovider)
* [ipfs](arc.md#ipfs)
* [ipfsProvider](arc.md#ipfsprovider)
* [observedAccounts](arc.md#observedaccounts)
* [pendingOperations](arc.md#pendingoperations)
* [web3](arc.md#web3)
* [web3Provider](arc.md#web3provider)
* [web3ProviderRead](arc.md#web3providerread)
* [web3Read](arc.md#web3read)

### Methods

* [GENToken](arc.md#gentoken)
* [allowance](arc.md#allowance)
* [approveForStaking](arc.md#approveforstaking)
* [dao](arc.md#dao)
* [daos](arc.md#daos)
* [ethBalance](arc.md#ethbalance)
* [fetchContractInfos](arc.md#fetchcontractinfos)
* [getABI](arc.md#getabi)
* [getAccount](arc.md#getaccount)
* [getContract](arc.md#getcontract)
* [getContractInfo](arc.md#getcontractinfo)
* [getContractInfoByName](arc.md#getcontractinfobyname)
* [getObservable](arc.md#getobservable)
* [getObservableList](arc.md#getobservablelist)
* [getObservableListWithFilter](arc.md#getobservablelistwithfilter)
* [getObservableObject](arc.md#getobservableobject)
* [proposal](arc.md#proposal)
* [proposals](arc.md#proposals)
* [saveIPFSData](arc.md#saveipfsdata)
* [scheme](arc.md#scheme)
* [schemes](arc.md#schemes)
* [sendQuery](arc.md#sendquery)
* [sendTransaction](arc.md#sendtransaction)
* [setAccount](arc.md#setaccount)
* [setContractInfos](arc.md#setcontractinfos)

## Constructors

###  constructor

\+ **new Arc**(`options`: object): *[Arc](arc.md)*

*Overrides [GraphNodeObserver](graphnodeobserver.md).[constructor](graphnodeobserver.md#constructor)*

*Defined in [arc.ts:49](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L49)*

**Parameters:**

▪ **options**: *object*

Name | Type | Description |
------ | ------ | ------ |
`contractInfos?` | [IContractInfo](../interfaces/icontractinfo.md)[] | informatino about the contracts |
`graphqlHttpProvider?` | undefined &#124; string | - |
`graphqlPrefetchHook?` | undefined &#124; function | - |
`graphqlSubscribeToQueries?` | undefined &#124; false &#124; true | should each query also subscribe to updates from the graphQl provider? |
`graphqlWsProvider?` | undefined &#124; string | - |
`ipfsProvider?` | [IPFSProvider](../globals.md#ipfsprovider) | - |
`web3Provider?` | undefined &#124; string | - |
`web3ProviderRead?` | undefined &#124; string | - |

**Returns:** *[Arc](arc.md)*

## Properties

###  Logger

• **Logger**: *GlobalLogger* =  Logger

*Inherited from [GraphNodeObserver](graphnodeobserver.md).[Logger](graphnodeobserver.md#logger)*

*Defined in [graphnode.ts:139](https://github.com/daostack/client/blob/3f46a94/src/graphnode.ts#L139)*

___

### `Optional` apolloClient

• **apolloClient**? : *ApolloClient‹object›*

*Inherited from [GraphNodeObserver](graphnodeobserver.md).[apolloClient](graphnodeobserver.md#optional-apolloclient)*

*Defined in [graphnode.ts:140](https://github.com/daostack/client/blob/3f46a94/src/graphnode.ts#L140)*

___

###  blockHeaderSubscription

• **blockHeaderSubscription**: *Subscription | undefined* =  undefined

*Defined in [arc.ts:42](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L42)*

___

###  contractInfos

• **contractInfos**: *[IContractInfo](../interfaces/icontractinfo.md)[]*

*Defined in [arc.ts:37](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L37)*

a mapping of contrct names to contract addresses

___

###  contracts

• **contracts**: *object*

*Defined in [arc.ts:38](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L38)*

#### Type declaration:

* \[ **key**: *string*\]: any

___

###  contractsR

• **contractsR**: *object*

*Defined in [arc.ts:39](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L39)*

#### Type declaration:

* \[ **key**: *string*\]: any

___

### `Optional` graphqlHttpProvider

• **graphqlHttpProvider**? : *undefined | string*

*Inherited from [GraphNodeObserver](graphnodeobserver.md).[graphqlHttpProvider](graphnodeobserver.md#optional-graphqlhttpprovider)*

*Defined in [graphnode.ts:137](https://github.com/daostack/client/blob/3f46a94/src/graphnode.ts#L137)*

___

### `Optional` graphqlSubscribeToQueries

• **graphqlSubscribeToQueries**? : *undefined | false | true*

*Inherited from [GraphNodeObserver](graphnodeobserver.md).[graphqlSubscribeToQueries](graphnodeobserver.md#optional-graphqlsubscribetoqueries)*

*Defined in [graphnode.ts:141](https://github.com/daostack/client/blob/3f46a94/src/graphnode.ts#L141)*

___

### `Optional` graphqlWsProvider

• **graphqlWsProvider**? : *undefined | string*

*Inherited from [GraphNodeObserver](graphnodeobserver.md).[graphqlWsProvider](graphnodeobserver.md#optional-graphqlwsprovider)*

*Defined in [graphnode.ts:138](https://github.com/daostack/client/blob/3f46a94/src/graphnode.ts#L138)*

___

###  ipfs

• **ipfs**: *any*

*Defined in [arc.ts:31](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L31)*

___

###  ipfsProvider

• **ipfsProvider**: *[IPFSProvider](../globals.md#ipfsprovider)*

*Defined in [arc.ts:27](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L27)*

___

###  observedAccounts

• **observedAccounts**: *object*

*Defined in [arc.ts:43](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L43)*

#### Type declaration:

* \[ **address**: *string*\]: object

* **lastBalance**? : *undefined | number*

* **observable**? : *Observable‹any›*

* **observer**? : *Observer‹any›*

* **subscriptionsCount**: *number*

___

###  pendingOperations

• **pendingOperations**: *Observable‹Array‹[Operation](../globals.md#operation)‹any›››* =  of()

*Defined in [arc.ts:29](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L29)*

___

###  web3

• **web3**: *any*

*Defined in [arc.ts:32](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L32)*

___

###  web3Provider

• **web3Provider**: *[Web3Provider](../globals.md#web3provider)* = ""

*Defined in [arc.ts:25](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L25)*

___

###  web3ProviderRead

• **web3ProviderRead**: *[Web3Provider](../globals.md#web3provider)* = ""

*Defined in [arc.ts:26](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L26)*

___

###  web3Read

• **web3Read**: *any*

*Defined in [arc.ts:33](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L33)*

## Methods

###  GENToken

▸ **GENToken**(): *[Token](token.md)*

*Defined in [arc.ts:318](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L318)*

get the GEN Token

**Returns:** *[Token](token.md)*

a Token instance

___

###  allowance

▸ **allowance**(`owner`: [Address](../globals.md#address), `spender`: [Address](../globals.md#address)): *Observable‹any›*

*Defined in [arc.ts:389](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L389)*

How much GEN spender may spend on behalve of the owner

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`owner` | [Address](../globals.md#address) | Address of the owner of the tokens |
`spender` | [Address](../globals.md#address) | Address of the spender |

**Returns:** *Observable‹any›*

___

###  approveForStaking

▸ **approveForStaking**(`spender`: [Address](../globals.md#address), `amount`: any): *[IOperationObservable](../interfaces/ioperationobservable.md)‹[ITransactionUpdate](../interfaces/itransactionupdate.md)‹any››*

*Defined in [arc.ts:379](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L379)*

**Parameters:**

Name | Type |
------ | ------ |
`spender` | [Address](../globals.md#address) |
`amount` | any |

**Returns:** *[IOperationObservable](../interfaces/ioperationobservable.md)‹[ITransactionUpdate](../interfaces/itransactionupdate.md)‹any››*

___

###  dao

▸ **dao**(`address`: [Address](../globals.md#address)): *[DAO](dao.md)*

*Defined in [arc.ts:132](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L132)*

get a DAO instance from an address

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | [Address](../globals.md#address) | address of the dao Avatar |

**Returns:** *[DAO](dao.md)*

an instance of a DAO

___

###  daos

▸ **daos**(`options`: [IDAOQueryOptions](../interfaces/idaoqueryoptions.md), `apolloQueryOptions`: [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md)): *Observable‹[DAO](dao.md)[]›*

*Defined in [arc.ts:142](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L142)*

return an observable of the list of DAOs

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [IDAOQueryOptions](../interfaces/idaoqueryoptions.md) |  {} | options to pass on to the query |
`apolloQueryOptions` | [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md) |  {} | - |

**Returns:** *Observable‹[DAO](dao.md)[]›*

___

###  ethBalance

▸ **ethBalance**(`owner`: [Address](../globals.md#address)): *Observable‹any›*

*Defined in [arc.ts:168](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L168)*

**Parameters:**

Name | Type |
------ | ------ |
`owner` | [Address](../globals.md#address) |

**Returns:** *Observable‹any›*

___

###  fetchContractInfos

▸ **fetchContractInfos**(`apolloQueryOptions`: [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md)): *Promise‹[IContractInfo](../interfaces/icontractinfo.md)[]›*

*Defined in [arc.ts:110](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L110)*

fetch contractInfos from the subgraph

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`apolloQueryOptions` | [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md) |  {} |

**Returns:** *Promise‹[IContractInfo](../interfaces/icontractinfo.md)[]›*

a list of IContractInfo instances

___

###  getABI

▸ **getABI**(`address`: [Address](../globals.md#address), `abiName?`: undefined | string, `version?`: undefined | string): *any*

*Defined in [arc.ts:269](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | [Address](../globals.md#address) |
`abiName?` | undefined &#124; string |
`version?` | undefined &#124; string |

**Returns:** *any*

___

###  getAccount

▸ **getAccount**(): *Observable‹[Address](../globals.md#address)›*

*Defined in [arc.ts:341](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L341)*

**Returns:** *Observable‹[Address](../globals.md#address)›*

___

###  getContract

▸ **getContract**(`address`: [Address](../globals.md#address), `abi?`: any, `mode?`: undefined | "readonly"): *any*

*Defined in [arc.ts:290](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L290)*

return a web3 Contract instance.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | [Address](../globals.md#address) | address of the contract to look up in self.contractInfos |
`abi?` | any | - |
`mode?` | undefined &#124; "readonly" | - |

**Returns:** *any*

a web3 contract instance

___

###  getContractInfo

▸ **getContractInfo**(`address`: [Address](../globals.md#address)): *[IContractInfo](../interfaces/icontractinfo.md)*

*Defined in [arc.ts:244](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L244)*

return information about the contract

**Parameters:**

Name | Type |
------ | ------ |
`address` | [Address](../globals.md#address) |

**Returns:** *[IContractInfo](../interfaces/icontractinfo.md)*

an IContractInfo instance

___

###  getContractInfoByName

▸ **getContractInfoByName**(`name`: string, `version`: string): *[IContractInfo](../interfaces/icontractinfo.md)*

*Defined in [arc.ts:257](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L257)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`version` | string |

**Returns:** *[IContractInfo](../interfaces/icontractinfo.md)*

___

###  getObservable

▸ **getObservable**(`query`: any, `apolloQueryOptions`: [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md)): *any*

*Inherited from [GraphNodeObserver](graphnodeobserver.md).[getObservable](graphnodeobserver.md#getobservable)*

*Defined in [graphnode.ts:167](https://github.com/daostack/client/blob/3f46a94/src/graphnode.ts#L167)*

Given a gql query, will return an observable of query results

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`query` | any | - | a gql query object to execute |
`apolloQueryOptions` | [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md) |  {} | options to pass on to Apollo, cf .. |

**Returns:** *any*

an Observable that will first yield the current result, and yields updates every time the data changes

___

###  getObservableList

▸ **getObservableList**(`query`: any, `itemMap`: function, `apolloQueryOptions`: [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md)): *any*

*Inherited from [GraphNodeObserver](graphnodeobserver.md).[getObservableList](graphnodeobserver.md#getobservablelist)*

*Defined in [graphnode.ts:269](https://github.com/daostack/client/blob/3f46a94/src/graphnode.ts#L269)*

Returns an observable that:
- sends a query over http and returns the current list of results
- subscribes over a websocket to changes, and returns the updated list.

**`example:`** 
```
   const query = gql`
   {
     daos {
       id
       address
     }
   }`
   getObservableList(query, (r:any) => new DAO(r.address))
```

**Parameters:**

▪ **query**: *any*

The query to be run

▪`Default value`  **itemMap**: *function*=  (o) => o

(optional) a function that takes elements of the list and creates new objects

▸ (`o`: object): *object | null*

**Parameters:**

Name | Type |
------ | ------ |
`o` | object |

▪`Default value`  **apolloQueryOptions**: *[IApolloQueryOptions](../interfaces/iapolloqueryoptions.md)*=  {}

**Returns:** *any*

an Observable

___

###  getObservableListWithFilter

▸ **getObservableListWithFilter**(`query`: any, `itemMap`: function, `filterFunc`: function, `apolloQueryOptions`: [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md)): *any*

*Inherited from [GraphNodeObserver](graphnodeobserver.md).[getObservableListWithFilter](graphnodeobserver.md#getobservablelistwithfilter)*

*Defined in [graphnode.ts:308](https://github.com/daostack/client/blob/3f46a94/src/graphnode.ts#L308)*

Returns an observable that:
- sends a query over http and returns the current list of results
- subscribes over a websocket to changes, and returns the updated list
example:
   const query = gql`
   {
     daos {
       id
       address
     }
   }`
   getObservableList(query, (r:any) => new DAO(r.address), filter((r:any) => r.address === "0x1234..."))

**Parameters:**

▪ **query**: *any*

The query to be run

▪`Default value`  **itemMap**: *function*=  (o) => o

(optional) a function that takes elements of the list and creates new objects

▸ (`o`: object): *object | null*

**Parameters:**

Name | Type |
------ | ------ |
`o` | object |

▪ **filterFunc**: *function*

▸ (`o`: object): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`o` | object |

▪`Default value`  **apolloQueryOptions**: *[IApolloQueryOptions](../interfaces/iapolloqueryoptions.md)*=  {}

**Returns:** *any*

___

###  getObservableObject

▸ **getObservableObject**(`query`: any, `itemMap`: function, `apolloQueryOptions`: [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md)): *any*

*Inherited from [GraphNodeObserver](graphnodeobserver.md).[getObservableObject](graphnodeobserver.md#getobservableobject)*

*Defined in [graphnode.ts:325](https://github.com/daostack/client/blob/3f46a94/src/graphnode.ts#L325)*

**Parameters:**

▪ **query**: *any*

▪`Default value`  **itemMap**: *function*=  (o) => o

▸ (`o`: object): *object | null*

**Parameters:**

Name | Type |
------ | ------ |
`o` | object |

▪`Default value`  **apolloQueryOptions**: *[IApolloQueryOptions](../interfaces/iapolloqueryoptions.md)*=  {}

**Returns:** *any*

___

###  proposal

▸ **proposal**(`id`: string): *[Proposal](proposal.md)*

*Defined in [arc.ts:157](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[Proposal](proposal.md)*

___

###  proposals

▸ **proposals**(`options`: [IProposalQueryOptions](../interfaces/iproposalqueryoptions.md), `apolloQueryOptions`: [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md)): *Observable‹[Proposal](proposal.md)[]›*

*Defined in [arc.ts:161](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L161)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [IProposalQueryOptions](../interfaces/iproposalqueryoptions.md) |  {} |
`apolloQueryOptions` | [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md) |  {} |

**Returns:** *Observable‹[Proposal](proposal.md)[]›*

___

###  saveIPFSData

▸ **saveIPFSData**(`options`: object): *Promise‹string›*

*Defined in [arc.ts:413](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L413)*

save data of a proposal to IPFS, return  the IPFS hash

**Parameters:**

▪ **options**: *object*

an Object to save. This object must have title, url and desction defined

Name | Type |
------ | ------ |
`description` | string |
`title` | string |
`url` | string |

**Returns:** *Promise‹string›*

a Promise that resolves in the IPFS Hash where the file is saved

___

###  scheme

▸ **scheme**(`id`: string): *[Scheme](scheme.md)*

*Defined in [arc.ts:146](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L146)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |

**Returns:** *[Scheme](scheme.md)*

___

###  schemes

▸ **schemes**(`options`: [ISchemeQueryOptions](../interfaces/ischemequeryoptions.md), `apolloQueryOptions`: [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md)): *Observable‹[Scheme](scheme.md)[]›*

*Defined in [arc.ts:150](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L150)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [ISchemeQueryOptions](../interfaces/ischemequeryoptions.md) |  {} |
`apolloQueryOptions` | [IApolloQueryOptions](../interfaces/iapolloqueryoptions.md) |  {} |

**Returns:** *Observable‹[Scheme](scheme.md)[]›*

___

###  sendQuery

▸ **sendQuery**(`query`: any): *Promise‹object›*

*Inherited from [GraphNodeObserver](graphnodeobserver.md).[sendQuery](graphnodeobserver.md#sendquery)*

*Defined in [graphnode.ts:345](https://github.com/daostack/client/blob/3f46a94/src/graphnode.ts#L345)*

**Parameters:**

Name | Type |
------ | ------ |
`query` | any |

**Returns:** *Promise‹object›*

___

###  sendTransaction

▸ **sendTransaction**<**T**>(`transaction`: any, `mapToObject`: function, `errorHandler`: function): *[Operation](../globals.md#operation)‹T›*

*Defined in [arc.ts:400](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L400)*

send an Ethereum transaction

**Type parameters:**

▪ **T**

**Parameters:**

▪ **transaction**: *any*

▪ **mapToObject**: *function*

▸ (`receipt`: [web3receipt](../globals.md#web3receipt)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`receipt` | [web3receipt](../globals.md#web3receipt) |

▪`Default value`  **errorHandler**: *function*=  (error) => error

▸ (`error`: Error): *Promise‹Error› | Error*

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |

**Returns:** *[Operation](../globals.md#operation)‹T›*

An observable of

___

###  setAccount

▸ **setAccount**(`address`: [Address](../globals.md#address)): *void*

*Defined in [arc.ts:375](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L375)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | [Address](../globals.md#address) |

**Returns:** *void*

___

###  setContractInfos

▸ **setContractInfos**(`contractInfos`: [IContractInfo](../interfaces/icontractinfo.md)[]): *Promise‹void›*

*Defined in [arc.ts:99](https://github.com/daostack/client/blob/3f46a94/src/arc.ts#L99)*

set the contract addresses

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`contractInfos` | [IContractInfo](../interfaces/icontractinfo.md)[] | a list of IContractInfo objects |

**Returns:** *Promise‹void›*