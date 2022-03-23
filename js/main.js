//FrontEnd section (Mood toogle)

const root = document.documentElement.style,
 logo = document.getElementById("logo"),
 toogleButton = document.getElementById("toogle-button"),
 searchBox = document.getElementById("search-box-container"),
 userInput = document.getElementById("user-input"),
 moodIcon = document.getElementById("mood-state-icon"),
 moodText = document.getElementById("mood-state-text"),
 contentCard = document.getElementById("content-card");

// toggle key
let mood = "dark";

toogleButton.addEventListener("click", moodChange);

function moodChange () {
	if (mood == "dark") {
		LightMode()
	}

	else {
		DarkMode()
	}
}

function LightMode () {
	root.setProperty("--main-bg", "#F6F8FF");
	root.setProperty("--content-bg", "#FEFEFE");
	root.setProperty("--user-static-bg", "#F6F8FF");
	root.setProperty("--user-static-text-color", "#4B6A9B");
	root.setProperty("--text-color", "#4B6A9B");
	root.setProperty("--filter-value", "none");
	moodIcon.src = "images/icon-moon.svg";
	moodText.innerHTML = "Dark";
	searchBox.classList.toggle("shadow");
	contentCard.classList.toggle("shadow")
	userInput.classList.add("user-input-light");
	document.getElementById("submit").style.color = "white";
	document.getElementById("username").style.color = "black";
	logo.style.color = "black";
	
	for (var i = 0; i < document.getElementsByClassName("user-static-value").length; i++) {
		document.getElementsByClassName("user-static-value")[i].style.color = "black"
	}

	mood = "light";
}

function DarkMode () {
	root.setProperty("--main-bg", "#141D2F");
	root.setProperty("--content-bg", "#1E2A47");
	root.setProperty("--user-static-bg", "rgba(0, 0, 0, 0.3)");
	root.setProperty("--user-static-text-color", "#d0d0d0");
	root.setProperty("--text-color", "white");
	root.setProperty("--filter-value", "brightness(1000)");
	moodIcon.src = "images/icon-sun.svg";
	moodText.innerHTML = "Light";
	searchBox.classList.toggle("shadow");
	contentCard.classList.toggle("shadow");
	userInput.classList.remove("user-input-light");
	document.getElementById("username").style.color = "white";
	logo.style.color = "white";
	
	for (var i = 0; i < document.getElementsByClassName("user-static-value").length; i++) {
		document.getElementsByClassName("user-static-value")[i].style.color = "white";
	}

	mood = "dark";
}

/***************************** backEnd section **********************************************/