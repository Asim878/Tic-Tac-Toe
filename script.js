let boxes = document.querySelectorAll(".box")

let reset = document.querySelector(".reset")

let newbtn = document.querySelector(".new")

let msgcont= document.querySelector(".msg-co")

let msg = document.querySelector(".msg")

let nowinner=document.querySelector(".no")


let turnO = true;

let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 7],
    [6, 7, 8]
]

boxes.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        if (turnO === true) {
            boxes.style.color=`black`
            boxes.innerHTML = `O`
            turnO = false;
        }
        else {
            boxes.style.color=`silver`
            boxes.innerHTML = `X`
            turnO = true;
        }

        boxes.disabled = true;

        checkwinner();


    })
})

const resetgame = () =>{
    turnO=true;
    enableboxes();
    msgcont.classList.add("hide")

}
const disableboxes= ()=>{
    for(let box of boxes){
    box.disabled=true;}
}
const enableboxes= ()=>{
    for(let box of boxes){
    box.disabled=false;
    box.innerText="";}
}


let showwinner = (winner) =>{
        msg.innerText=`Congratulations,winner is ${winner}`
        msgcont.classList.remove("hide")
        disableboxes();
}
let checkwinner = () => {
    for (patterns of winpatterns) {
        let pos1val = boxes[patterns[0]].innerHTML;
        let pos2val = boxes[patterns[1]].innerHTML;
        let pos3val = boxes[patterns[2]].innerHTML;

    if(pos1val !="" && pos2val !="" && pos3val !=""){
        if (pos1val===pos2val && pos2val===pos3val) {
            console.log("winner",pos1val);
            
            showwinner(pos1val);
            
        }
    }

    }
}

newbtn.addEventListener("click",resetgame)
reset.addEventListener("click",resetgame)




