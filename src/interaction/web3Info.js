const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_reason",
				"type": "string"
			}
		],
		"name": "blockFunctions",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idRaffle",
				"type": "uint256"
			}
		],
		"name": "buyTicket",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idRaffle",
				"type": "uint256"
			}
		],
		"name": "closeRaffle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nameRaffle",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_rewardAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_priceTicket",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxTickets",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_days",
				"type": "uint256"
			}
		],
		"name": "createRaffle",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idRaffle",
				"type": "uint256"
			}
		],
		"name": "finishRaffle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idRaffle",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_ticketId",
				"type": "uint256"
			}
		],
		"name": "getMyTicketPriceBack",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint64",
				"name": "subscriptionId",
				"type": "uint64"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "have",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "want",
				"type": "address"
			}
		],
		"name": "OnlyCoordinatorCanFulfill",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "randomWords",
				"type": "uint256[]"
			}
		],
		"name": "rawFulfillRandomWords",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newPercentage",
				"type": "uint256"
			}
		],
		"name": "settingTheMinimunPercentage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getMyInfo",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "_myOwnRafflesId",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_myRafflesId",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_myTickets",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getRaffleByIdPartOne",
		"outputs": [
			{
				"internalType": "address",
				"name": "ownerOfRaffle",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "nameOfRaffle",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "rewardAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "statusRewarded",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "priceTicket",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxTickets",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getRaffleByIdPartTwo",
		"outputs": [
			{
				"internalType": "enum BeeTeamLotteryX.statusRaffle",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "counterTickets",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "_participants",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_tickets",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "initialDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "x_days",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRaffles",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSmartContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "raffles",
		"outputs": [
			{
				"internalType": "address",
				"name": "ownerOfRaffle",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "nameOfRaffle",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "rewardAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "statusRewarded",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "priceTicket",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxTickets",
				"type": "uint256"
			},
			{
				"internalType": "enum BeeTeamLotteryX.statusRaffle",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "counterTickets",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "counterParticipants",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "initialDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "x_days",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "s_randomWords",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "s_requestId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "statusOfBlockedFunctions",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contract = '0x9cC88f150baBf5A0411E2661E39E445963b45bEf';

module.exports = {
    abi : abi,
    contract : contract
}