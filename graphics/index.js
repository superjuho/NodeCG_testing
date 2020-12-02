import { gsap } from '../node_modules/gsap/index.js';

const nameElement = document.getElementById('name');
const informationElement = document.getElementById('information');
const lowThird = document.getElementById('lowThird');
const colorBlc = document.getElementById('colorBlock');
const textContainer = document.getElementById('textContainer');

nodecg.listenFor('showLowerthird', (data) =>{
	lowThird.style["opacity"] = "1";
 	nameElement.innerHTML = data.name;
	informationElement.innerHTML = data.information;

	const tl = gsap.timeline();
	tl.from([ lowThird, colorBlc, textContainer], 1, {width: 0 });
	tl.from([ nameElement, informationElement], 1, { width: 0 , opacity: 0});
	tl.to([ nameElement, informationElement ], 1, { width: 0, opacity: 0}, "+=3");
	tl.to([ lowThird, colorBlc, textContainer], 1, {width: 0 });


	tl.call(() => {
		nameElement.innerHTML = "";
		informationElement.innerHTML = "";
		lowThird.style["opacity"] = "0";
	})

	tl.set([lowThird, colorBlc, textContainer, informationElement, nameElement], {width: ""})
	tl.set([nameElement, informationElement], {opacity: 1})

})
