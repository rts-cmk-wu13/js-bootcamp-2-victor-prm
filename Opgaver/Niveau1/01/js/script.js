//Find our button element in the DOM
let buttonElement = document.querySelector('#my-button');

//Add an event listener that invokoes our "changeButtonColor"-function whenever the user clicks the button.
buttonElement.addEventListener("click", changeButtonColor);



function changeButtonColor(){
    //Pick Random HSL Values
    let r_h = Math.floor(Math.random()*360);
    let r_s = Math.floor(Math.random()*100);
    let r_l = Math.floor(Math.random()*100);

    //Compose random HSL string
    let randomHSL = `hsl(${r_h} ${r_s}% ${r_l}%)`;

    //Save a variable for the current text color of the button
    let textColor = 'black';
    
    //Change the text color to white if the random HSL color is below a given threshold (60%)
    if(r_l < 60){
        textColor = 'white';
    }

    //Update the color styles of the button element
    buttonElement.style.backgroundColor = randomHSL;
    buttonElement.style.color = textColor;
}