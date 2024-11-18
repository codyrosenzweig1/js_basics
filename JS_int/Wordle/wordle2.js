var height = 6;
var width = 5;

var row = 0;
var col = 0;

var gameOver = false;

var wordList = ["apple", "mango", "river", "hyped", "tokyo", "title", "ouija"];

// Selectes the secret word to be one of the words within our list
var word = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();

console.log(word);

window.onload = function(){
    initialize();
}

function initialize(){
    for (let r=0; r < height; r++){
        for (let c=0; c<width; c++){
            let tile = document.createElement("span");
            tile.id = r.toString()+"-"+c.toString();
            tile.classList.add("tile");
            tile.innerText = "_";
            document.getElementById("board").appendChild(tile);            
        }
    }

document.addEventListener("keyup", (e) => {
    processInput(e);
    //handleKeyPress(e);
})
}

// function handleKeyPress(e){
//     let keyCode = e.keyCode;

//     let key = String.fromCharCode(keyCode);
    
//     if(keyCode == 13){
//         let key = "enter";
//         console.log(key)
//         //console.log("Pressed key;", key)
//     }

//     console.log(key)

//     //console.log("Pressed key;", key)
//     //console.log("e.code;" e.code)
//     processInput(key);
// }

function processInput(key){
    let code = key.keyCode;

    if(gameOver){
        return;
    }
    console.log(code);
    if(65 <= code && code <= 90){
        //console.log("in")
        if (col <= width){
            
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            //console.log(document.getElementById(row.toString() + '-' + col.toString()));
            //console.log(currTile.innerText)
            if(currTile.innerText == "_"){
                // changes the display of the tile to be the letter represented by the code
                currTile.innerText = String.fromCharCode(code);
                col += 1;
            }
        }
    }
    // Apparently 8 is the code for a backspace
    else if (code == 8){
        if(0<col && col <= width){
            col-= 1
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "_";
    }
    // 13 is the code for enter
    else if(code == 13){
        //row += 1
        col = 0
        update();
    }
    if (!gameOver && row == height){
        gameOver == true;
        document.getElementById("answer").innerText = word;
    }
}

// Our function update should check the word we have guessed and change the colour of the letter depending how correct or incorrect it is
function update(){
    let guess = ""
    for (let c=0; c<width; c++){
        let currTile = document.getElementById((row).toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;

        if(word[c] == letter){
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");
        }

    }

    for (let c=0; c<width; c++){
        let currTile = document.getElementById((row).toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
        // If the letter at the cth spot is the same then both have the letter in the same spot
        if (word[c] == guess[c]){
            console.log("word", word[c])
            console.log("guess;", guess[c])    
            console.log("same")
        }
        else{
        for (let i =0; i<width; i++){
           //Check if the letter exists in the word but wrong spot
           // So as we loop through guess we loop through the word again and if the letter matches the letter must be present
           if (word[c] == guess[i] && c != i){
            console.log("word", word[i])
            console.log("guess;", guess[c])    
            console.log("present")
           } else if (!(word[c] == guess[c])){
            console.log("word", word[i]);
    console.log("guess", guess[c]);
    console.log("absent");
           }

           }
        }
    }
}