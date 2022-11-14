//Clone the don inside wrapper
let box = document.querySelector('.c');
console.log(box);
for(let x = 0; x < 223; x++) {
	let cln = box.cloneNode(true);
	document.querySelector('.wrap').appendChild(cln)
}
