const time = document.getElementById("time");
const options = {
	timeZone: "Europe/Helsinki",
	dateStyle: "full",
	timeStyle: "medium",
};

function displayTime() {
	const dateString = new Date().toLocaleString("fi-Fi", options);
	time.innerHTML = `${dateString.charAt(0).toUpperCase()}${dateString.slice(1)}`;
}

setInterval(displayTime, 1000);
