//Listen for mouse events in body and remove an element if clicked on
document.body.addEventListener("mousedown", (event) => {
    //console.log(event.target.id);
    let elementToRemove = event.target.id
    if(elementToRemove){
        removeElements(`#${elementToRemove}`);
    }

})
 
//Delete element(s) by their selector. Can also be used as standalone function.
//The function ca remove one or multiple elements at once e.g. by calling removeElements('article')
function removeElements(selector) {
    let eles = document.querySelectorAll(selector);
    eles.forEach(el => el.remove());
};

//Alert the user with the instructions (I know this is bad practice, but it's just a homework assignment)
alert("Instructions: Click on any element to delete it")