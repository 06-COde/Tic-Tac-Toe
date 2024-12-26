let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Btn-reset");
let newGame = document.querySelector("#new-btn");
let container1 = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turnO = true;

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
]

const resetGame = () =>{
    turnO = true;
    enablebox();
    container1.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "X";
            box.style.color = "White";
            turnO = false;
        } else{
            box.innerText = "O";
            box.style.color = "Black";
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    })
})

const disabledbox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner) =>{
    msg.innerText = `Congratulation,the winner is ${winner}`
    msg.style.color = "Brown";
    container1.classList.remove("hide");
    disabledbox();
}


const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "" ){
           if( pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
           }
        }
    }
}

newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);







