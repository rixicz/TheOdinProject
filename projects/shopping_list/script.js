const btn = document.querySelector("button");
const unList = document.querySelector("ul")


btn.addEventListener("click", () => {
    let userInput = document.getElementById("item");
    let grocery = document.createElement("li");
    let span = document.createElement("span");
    let deleteBtn = document.createElement("button");
    
    span.textContent = userInput.value
    deleteBtn.textContent = "Delete"

    deleteBtn.addEventListener("click", function () { // important to add the event listener in the function where the button is created
        this.parentNode.remove() // removes the parent element of the button - li
    })
    
    grocery.appendChild(span);
    grocery.appendChild(deleteBtn);
    
    unList.appendChild(grocery);
    userInput.value = "";
    userInput.focus() // no need to click again onto the input box
});
