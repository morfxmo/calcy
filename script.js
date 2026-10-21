const calcNums = document.querySelector(".calc-nums");
const calcCurrnetDisplay = document.querySelector(".current");
const calcHolderDisplay = document.querySelector(".holder");
const floater = document.querySelector(".float");
const clearBtn = document.querySelector(".clr");

let firstOperand = 0 , secondOperand = 0;
let floated = false , floats = 1;
let actioned = false;

clearBtn.addEventListener("click" , () => {
    firstOperand = secondOperand = 0; floats = 1;
    floated = actioned = false;
    calcCurrnetDisplay.innerText = "";
    calcHolderDisplay.innerText = "";
})

floater.addEventListener("click" , () => {
    calcCurrnetDisplay.innerText += '.';
})

calcNums.addEventListener("click" , (event) => {
    calcCurrnetDisplay.innerText += event.target.id;
})


