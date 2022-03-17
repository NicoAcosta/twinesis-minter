function $(string) {
	return document.querySelector(string)
}

const checkNotEmpty = (value) => {
	if (value == null || value == '' || value < 1 || value == undefined) {
		alert('Must set an amount of tokens to mint')

		window.location.reload()
	}
}

const etherscanURL = (tx) => {
	return contractData.network.explorer + 'tx/' + tx.hash
}

// Boostrap alert

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const bootstrapAlert = (message, type) => {
	var wrapper = document.createElement('div')
	wrapper.innerHTML =
		'<div class="alert alert-' +
		type +
		' alert-dismissible" role="alert">' +
		message +
		'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

	alertPlaceholder.append(wrapper)
}

const txAlert = (tx) => {
	var wrapper = document.createElement('div')

	const url = etherscanURL(tx)
	const message =
		'Waiting for transaction to be mined... Track it on Etherscan ' + url

	wrapper.innerHTML =
		'<div class="alert alert-' +
		'success' +
		' alert-dismissible" role="alert">' +
		message +
		'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

	alertPlaceholder.append(wrapper)
}
