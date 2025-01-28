let selectEle1 = document.querySelector('#value-1');
let selectEle2 = document.querySelector('#value-2');
let formEle = document.querySelector('#ratio-calc');
let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(formEle, selectEle1)
runAndRender();


function submit(event){
    calculateRatio(selectEle1.value, selectEle2.value);
    event.preventDefault();
}


function runAndRender() {
    console.log(new Date().toString());
    populateAllSelectEles();
    formEle.addEventListener("submit", submit)
}

function calculateRatio(value1, value2) {
    let resultEle = document.querySelector('#result');
    let ratio;

    value1 = Number(value1);
    value2 = Number(value2);

    console.log(value1, value2);
    if (value1 != 0 && value2 != 0) {
        ratio = value1 / value2;
        resultEle.innerHTML = `Forholdet mellem de to værdier er ${ratio}`;
    }else{
        ratio = null;
        resultEle.innerHTML = "Vælg venligst et andet tal end 0!";
    }
    

}


function populateAllSelectEles() {
    populateSelectEle(selectEle1);
    populateSelectEle(selectEle2);
}

function populateSelectEle(ele) {
    values.forEach((value) => {
        ele.innerHTML += `<option value="${value}">${value}</option>`
    });
}

