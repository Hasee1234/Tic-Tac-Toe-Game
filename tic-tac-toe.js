let boxes= document.querySelectorAll(".box")
let resetBtn=document.querySelector(".resetBtn")
let newGameBtn=document.querySelector(".newBtn")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turn0=true;//player x , player 0
// now we will use 2D arrays
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){//player o
            box.innerText ="O" 
        turn0=false;
    }else{//player x
        box.innerText="X"
        turn0=true;
        }
        box.disabled= true;

        checkwinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
msg.innerText=`Congrtulations,winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
}

const checkwinner = () => {
    // Loop through each winning pattern
    for (let pattern of winpatterns) {
        // Get the values for each position in the pattern
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        // Check if all positions have the same value and are not empty
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                // console.log("winner",pos1val);
                // Optionally return or handle the win case
                // Stop checking after finding a winner
                showwinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)