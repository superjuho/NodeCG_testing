import { gsap } from '../node_modules/gsap/index.js';

const nameElement = document.getElementById('name');
const informationElement = document.getElementById('information');
const lowThird = document.getElementById('lowThird');
const colorBlc = document.getElementById('colorBlock');
const textContainer = document.getElementById('textContainer');

nodecg.listenFor('showLowerthird', (data) =>{
	nameElement.innerHTML = data.name;
	informationElement.innerHTML = data.information;

	const tl = gsap.timeline();
	tl.from([ lowThird, colorBlc, textContainer], 1, {width: 0, opacity: 1});
	tl.from([ nameElement, informationElement], 1, { opacity: 0 });
	tl.to([ nameElement, informationElement ], 1, { opacity: 1 });
	tl.to([ lowThird, colorBlc, textContainer], 1, {width: 0, opacity: 1 });


	tl.call(() => {
		nameElement.innerHTML = "";
		informationElement.innerHTML = "";
	})

	tl.set([textContainer, lowThird, colorBlc, nameElement, informationElement], {width:""})

})
