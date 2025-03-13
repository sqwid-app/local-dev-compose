const TESTNET = 'reef_testnet';
const MAINNET = 'reef_mainnet';

const networks = {
    [TESTNET]: {
        rpc: 'wss://rpc-testnet.reefscan.com/ws',
        contracts: {
            marketplace: '0x31939DF5c6A5ac0b574EDE6E610Fd30c08788A53',
            erc1155: '0x9FdEb478A27E216f80DaEE0967dc426338eD02f2',
            utility: '0x8E7Ef6bD28cD9bDb6DBf105140958ac03EeC371A',
            multicall: '0x399d847d3D8F6b9F9A30e4Dc9C89F65a4EF65821'
        },
        typesense: {
            collections: {
                collections: 'testnet_collections',
                users: 'testnet_users',
                collectibles: 'testnet_collectibles',
            },
            host: 'search.sqwid.app'
        },
        useCache: false,
        graphql_api_explorer: 'https://squid.subsquid.io/reef-explorer-testnet/graphql',
        graphql_api_marketplace: 'http://squid.subsquid.io/sqwid-marketplace-testnet/graphql',
    },
    [MAINNET]: {
        rpc: process.env.WS_URL??'wss://rpc.reefscan.com/ws',
        contracts: {
            marketplace: "0x8E03791B24b0AABd288986BE002729141741207f",
            erc1155: "0x2882b731a0bff8EfA312b32f11075391396c6e8d",
            utility: "0x5Ce27f1b6f3C1Ce0669e90bBB3CBa20F98871746",
            multicall: "0x137A7237e2a5f7f2eEE1C1471fbb26d0be8Fcc60"
        },
        typesense: {
            collections: {
                collections: 'mainnet_collections',
                users: 'mainnet_users',
                collectibles: 'mainnet_collectibles',
            },
            host: 'search.sqwid.app'
        },
        useCache: false,
        graphql_api_explorer: 'https://squid.subsquid.io/reef-explorer/graphql',
        graphql_api_marketplace: process.env.MARKETPLACE_SQWID_URL,
    }
}

const TEMP_PATH = "./temp-uploads/";

const config = {
        testnet: {
            marketplaceContractAddress: '0x31939DF5c6A5ac0b574EDE6E610Fd30c08788A53',
            nftContractAddress: '0x9FdEb478A27E216f80DaEE0967dc426338eD02f2',
            explorerGraphqlUrl: 'https://squid.subsquid.io/reef-explorer-testnet/graphql',
            marketplaceGraphqlUrl: 'https://squid.subsquid.io/sqwid-marketplace-testnet/graphql',
          },
          mainnet: {
            marketplaceContractAddress: '0x8E03791B24b0AABd288986BE002729141741207f',
            nftContractAddress: '0x2882b731a0bff8EfA312b32f11075391396c6e8d',
            explorerGraphqlUrl: 'https://squid.subsquid.io/reef-explorer/graphql',
            marketplaceGraphqlUrl: process.env.MARKETPLACE_SQWID_URL,
          }
    }

const envNetwork = Object.keys(networks).find((prop)=>prop===process.env.NETWORK);

if (!envNetwork) {
    throw new Error('process.env.NETWORK value='+ process.env.NETWORK +' not a property name of '+ Object.keys(networks));
}

const moderators = process.env.MODERATORS?.split(',')??[];

module.exports = {
    networks,
    defaultNetwork: process.env.NETWORK,
    defaultCollectionId: 'ASwOXeRM5DfghnURP4g2',
    moderators,
    TEMP_PATH,
    config,
    TESTNET,
    MAINNET
};
