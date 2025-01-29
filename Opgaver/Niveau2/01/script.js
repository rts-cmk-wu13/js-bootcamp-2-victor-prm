//Find button container and create a new array from all buttons in this div
let buttonContainerElement = document.querySelector("#buttons");
let buttonsArray = Array.from(buttonContainerElement.getElementsByTagName("button"));
//console.log(buttonsArray, typeof buttonsArray, buttonsArray.length);

//Update all buttons with id's and selected values to keep track of current selection
buttonsArray.forEach((element, i) => {
    //console.log(element.nodeName);
        element.id = `buttonid-${i}`;
        element.dataset.selected = false;
        //Update selection on button click
        element.addEventListener("click", () => {
            updateSelection(element);
        });
})

function updateSelection(elementClicked) {
    //Loop through all elements in the buttons array and see if there's a match in id
    buttonsArray.forEach((element) => {

        isSelected = (element.dataset.selected === "true");

        //Reset isSelected on all elements other than the button that has been clicked
        if (elementClicked.id != element.id) {
            //console.log(element.id, "set to false")
            isSelected = false;
        //If ID matches (This given button has been clicked), invert isSelected
        } else {
            //console.log(element.id, "set to true")
            isSelected = !isSelected;
        }

        //Update button according to isSelected value (could also have been done directly in the if-statement above)
        if (isSelected) {
            elementClicked.className = "selected"
        } else {
            element.removeAttribute("class")
        }

        //update all buttons' selected data-attribute with the new isSelected Boolean
        element.dataset.selected = isSelected;

    })
}
