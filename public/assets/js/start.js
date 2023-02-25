
// import key from './connection.js';

// Random word API fetch ----------------------------------------------------
// function getRandomWord(count) {  



// //     const options = {
// // 	method: 'GET',
// // 	headers: {
// // 		'X-RapidAPI-Key': key,
// // 		'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
// // 	}
// // };
// // var requestUrl = 'https://random-words5.p.rapidapi.com/getRandom?wordLength='+ count
// // fetch(requestUrl, options)
// 	// .then(response => response.text())
// 	// .then(data => {
//     //     console.log(data);
//     //     setItemInStorage(data, count);
//     // }
//     //                 )
//     // .catch(err => console.error(err));


// }

// Fetched random word in local storage -----------------------------------
function setItemInStorage(data, count) {
    var wordInfo = {
        wordLength: count, 
        word: data
    }
    localStorage.setItem("wordInfo", JSON.stringify(wordInfo))
    document.location.replace('/game')
}

// Difficulty choice determines # of boxes in game screen ------------------
easy.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('/word/5', {
        method: 'GET',
      })
      .then(response => response.text())
	.then(data => {
        console.log(data);
        setItemInStorage(data, 5);
    })
    .catch(err => console.error(err));
})

medium.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('/word/6', {
        method: 'GET',
      })
      .then(response => response.text())
	.then(data => {
        console.log(data);
        setItemInStorage(data, 6);
    })
    .catch(err => console.error(err));
})

hard.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('/word/7', {
        method: 'GET',
      })
      .then(response => response.text())
	.then(data => {
        console.log(data);
        setItemInStorage(data, 7);
    })
    .catch(err => console.error(err));
})



