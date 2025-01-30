let selectEle1 = document.querySelector('#value-1');
let selectEle2 = document.querySelector('#value-2');
let formEle = document.querySelector('#ratio-calc');
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Run
runScript();

//Populate select elements and look for user submits on the form
function runScript() {
    populateSelectEle(selectEle1);
    populateSelectEle(selectEle2);
    formEle.addEventListener("submit", submit)
}

//Run calculateRatio-function on form submission
function submit(event){
    let currentRatio = calculateRatio(selectEle1.value, selectEle2.value);
    //console.log(currentRatio)
    updateDOM(currentRatio);
    event.preventDefault();
}

//Ratio Calculation with error handling if input is 0
function calculateRatio(a, b) {
    let ratio;

    a = Number(a);
    b = Number(b);

    /*I know the assigment said that we should only check if b is not 0, 
     but I'm checking for both a and b since it's a little boring to divide 0 by any number too*/
    if (a !== 0 && b !== 0) {
        ratio = (a / b)
    }else{
        ratio = null;
    }
    return ratio;
}

//Render result in DOM
function updateDOM(ratio){
    let resultEle = document.querySelector('#result');
    if(ratio != null){
         //Format to max 3 decimals and do not include decimals if number is an integer/whole number
         ratio = +parseFloat(ratio).toFixed(3);
         resultEle.innerHTML = `Forholdet mellem de to værdier er ${ratio}`;
    }
    else{
        resultEle.innerHTML = "Vælg venligst et andet tal end 0!";
    }
}

//Add Options to a give select element
function populateSelectEle(ele) {
    values.forEach((value) => {
        ele.innerHTML += `<option value="${value}">${value}</option>`
    });
}

