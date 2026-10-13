let boxes = document.querySelectorAll(".Box");
let reset = document.querySelector("#ac");
let msg = document.querySelector(".msg");
let msgs = document.querySelector("#msgs");
let newgame = document.querySelector("#new");

let turn0 = true;

let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const resetgame = ()=>{
    turn0 = true;
    enable();
    msg.classList.add("hide");
}


const disable = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enable = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


boxes.forEach((Box)=>{
    Box.addEventListener("click",()=>{
        if(turn0 === true){
            Box.innerText = "X";
            turn0 = false;
            Box.disabled = true;
        }

        else{
            Box.innerText = "O";
            turn0 = true;
            Box.disabled = true;
        }

        checkwinner();

    })
})


const showwinner = (winner)=>{
    msgs.innerText = `Winner is ${winner}`;
    msg.classList.remove("hide");
    disable();
    


}
const checkwinner = ()=>{
    for(let pos of win){
        let p1 = boxes[pos[0]].innerText;
        let p2 = boxes[pos[1]].innerText;
        let p3 = boxes[pos[2]].innerText;

        if(p1 != "" && p2 != "" && p3!="" ){
            if(p1==p2 && p2==p3){
                console.log(`winner is ${p1}`);
                showwinner(p1);
            }

        }



    }
};



reset.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);