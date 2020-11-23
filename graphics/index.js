const nameElement = document.getElementById('name');
const informationElement = document.getElementById('information');

nodecg.listenFor('showLowerthird', (data) =>{
	nameElement.innerHTML = data.name;
	informationElement.innerHTML = data.information;

})
