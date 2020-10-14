const gameStatus = document.querySelector("#status-display");
const rollBttn = document.querySelector("#roll-dice");
const diceImg = document.querySelector("#dice-img");
const diceArr = [
  "dice1.png",
  "dice2.png",
  "dice3.png",
  "dice4.png",
  "dice5.png",
  "dice6.png",
];
let player1Arr = [];
let player2Arr = [];
let player1Score = 0;
let player2Score = 0;

let player1ScoreContainer = document.querySelector(".player1-score");
let player2ScoreContainer = document.querySelector(".player2-score");
let activePlayer = "player 1";
console.log(activePlayer);

rollBttn.addEventListener("click", rollDice);

function rollDice() {
  let randNum = Math.floor(Math.random() * 6 + 1);
  diceImg.src = diceArr[randNum - 1];
  diceImg.setAttribute("style", "display:block");
  if (activePlayer === "player 1") {
    player1Arr.push(randNum);
    player1Score = 0;
    for (dice of player1Arr) {
      player1Score += dice;
      player1ScoreContainer.textContent = player1Score;
      gameStatus.textContent = "Its Player 2's turn!"
      console.log(player1Arr);
    }
  }
  if (activePlayer === "player 2") {
    player2Arr.push(randNum);
    player2Score = 0;
    for (dice of player2Arr) {
      player2Score += dice;
      player2ScoreContainer.textContent = player2Score;
      gameStatus.textContent = "Its Player 1's turn!"
      console.log(player2Arr);
    }
  }
  checkForWin();
  
  
  console.log(activePlayer);
}

function changePlayer() {
  if (activePlayer === "player 1") {
    activePlayer = "player 2";
  } else {
    activePlayer = "player 1";
  }
  
}
function checkForWin(){
    rollBttn.removeEventListener('click',newGame);
    if(player1Score === 21 || player2Score === 21){
        gameStatus.textContent = `${activePlayer} wins!🎉`;
        rollBttn.textContent = "Play Again?"; 
        rollBttn.removeEventListener('click',rollDice);
        rollBttn.addEventListener('click',newGame);
        
    }
        if(player1Score > 21){
            player1Arr = [];
            player1ScoreContainer.textContent = "🤡";
            
        }   
        if(player2Score > 21){
            player2Arr = [];
            player2ScoreContainer.textContent = "🤡";
            
        }
    
    changePlayer();
    
}

function newGame(){
   
   
activePlayer= "player 1";
player1Arr.length = 0;
player2Arr.length = 0;
player1Score = 0;
player2Score= 0;
player1ScoreContainer.textContent = "0";
player2ScoreContainer.textContent = "0";
diceImg.src = "dicerandom.png";
gameStatus.textContent = "Player 1's Turn";
rollBttn.textContent = "Roll 🎲";
rollBttn.addEventListener('click',rollDice);
}
