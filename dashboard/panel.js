const nameInput = document.getElementById('name');
const informationInput = document.getElementById('information');

function update() {
	const data = {name: nameInput.value, information: informationInput.value}
	nodecg.sendMessage('showLowerthird', data);
}
