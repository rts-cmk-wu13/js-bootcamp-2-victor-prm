document.body.addEventListener("mousedown", (event) => {
    console.log(event.target.id);
    removeElements(`#${event.target.id}`)
})
 
function removeElements(selector) {
    let eles = document.querySelectorAll(selector);
    console.log(eles);
    eles.forEach(el => el.remove());
};

alert("Instructions: Click on any element to delete it")