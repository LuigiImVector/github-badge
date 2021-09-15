function changeNumber() {
	document.getElementById("years-number").textContent = getValue;
}

let getValue;

window.addEventListener("load", function () {
	let name="years";
	if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      getValue = decodeURIComponent(name[1]);
  
	changeNumber();
});