const connectWalletButton = $('#connect-wallet-button')
const mintButton = $('#mint-button')
const mintingAmount = $('#minting-amount')
const tokenRecipient = $('#token-recipient')

connectWalletButton.addEventListener('click', async function () {
	await connectWallet()
})

mintButton.addEventListener('click', async function () {
	await mint()
})
