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
	mintingPrice: ethers.utils.parseEther('0.04'),
	network: networks.rinkeby,
	address: '0x992169E83Ed808dCECe6347c558BB3C8dFA29D1B',
	abi: [
		'constructor(string,address,address)',
		'event Approval(address indexed,address indexed,uint256 indexed)',
		'event ApprovalForAll(address indexed,address indexed,bool)',
		'event OwnershipTransferred(address indexed,address indexed)',
		'event Transfer(address indexed,address indexed,uint256 indexed)',
		'function MINTING_START_DATE() view returns (uint256)',
		'function approve(address,uint256)',
		'function balanceOf(address) view returns (uint256)',
		'function contractURI() view returns (string)',
		'function exists(uint256) view returns (bool)',
		'function getApproved(uint256) view returns (address)',
		'function glassVideo() view returns (address)',
		'function isApprovedForAll(address,address) view returns (bool)',
		'function isFirstMintingPeriodActive() view returns (bool)',
		'function maxPublicMintingSupply() view returns (uint256)',
		'function mintViolet(address) payable',
		'function mintVioletFromGlassVideo(address,uint256)',
		'function mintViolets(address,uint256) payable',
		'function mintingPrice() view returns (uint256)',
		'function name() view returns (string)',
		'function owner() view returns (address)',
		'function ownerOf(uint256) view returns (address)',
		'function publicMintingTokensMinted() view returns (uint256)',
		'function renounceOwnership()',
		'function safeTransferFrom(address,address,uint256)',
		'function safeTransferFrom(address,address,uint256,bytes)',
		'function setApprovalForAll(address,bool)',
		'function setContractURI(string)',
		'function setGlassVideoContract(address)',
		'function supportsInterface(bytes4) view returns (bool)',
		'function symbol() view returns (string)',
		'function tokenURI(uint256) view returns (string)',
		'function tokensLeftToMint() view returns (uint256)',
		'function totalSupply() view returns (uint256)',
		'function transferFrom(address,address,uint256)',
		'function transferOwnership(address)',
		'function updateMaxPublicMintingSupply(uint256)',
		'function updateMintingPrice(uint256)',
		'function usedGlassVideoTokenForMinting(uint256) view returns (bool)',
		'function withdrawERC20(address)',
		'function withdrawETH()'
	]
}
