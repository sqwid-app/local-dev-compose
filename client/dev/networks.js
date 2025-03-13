export const networks = {
	reef_testnet: {
		rpc: "wss://rpc-testnet.reefscan.com/ws",
		contracts: {
			marketplace: "0x31939DF5c6A5ac0b574EDE6E610Fd30c08788A53",
			erc1155: "0x9FdEb478A27E216f80DaEE0967dc426338eD02f2",
			utility: "0x8E7Ef6bD28cD9bDb6DBf105140958ac03EeC371A",
		},
		backend: "https://sqwid-api-testnet.reefscan.info",
		// backend: "http://localhost:80",
	},
	reef_mainnet: {
		rpc: "wss://rpc.reefscan.com/ws",
		contracts: {
			marketplace: "0x8E03791B24b0AABd288986BE002729141741207f",
			erc1155: "0x2882b731a0bff8EfA312b32f11075391396c6e8d",
			utility: "0x5Ce27f1b6f3C1Ce0669e90bBB3CBa20F98871746",
		},
		// backend: "https://sqwid-api-mainnet.reefscan.info",
		backend: "http://localhost:80",
	},
};

export const defaultNetwork =
	process.env.NETWORK || "reef_mainnet";