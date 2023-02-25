require("dotenv").config();
const express = require("express");
const path = require('path');
const app = express();
const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// render first page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

// random word api call
app.get('/word/:count', async (req, res) => {
    try{
         const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
            }
        };
        var requestUrl = `https://random-words5.p.rapidapi.com/getRandom?wordLength=${req.params.count}`
       const randomWord  = await fetch(requestUrl, options)
       .then(response => response.text())
    res.send(randomWord)
    } 
    catch(err) {
        console.log(err)
    }   
})

// render gamepage
app.get('/game', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public/game.html'));
})

// Last page
app.get('/extra-info', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public/highscores.html'))
})

// definition api call
app.get('/def/:storageWord', async (req, res) => {
    try{
         const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
            }
        };
        var requestUrl = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${req.params.storageWord}`
       const def = await fetch(requestUrl, options)
                .then(res => res.json())
                res.send(def)
    } 
    catch(err) {
        console.log(err)
    }   
})

// get song  api
app.get('/song/:storageWord', async (req, res) => {
    try{
         const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
            }
        };
        var requestUrl = `https://genius-song-lyrics1.p.rapidapi.com/search/?q=${req.params.storageWord}&per_page=10&page=1`
        const song = await fetch(requestUrl, options)
        .then(res => res.json())
        res.send(song)
    } 
    catch(err) {
        console.log(err)
    }   
})

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);