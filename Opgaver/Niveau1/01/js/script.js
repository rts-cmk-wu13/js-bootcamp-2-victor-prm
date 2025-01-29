//Find our button element in the DOM
let buttonElement = document.querySelector('#my-button');
//Add boolean to keep track of whether the button should be styled or not 
let shouldColorButton = false;

//Add an event listener that invokoes our "changeButtonColor"-function whenever the user clicks the button.
buttonElement.addEventListener("click", changeButtonColor);

function changeButtonColor(){
    //Invert the boolean of shouldColorButton every time the button is clicked
    shouldColorButton = !shouldColorButton

    //Update or clear the style of the button
    if(shouldColorButton){
        doColorButton(buttonElement)
    }else{
        doResetStyle(buttonElement)
    }
}

//Picking a random HSL and coloring the button
function doColorButton(ele){
     //Pick Random HSL Values
     let r_h = pickRandomNumber(360);
     let r_s = pickRandomNumber(100);
     let r_l = pickRandomNumber(100);
 
     //Compose random HSL string
     let randomHSL = `hsl(${r_h} ${r_s}% ${r_l}%)`;
 
     //Save a variable for the current text color of the button
     let textColor = 'black';
     
     //Change the text color to white if the random HSL color is below a given threshold (60%)
     if(r_l < 60){
         textColor = 'white';
     }
 
     //Update the color styles of the button element
     ele.style.backgroundColor = randomHSL;
     ele.style.color = textColor;
}

//Reset element style
function doResetStyle(ele){
    ele.attributeStyleMap.clear();
}

//Pick a random number between 0 and max value
function pickRandomNumber(max){
    return Math.floor(Math.random()*max);
}