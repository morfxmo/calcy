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

window.addEventListener("keydown" , (event) => {
    if (event.key === "Backspace") {
        if (calcCurrnetDisplay.innerText.length > 0) {
            let curr = calcCurrnetDisplay.innerText.toString();
            curr = curr.slice(0 , curr.length - 1);
            calcCurrnetDisplay.innerText = curr;
        }
    }

    else {
        let curr;
        if (event.key === "+") curr = document.querySelector("#add");
        else if (event.key === "-") curr = document.querySelector("#sub");
        else if (event.key === "*") curr = document.querySelector("#mul");
        else if (event.key === "/") curr = document.querySelector("#divide");
        else if (event.key === "Enter") curr = document.querySelector("#equal");
        else if (event.key === ".") curr = document.querySelector("#float");
        else {
            let num = +event.key;
            if (!Number.isNaN(num)) {
                calcCurrnetDisplay.innerText += num;
                if (calcCurrnetDisplay.innerText.length > 11) forceClr();
            }
        }

        if (curr !== undefined) 
            curr.click();
    }
})


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
    if (calcHolderDisplay.innerText === "" || calcCurrnetDisplay.innerText === "") return;
    secondOperand = calcCurrnetDisplay.innerText;
    let res = operate(actionEvent.target.id);

    clearBtn.click();
    event.stopPropagation();

    if (res === undefined) return;
    calcCurrnetDisplay.innerText = firstOperand = res;
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
    if (event.target.id === "equal") {
        evalBtn.click();
        return;
    }

    if (calcCurrnetDisplay.innerText === "" && event.target.id === "sub") {
        calcCurrnetDisplay.innerText = "-";
        return;
    }

    if (event.target.id === "acts" || (calcCurrnetDisplay.innerText == "" && event.target.id !== "sub") || calcCurrnetDisplay.innerText == "-") 
        return;

    if (!actioned) {
        actionEvent = event;
        event.target.style["background-color"] = "lightgreen"
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
            return;
        }

        ret = +firstOperand / +secondOperand;
    }

    ret = Number(Math.round(ret + "e3") + "e-3");
    return ret;
} 

function forceClr () {
    alert("Sorry bud, we gotta clear this shi 🥀");
    clearBtn.click();
}
