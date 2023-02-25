

var storage = JSON.parse(localStorage.getItem('wordInfo'))
var storageWord= storage.word


// Api section ---------------------------------------------------------------
var fetchButton = document.getElementById('fetch-button');

function getApi() {
	fetch(`/def/${storageWord}`, {
        method: 'GET',
      })
	.then((response) => {
	  if (response.ok) {
		return response.json();
	  } else {
		throw new Error("NETWORK RESPONSE ERROR");
	  }
	})
	.then(data => {
	  console.log(data);
	  displayDefinition(data)
	})
	.catch((error) => console.error("FETCH ERROR:", error));
}
function displayDefinition(data) {
		const definition = data.definition;
		const definitionDiv = document.getElementById("definition");
		// const wordDef = definition.definition;
		const heading = document.createElement("p");
  		heading.innerHTML = definition;
  		definitionDiv.appendChild(heading);
	} 

	// only let the information from the api be pulled one time
	fetchButton.addEventListener("click", getApi, { once: true });

	
	

var fetchButton2 = document.getElementById('fetch-button2');


function getApi2() {
	fetch(`/song/${storageWord}`, {
        method: 'GET',
      })
	.then((response) => {
	  if (response.ok) {
		return response.json();
	  } else {
		throw new Error("NETWORK RESPONSE ERROR");
	  }
	})
	.then(data => {
	  console.log(data);
	  displaySong(data)
	})
	.catch((error) => console.error("FETCH ERROR:", error));
}
function displaySong(data) {
		const song = data.hits[0];
		const songDiv = document.getElementById("song");
		const songName = song.result.full_title;
		const urlDiv = document.getElementById("url");
		const songUrl = song.result.url
		const heading1 = document.createElement("p");
  		heading1.innerHTML = songName;
		songDiv.appendChild(heading1);
		const heading2 = document.createElement("a");
		heading2.textContent = songUrl
		heading2.href = songUrl
		heading2.setAttribute("target", "_blank")
  		urlDiv.appendChild(heading2);
		console.log(heading2)
	} 

	// // only let the information from the api be pulled one time
	
	fetchButton2.addEventListener("click", getApi2, { once: true });

// Color change -------------------------------------------------------------
// var easyChange = document.getElementById('colorChange2');
// var background = document.getElementById('body');


// fetchButton.addEventListener("mouseover", function() {
//     easyChange.style.color = '#06D6A0'
// 	background.style.backgroundColor = '#EF476F'
// });

// fetchButton2.addEventListener("mouseover", function() {
//     easyChange.style.color = '#FFD166'
// 	background.style.backgroundColor = '#06D6A0'
// });