let buttonContainerElement = document.querySelector("#buttons");
let buttonsArray = Array.from(buttonContainerElement.children);
//console.log(buttonsArray, typeof buttonsArray, buttonsArray.length);


buttonsArray.forEach((element, i) => {
    element.id = `buttonid-${i}`;
    element.dataset.selected = false;
    element.addEventListener("click", () => {
        updateSelection(element)
    });
})

function updateSelection(elementClicked) {
    //console.log(elementClicked.nodeName, elementClicked.id)
    buttonsArray.forEach((element) => {
        isSelected = (element.dataset.selected === "true");

        if (elementClicked.id != element.id) {
            //console.log(element.id, "set to false")
            isSelected = false;
        } else {
            //console.log(element.id, "set to true")
            isSelected = !isSelected;
        }

        if (isSelected) {
            elementClicked.className = "selected"
        } else {
            element.removeAttribute("class")
        }
        element.dataset.selected = isSelected;
    })
}
