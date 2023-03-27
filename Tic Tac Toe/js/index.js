const music = new Audio('./media/gameSound.mp3');
const click = new Audio('./media/click.mp3');

let turn = "X";

let isgameover = false;

// Change Turn
function changeTurn(){
    return turn === "X" ? "0" : "X";
}


// Function to check for win

const checkWin = () => {

    const boxText = document.getElementsByClassName('boxtext')

    const wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]

    wins.forEach(e => {
        // (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") 

        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector('.textInfo').innerText = boxText[e[0]].innerText + " won";
            isgameover = true;
            document.querySelector('.imageContainer').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vh) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "20vw";
        }
    });
}

// Game Logic
music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            click.play();
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isgameover){
                document.querySelector('.textInfo').innerText  = "Turn for " + turn;
            } 
        }
    })
})


// Adding eventListener to reset button

document.getElementById('reset').addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    boxtext.forEach(element => {
        element.innerText = '';
    })
    isgameover = false;
    turn = "X"
    document.querySelector('.textInfo').innerText  = "Turn for " + turn;
    document.querySelector('.imageContainer').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";
})