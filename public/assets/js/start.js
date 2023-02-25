

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



