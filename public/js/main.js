init()

const amount = () => {
	const amount = $('#minting-amount').value
	checkNotEmpty(amount)
	return amount
}

const mint = async () => {
	if (!signer) await connectWallet()

	let tx
	const _amount = amount()

	if (_amount == 1) {
		tx = await callMintTwin()
	} else if (_amount > 1) {
		tx = await callMintTwins(_amount)
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

const callMintTwin = async () => {
	let call
	try {
		call = await contractWithSigner.mintTwin({
			value: contractData.mintingPrice
		})
	} catch (err) {
		console.log(err)
	}
	return call
}

const callMintTwins = async (_amount) => {
	let call
	try {
		call = await contractWithSigner.mintTwins(_amount, {
			value: contractData.mintingPrice.mul(_amount)
		})
	} catch (err) {
		bootstrapAlert(err.code, 'danger')
	}
	return call
}
