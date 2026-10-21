const calcNums = document.querySelector(".calc-nums");
const calcCurrnetDisplay = document.querySelector(".current");
const calcHolderDisplay = document.querySelector(".holder");
const actions = document.querySelector(".calc-actions");
const floater = document.querySelector("#float");
const clearBtn = document.querySelector("#clr");
const evalBtn = document.querySelector("#equal");

let firstOperand , secondOperand , actionEvent;
let floated = false , actioned = false;
console.log(actionEvent);

clearBtn.addEventListener("click" , (event) => {
    firstOperand = secondOperand = actionEvent = undefined;
    floated = actioned = false;
    calcCurrnetDisplay.innerText = "";
    calcHolderDisplay.innerText = "";
    event.stopPropagation();
})

evalBtn.addEventListener("click" , (event) => {
    event.stopPropagation();
})

floater.addEventListener("click" , (event) => {
    event.stopPropagation();
    if (floated) return;

    calcCurrnetDisplay.innerText += '.';
    floated = true;
    if (calcCurrnetDisplay.innerText.length > 15) forceClr();
})

calcNums.addEventListener("click" , (event) => {
    calcCurrnetDisplay.innerText += event.target.id;
    if (calcCurrnetDisplay.innerText.length > 15) forceClr();
})

actions.addEventListener("click" , (event) => {
    if (event.target.id === "acts") return;
    if (!actioned) {
        actionEvent = event;
        event.target.style["background-color"] = "red"
        calcHolderDisplay.innerText = firstOperand = calcCurrnetDisplay.innerText;
        calcCurrnetDisplay.innerText = "";
        actioned = true;
    }
})

function forceClr () {
    alert("Sorry bud, we gotta clear this shi 🥀");
    clearBtn.click();
}
