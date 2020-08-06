function openSlideMenu() {
	document.getElementById("side-menu").style.width = "70vw";
	document.getElementById("showcase-body").style.pointerEvents = "none";
}

function closeSlideMenu() {
	document.getElementById("side-menu").style.width = "0";
	document.getElementById("showcase-body").style.pointerEvents = "all";
}
