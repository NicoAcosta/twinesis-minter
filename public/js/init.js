let provider
let signer
let contract
let contractWithSigner

const init = async () => {
	provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
	provider.on('network', (newNetwork, oldNetwork) => {
		// When a Provider makes its initial connection, it emits a "network"
		// event with a null oldNetwork along with the newNetwork. So, if the
		// oldNetwork exists, it represents a changing network
		if (oldNetwork) {
			window.location.reload()
		}
	})

	await checkNetwork()

	contract = new ethers.Contract(
		contractData.address,
		contractData.abi,
		provider
	)

	// $('.title').innerText = await contract.name()
}

const connectWallet = async () => {
	// request addresses
	await provider.send('eth_requestAccounts', [])

	signer = provider.getSigner()

	contractWithSigner = await contract.connect(signer)
}

const checkNetwork = async () => {
	const currentNetwork = await provider.getNetwork()
	const expectedNetwork = contractData.network
	if (currentNetwork.chainId != expectedNetwork.id)
		bootstrapAlert(`Change network to ${expectedNetwork.name}`, 'danger')
}
