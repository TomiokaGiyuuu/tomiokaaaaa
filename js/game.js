import { GAME } from "./vars.js";
import { Profile, isDraw, endGame, setHoverEffect, markCell, swapTurns } from "./tic.js";
import { checkWin, WIN_COMBINATIONS } from './win.js';


GAME.startBtn.addEventListener("click", startGame);
GAME.restartBtn.addEventListener("click", startGame);
GAME.drawBtn.addEventListener("click", startGame);

Profile()


$(document).ready(function(){
  $("button").click(function(){
    $("img").fadeOut(3000);
  });
});

function startGame(){
    setHoverEffect();

   
    GAME.blockElements.forEach(cell => {
        cell.classList.remove(GAME.X_CLASS);
        cell.classList.remove(GAME.Y_CLASS);
        cell.classList.remove("win");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener('click', handleClick, { once: true })
    })

   GAME.startWindow.classList.add("hide");
   GAME.winEl.classList.remove("show");
   GAME.drawEl.classList.remove("show");
   GAME.winnerImg.children.length ? GAME.winnerImg.removeChild(GAME.winner) : null; 
}


function handleClick(e){
    const cell = e.target;
    const currentClass = GAME.turn ? GAME.Y_CLASS : GAME.X_CLASS;
    markCell(cell, currentClass);

    
    let flag = checkWin(currentClass, GAME.blockElements).filter((win, index) => {
       if (win){
        
         
        WIN_COMBINATIONS[index].map(i => {
            GAME.blockElements[i].classList.add('win');
        })

       
        GAME.winner = GAME.blockElements[WIN_COMBINATIONS[index][0]].cloneNode(true);
        return win !== false;
       }
    });
    
    
    if (flag.length){
        endGame(false, GAME.winEl, GAME.drawEl);
        GAME.winnerImg.append(GAME.winner);
        $(document).ready(function(){
            $(GAME.winnerImg).fadeIn(3000);
        });
        console.log("victoryaaa");
    }else if(isDraw(flag)){
       endGame(true, GAME.winEl, GAME.drawEl);
    }


    GAME.turn = swapTurns(GAME.turn);
    setHoverEffect();
}


/*Music*/
var music = new Audio();
document.querySelectorAll(".primary-btn")[0].addEventListener("click", function(){
    music.pause();
    music = new Audio('sounds/gameSound.mp3');
    music.play();
});
document.querySelectorAll(".primary-btn")[1].addEventListener("click", function(){
    music.pause();
    music = new Audio('sounds/gameSound.mp3');
    music.play();
});
document.querySelectorAll(".primary-btn")[2].addEventListener("click", function(){
    music.pause();
    music = new Audio('sounds/gameSound.mp3');
    music.play();
});














