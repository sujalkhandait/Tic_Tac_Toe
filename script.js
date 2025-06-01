let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newBtn= document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turnO=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        // box.classList.remove("x-color", "o-color");
    };
};
const showWinner=(winner)=>{
     msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};
const showDraw=()=>{
     msg.innerText = `it's a draw`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if (pos1val !="" && pos2val !="" && pos3val !=""){
            if( pos1val=== pos2val && pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
                return true;
              }    
          }
    }
    return false;
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText===""){
        if(turnO){
            box.innerText="O";
            box.classList.add("o-color");
            turnO= false;
        }
        else{
            box.innerText="X";
            box.classList.add("x-color")
            turnO=true;
        }
        box.Disabled=true;
           count++;
           if(!checkwinner() && count===9){
            showDraw();
           }
        }

    });
});
const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click",resetGame);
