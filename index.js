
let slider_R = document.getElementById("R");
let output_R = document.getElementById("R_value");
let slider_G = document.getElementById("G");
let output_G = document.getElementById("G_value");
let slider_B = document.getElementById("B");
let output_B = document.getElementById("B_value");
let showRGB = document.getElementById('RGB')
console.log(showRGB)
output_R.innerHTML = slider_R.value;
output_G.innerHTML = slider_G.value;
output_B.innerHTML = slider_B.value;

slider_R.oninput = function () {
	output_R.innerHTML = this.value;
}
slider_G.oninput = function () {
	output_G.innerHTML = this.value;
}
slider_B.oninput = function () {
	output_B.innerHTML = this.value;
}

function RGBChange() {	
	showRGB.style.background= 'rgb(' + slider_R.value + ',' + slider_G.value + ',' + slider_B.value+ ')'
	console.log(showRGB.style.background)
  console.log(typeof(slider_R.value))
	let hex_r = parseInt(slider_R.value).toString(16)
	while (hex_r.length < 2) {
		hex_r += '0'
	}
	let hex_g = parseInt(slider_G.value).toString(16)
	while (hex_g.length < 2) {
		hex_g += '0'
	}
	let hex_b = parseInt(slider_B.value).toString(16)
	while (hex_b.length < 2) {
		hex_b += '0'
	}
	let HEXvalue = hex_r+hex_g+hex_b
	document.getElementById('HEX_value').innerHTML = `#${HEXvalue}` 
};
RGBChange()







