import key from './connection.js';

// Random word API fetch ----------------------------------------------------
function getRandomWord(count) {  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': key,
		'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
	}
};
var requestUrl = 'https://random-words5.p.rapidapi.com/getRandom?wordLength='+ count
fetch(requestUrl, options)
	.then(response => response.text())
	.then(data => {
        console.log(data);
        setItemInStorage(data, count);
    }
                    )
    .catch(err => console.error(err));
}

// Fetched random word in local storage -----------------------------------
function setItemInStorage(data, count) {
    var wordInfo = {
        wordLength: count, 
        word: data
    }
    localStorage.setItem("wordInfo", JSON.stringify(wordInfo))
    window.location.assign('./game.html')
}

// Difficulty choice determines # of boxes in game screen ------------------
easy.addEventListener('click', (e) => {
    e.preventDefault()
    var count = 5
    getRandomWord(count)
})

medium.addEventListener('click', (e) => {
    e.preventDefault()
    var count = 6
    getRandomWord(count)
})

hard.addEventListener('click', (e) => {
    e.preventDefault()
    var count = 7
    getRandomWord(count)
})



