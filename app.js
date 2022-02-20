let dropdown = document.querySelector("nav ul");
let hamburger = document.querySelector(".hamburger");
let closebtn = document.querySelector(".close");

hamburger.addEventListener("click", () => {
	dropdown.style.transform = "translateX(0px)";
	if ((dropdown.style.transform = "translateX(0px)")) {
		hamburger.style.display = "none";
		closebtn.style.display = "block";
	}
});

closebtn.addEventListener("click", () => {
	dropdown.style.transform = "translateX(768px)";
	if ((dropdown.style.transform = "translateX(768px)")) {
		hamburger.style.transform = "block";
		closebtn.style.display = "none";
	}
});
