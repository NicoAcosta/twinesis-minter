init()

const amount = () => {
	const amount = $('#minting-amount').value
	checkNotEmpty(amount)
	return amount
}

const publicMintingTokensMinted = () => {}

const verifySupply = async (_amount) => {
	const MAX_TOKENS_TO_MINT = 66
	console.log('MAX_TOKENS_TO_MINT', MAX_TOKENS_TO_MINT)

	const publicMintingTokensMinted_ =
		await contract.publicMintingTokensMinted()
	const publicMintingTokensMinted = publicMintingTokensMinted_.toNumber()

	console.log('publicMintingTokensMinted', publicMintingTokensMinted)

	if (publicMintingTokensMinted >= MAX_TOKENS_TO_MINT) {
		alert('Maximum Violet supply reached')
		window.location.reload()
	}

	const tokensLeftToMint = MAX_TOKENS_TO_MINT - publicMintingTokensMinted
	console.log('tokensLeftToMint', tokensLeftToMint)

	if (_amount > tokensLeftToMint) {
		alert(
			`Cannot mint this amount of tokens. Tokens left to be minted: ${tokensLeftToMint}`
		)
		window.location.reload()
	}
}

const mint = async () => {
	const _amount = amount()
	console.log('amount', _amount)

	await verifySupply(_amount)

	if (!signer) await connectWallet()

	let tx

	if (_amount == 1) {
		tx = await callMintViolet()
	} else if (_amount > 1) {
		tx = await callMintViolets(_amount)
	}

	txAlert(tx)

	const rc = await tx.wait()

	bootstrapAlert('Transaction mined. Go find your NFT on OpenSea!', 'success')

	const events = rc.events.filter((event) => event.event === 'Transfer')

	for (let event of events) {
		const [from, to, id] = event.args
		bootstrapAlert('Minted token #' + id, 'success')
	}
}

// contract calls

const recipient = async () => {
	let _recipient
	if (tokenRecipient == null) {
		_recipient = await signer.getAddress()
	} else {
		_recipient = ethers.utils.getAddress(tokenRecipient.value)
	}
	console.log('Recipient:', _recipient)
	return _recipient
}

const callMintViolet = async () => {
	let call
	try {
		call = await contractWithSigner.mintViolet(await recipient(), {
			value: contractData.mintingPrice
		})
	} catch (err) {
		console.log(err)
	}
	return call
}

const callMintViolets = async (_amount) => {
	let call
	let recipient
	try {
		call = await contractWithSigner.mintViolets(
			await recipient(),
			_amount,
			{
				value: contractData.mintingPrice.mul(_amount)
			}
		)
	} catch (err) {
		bootstrapAlert(err.code, 'danger')
	}
	return call
}
