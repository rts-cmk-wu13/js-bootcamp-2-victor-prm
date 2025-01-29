//Listen for mouse click events in body and HIDE an element if clicked on
document.body.addEventListener("click", (event) => {
    //console.log(event.target.id);
    let elementToRemove = event.target.id
    if(elementToRemove){
        if(event.shiftKey){
            removeElements(`#${elementToRemove}`, true);
        }else{
            removeElements(`#${elementToRemove}`, false);
        }
    }
})
 
/*Delete/Hide element(s) by their selector. Can also be used as standalone function.
The function ca remove one or multiple elements at once e.g. by calling removeElements('article') */
function removeElements(selector, deleteDOM) {
    let eles = document.querySelectorAll(selector);

    if(deleteDOM){
        //Delete the element in the DOM
        eles.forEach(el => el.remove());
    }
    else{
         //Hide the element in the DOM
        eles.forEach(el => el.className = "hidden");
    }
   
};

//Show hidden elements again by pressing the "r" key
document.addEventListener("keypress", logKey);

function logKey(e) {
  console.log(e.code)
  if(e.code = "KeyR"){
    let hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach(element => {
        element.removeAttribute("class");
    })
  }
}

//Alert the user with the instructions (I know this is bad practice, but it's just a homework assignment)
alert("Instructions:\nClick on any element to hide it.\nHold 'Shift Key' and click to delete element from DOM.\nPress 'r' key to display hidden elements again")