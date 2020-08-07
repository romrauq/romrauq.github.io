let burgerButton = document.getElementById("burger-btn");
let closeButton = document.getElementById("close-btn");
burgerButton.addEventListener("click", openSlideMenu);
closeButton.addEventListener("click", closeSlideMenu);

function openSlideMenu() {
	document.getElementById("side-menu").style.width = "100vw";
	document.getElementById("showcase-body").style.pointerEvents = "none";
}

function closeSlideMenu() {
	document.getElementById("side-menu").style.width = "0";
	document.getElementById("showcase-body").style.pointerEvents = "all";
}
