const btn = document.querySelector("button");
const unList = document.querySelector("ul")
btn.addEventListener("click", (event) => {
    let userInput = document.getElementById("item").value
    let grocery = document.createElement("li")
    grocery.textContent = userInput
    unList.appendChild(grocery)
    event.preventDefault();
    document.querySelector("input").reset()
});