const calcNums = document.querySelector(".calc-nums");
const calcCurrnetDisplay = document.querySelector(".current");
const calcHolderDisplay = document.querySelector(".holder");
const actions = document.querySelector(".calc-actions");
const functioningActions = ["add" , "sub" , "mul" , "divide"];
const floater = document.querySelector("#float");
const clearBtn = document.querySelector("#clr");
const evalBtn = document.querySelector("#equal");

let firstOperand , secondOperand , actionEvent;
let floated = false , actioned = false;

clearBtn.addEventListener("click" , (event) => {
    firstOperand = secondOperand = actionEvent = undefined;
    floated = actioned = false;
    calcCurrnetDisplay.innerText = "";
    calcHolderDisplay.innerText = "";

    functioningActions.forEach((action) => {
        let curr = document.querySelector(`#${action}`);
        curr.style["background-color"] = "lightpink";
    })

    event.stopPropagation();
})

evalBtn.addEventListener("click" , (event) => {
    if (calcCurrnetDisplay.innerText === "") return;
    secondOperand = calcCurrnetDisplay.innerText;
    let res = operate(actionEvent.target.id);
    clearBtn.click();
    calcCurrnetDisplay.innerText = firstOperand = res;
    event.stopPropagation();
})

floater.addEventListener("click" , (event) => {
    event.stopPropagation();
    if (floated) return;

    calcCurrnetDisplay.innerText += '.';
    floated = true;
    if (calcCurrnetDisplay.innerText.length > 11) forceClr();
})

calcNums.addEventListener("click" , (event) => {
    calcCurrnetDisplay.innerText += event.target.id;
    if (calcCurrnetDisplay.innerText.length > 11) forceClr();
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

function operate (op) {
    let ret;
    console.log([firstOperand , secondOperand , op]);
    if (op === "add") ret = +firstOperand + +secondOperand;
    if (op === "sub") ret = +firstOperand - +secondOperand;
    if (op === "mul") ret = +firstOperand * +secondOperand;
    if (op === "divide") {
        if (+secondOperand === 0) {
            alert("What are you doing?");
            clearBtn.click();
        }
        ret = +firstOperand / +secondOperand;
    }

    return ret;
} 

function forceClr () {
    alert("Sorry bud, we gotta clear this shi 🥀");
    clearBtn.click();
}
