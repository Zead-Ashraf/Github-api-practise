// fetch octocat

window.onload = () => {
  fetch(url+"octocat").then((result) => result.json()).then((data) => {
		if (data.message == "Not Found") {
	  		document.getElementById("warnning").innerHTML = "No Result"
		} 

		else {
			newStart();

			usernamealt = data.login;
	  		userAvatar.src = data.avatar_url;
	  		setUsername(data.name, username);
	  		userBrand.href = checkdata(data.html_url, "url");
	  		userBrandValue.innerHTML = data.login;
	  		joinDate.childNodes[1].innerHTML = data.created_at.split(/-|[A-Z]\w/)[2];
	  		joinDate.childNodes[3].innerHTML = monthConvert(data.created_at.split(/-|[A-Z]\w/)[1]);
	  		joinDate.childNodes[5].innerHTML = data.created_at.split(/-|[A-Z]\w/)[0];
	  		userBio.innerHTML = checkdata(data.bio, "bio");
	  		userRepos.innerHTML = checkdata(data.public_repos, "statics");
	  		userFollowers.innerHTML = checkdata(data.followers, "statics");
	  		userFollowing.innerHTML = checkdata(data.following, "statics");
	  		userLocation.innerHTML = checkdata(data.location, "accounts", userLocation);
			userWebsite.innerHTML = checkdata(data.blog, "accounts", userWebsite);
			userTwitter.innerHTML = checkdata(data.twitter_username, "accounts", userTwitter);
			userCompany.innerHTML = checkdata(data.company, "accounts", userCompany);
		}
	});
}

// BackEnd section
const url = "https://api.github.com/users/",
 form = document.getElementById("form"),
  userAvatar = document.getElementById("user-image"),
  username = document.getElementById("username"),
  userBrand = document.getElementById("user-brand"),
  userBrandValue = document.getElementById("user-brand-vlaue"),
  joinDate = document.getElementById("join-date"),
  userBio = document.getElementById("user-bio"),
  userRepos = document.getElementById("user-static-repos"),
  userFollowers = document.getElementById("user-static-followers"),
  userFollowing = document.getElementById("user-static-following"),
  userLocation =document.getElementById("user-accounts-location"),
  userWebsite = document.getElementById("user-accounts-website"),
  userTwitter = document.getElementById("user-accounts-twitter"),
  userCompany = document.getElementById("user-accounts-company");

/**********************************************************************************/

// remove loader
let loadingScreen = document.querySelector(".loader");

userAvatar.onload = () => {
	setTimeout(hideLoading, 5000)
}

function hideLoading() {
  loadingScreen.style.cssText = "opacity: 0;";
  setTimeout(() => (loadingScreen.style.cssText = "display: none;"), 1000);
}

/**********************************************************************************/

let userInputValue = document.getElementById("user-input").value;

let usernamealt;

form.addEventListener("submit", RequestApi)

function RequestApi (e) {
	e.preventDefault();

	userInputValue = document.getElementById("user-input").value;

	userInputValue = userInputValue.trim().replaceAll(" ", "");

	fetch(url+userInputValue).then((result) => result.json()).then((data) => {
		if (data.message == "Not Found") {
	  		document.getElementById("warnning").innerHTML = "No Result"
		} 

		else {
			newStart();

			usernamealt = data.login;
	  		userAvatar.src = data.avatar_url;
	  		setUsername(data.name, username);
	  		userBrand.href = checkdata(data.html_url, "url");
	  		userBrandValue.innerHTML = data.login;
	  		joinDate.childNodes[1].innerHTML = data.created_at.split(/-|[A-Z]\w/)[2];
	  		joinDate.childNodes[3].innerHTML = monthConvert(data.created_at.split(/-|[A-Z]\w/)[1]);
	  		joinDate.childNodes[5].innerHTML = data.created_at.split(/-|[A-Z]\w/)[0];
	  		userBio.innerHTML = checkdata(data.bio, "bio");
	  		userRepos.innerHTML = checkdata(data.public_repos, "statics");
	  		userFollowers.innerHTML = checkdata(data.followers, "statics");
	  		userFollowing.innerHTML = checkdata(data.following, "statics");
	  		userLocation.innerHTML = checkdata(data.location, "accounts", userLocation);
			userWebsite.innerHTML = checkdata(data.blog, "accounts", userWebsite);
			userTwitter.innerHTML = checkdata(data.twitter_username, "accounts", userTwitter);
			userCompany.innerHTML = checkdata(data.company, "accounts", userCompany);
		}
	});
}

function newStart () {
	userLocation.parentElement.classList = "";
	userWebsite.parentElement.classList = "";
	userTwitter.parentElement.classList = "";
	userCompany.parentElement.classList = "";
}

function setUsername (data, inject) {
	if (data == null) {
		inject.innerHTML = usernamealt;
	}

	else {
		inject.innerHTML = data;
	}
}

function checkdata (data, testLevel, target="") {
	if (!data && testLevel == "url") {
		userBrand.color = "--text-color";
		return "#"
	}

	else if (!data && testLevel == "bio") {
		return "This user has No bio"
	}

	else if (!data && testLevel == "statics") {
		return "#"
	}

	else if (!data && testLevel == "accounts") {
		target.parentElement.classList = "unavailable"
		return "Not Available"
	}


	else {
		return data
	}
}

function monthConvert (month) {
	switch (month) {
		case "01":
			return "Jan";
		case "02":
			return "Feb";
		case "03":
			return "Mar";
		case "04":
			return "Apr";
		case "05":
			return "May";
		case "06":
			return "Jun";
		case "07":
			return "Jul";
		case "08":
			return "Aug";
		case "09":
			return "Sep";
		case "10":
			return "Oct";
		case "11":
			return "Nov";
		case "12":
			return "Dec";
  	};
}

/***************************** FrontEnd section (Mood toogle) ********************************/

const root = document.documentElement.style,
 logo = document.getElementById("logo"),
 toogleButton = document.getElementById("toogle-button"),
 searchBox = document.getElementById("search-box-container"),
 moodIcon = document.getElementById("mood-state-icon"),
 moodText = document.getElementById("mood-state-text"),
 contentCard = document.getElementById("content-card"),
 userInput = document.getElementById("user-input");

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