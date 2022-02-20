let dropdown = document.querySelector(".topnav ul");
let hamburger = document.querySelector(".hamburger");
let closebtn = document.querySelector(".close");
let navbar = document.querySelector("nav");

hamburger.addEventListener("click", () => {
	dropdown.style.transform = "translateY(0px)";
	if ((dropdown.style.transform = "translateY(0px)")) {
		hamburger.style.display = "none";
		closebtn.style.display = "block";
		navbar.style.backgroundColor = "white";
	}
});

closebtn.addEventListener("click", () => {
	dropdown.style.transform = "translateY(-768px)";
	if ((dropdown.style.transform = "translateY(-768px)")) {
		closebtn.style.display = "none";
		hamburger.style.display = "block";
		navbar.style.backgroundColor = "#ebddca";
	}
});
