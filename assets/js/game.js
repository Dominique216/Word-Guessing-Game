// Global variables
var storage = JSON.parse(localStorage.getItem('wordInfo'))
var count = 5 //storage.wordLength 
var word = 'hello' //storage.word
var row = count+1;
var col = count;
var grid = row*col
var triedWord = Array(row)
                    .fill()
                    .map(() => Array(col).fill(''))
var currentRow = 0
var currentCol = 0

// will get the count var from local storage and change the create grid function to fit depeneding on difficulty chosen;
function getCount() {
    createGrid(count)
    backgroundColor(count)
}

function backgroundColor(count) {
    if(count === 5) {
        document.body.style.backgroundColor = "#06D6A0"
    } else if(count === 6) {
        document.body.style.backgroundColor = "#FFD166"
    } else if(count === 7) {
        document.body.style.backgroundColor = "#EF476F"
    }
}

function createGrid(count) {
    var gameBoard = document.getElementById("grid");
    gameBoard.style.backgroundColor = "#073B4C"
    // 30 (squares) for 5 rows of 6. 
    for(let j = 0; j < row; j++) {
        for(var i=0; i < count; i++) {
         //Creating divs with a class .box and a id with a number in it.
             document.getElementById('grid').style.gridTemplateColumns = 'repeat('+ count +', 1fr)';
              var box = document.createElement("div");
              box.classList.add("box");
              box.style.backgroundColor = "#118AB2"
              box.setAttribute('id', `box${j}${i}`);
              gameBoard.appendChild(box);  
         }       
    }
}

function keyboardEvents() {
    document.body.onkeydown = (e) => {
        var key = e.key;        
        if (key === 'Enter'){
            // console.log('Enter key has been pressed')
            if(currentCol  === count) {
            // let box = document.getElementsByClassName('box')[state.currentCol]
                checkWord() 
                // box.textContent = " "
                currentRow++
                currentCol = 0
            }     
        }

        if (key === 'Backspace') {
                backspace()

        }

        var pressedKey = String(e.key)
        var lettersOnly = pressedKey.match(/[a-z]/i) 
        if(lettersOnly && key.length === 1) {
            letterInput(pressedKey) 
        } else {
            return
        }
    }
}

    // This adds the keyboard input into the boxes...the if statement prevents the user from adding more input after the end of the row is reached
function letterInput(pressedKey) {
    pressedKey = pressedKey.toLowerCase()
    let box = document.getElementById(`box${[currentRow]}${[currentCol]}`)
    if (currentCol === count) {
        return
    } else {
        triedWord[currentRow][currentCol] = pressedKey
        box.textContent = pressedKey
        currentCol++

    }
}

function backspace() {
    let box = document.getElementById(`box${[currentRow]}${[currentCol-1]}`)
    if(currentCol === 0) {
        box.textContent = ''
        return
    } else {
        triedWord[currentRow][currentCol] = ''
        box.textContent = ''
        currentCol--
    }
}

// this puts the letters into an array and it will check if you get the letters right and chagnge color accordingly...Make sure to run the function when the enter key is pressed 
function checkWord() {
    console.log(currentCol)
    var wordArr = word.split('')
    var currWord = triedWord[currentRow].join('')
    var currWordSplit = triedWord[currentRow]
    if(currWord === word) {
        winGame()
    } 
    for(let i = 0; i < count; i++) {
        if (currWordSplit[i] === wordArr[i]) {
            document.getElementById(`box${[currentRow]}${i}`).style.backgroundColor = "#06D6A0"
        } else if (word.includes(currWordSplit[i])) {
            document.getElementById(`box${[currentRow]}${i}`).style.backgroundColor = "#FFD166"
        }
    } 
}

function winGame () {
    console.log("YOU WON!")
    // maybe create a modal of some sore that will say you win and then have a constinue button so that the user can go to the highscores page
}
    keyboardEvents();
    getCount();
