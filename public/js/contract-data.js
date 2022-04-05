const networks = {
	mainnet: {
		id: 1,
		name: 'Ethereum Mainnet',
		explorer: 'https://etherscan.io/'
	},
	rinkeby: {
		id: 4,
		name: 'Rinkeby Testnet',
		explorer: 'https://rinkeby.etherscan.io/'
	}
}

const contractData = {
	mintingPrice: ethers.utils.parseEther('0.06'),
	network: networks.mainnet,
	address: '0x7e0816f99A132a297561C990a9E8c9B4c5A8f29E',
	abi: [
		'constructor(string,string,address,address)',
		'event Approval(address indexed,address indexed,uint256 indexed)',
		'event ApprovalForAll(address indexed,address indexed,bool)',
		'event NewOutsetDate(uint256 indexed,uint256)',
		'event OwnershipTransferred(address indexed,address indexed)',
		'event Transfer(address indexed,address indexed,uint256 indexed)',
		'function MAX_TOKENS() view returns (uint256)',
		'function MINTING_PRICE() view returns (uint256)',
		'function PUBLIC_MINTING_START_DATE() view returns (uint256)',
		'function RARITIES_REVEAL_DATE() view returns (uint256)',
		'function approve(address,uint256)',
		'function balanceOf(address) view returns (uint256)',
		'function contractURI() view returns (string)',
		'function exists(uint256) view returns (bool)',
		'function getApproved(uint256) view returns (address)',
		'function isApprovedForAll(address,address) view returns (bool)',
		'function journeyPercentage(uint256) view returns (uint256)',
		'function level(uint256) view returns (uint8)',
		'function mintTwin() payable',
		'function mintTwins(uint256) payable',
		'function mintedTokens() view returns (uint256)',
		'function name() view returns (string)',
		'function outsetDate(uint256) view returns (uint256)',
		'function owner() view returns (address)',
		'function ownerOf(uint256) view returns (address)',
		'function raritiesHaveBeenRevealed() view returns (bool)',
		'function rarity(uint256) view returns (uint8)',
		'function renounceOwnership()',
		'function safeTransferFrom(address,address,uint256)',
		'function safeTransferFrom(address,address,uint256,bytes)',
		'function setApprovalForAll(address,bool)',
		'function supportsInterface(bytes4) view returns (bool)',
		'function symbol() view returns (string)',
		'function timeSinceOutset(uint256) view returns (uint256)',
		'function tokenURI(uint256) view returns (string)',
		'function tokensToMint() view returns (uint256)',
		'function transferFrom(address,address,uint256)',
		'function transferOwnership(address)',
		'function withdraw()'
	]
}
