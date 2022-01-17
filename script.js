let input = document.getElementById("todoInput");
let addBtn = document.getElementById("button-addon2");
let list = document.querySelector(".list-group")

// addBtn.addEventListener("click",function name(params) {

// })

addBtn.onclick = function (e) {
    let inputVal = input.value
    if (inputVal) {

        let listItem = document.createElement("li");
        listItem.classList.add("list-group-item", "d-flex", "justify-content-between")
        let spanInput = document.createElement("span")
        let spanBtn = document.createElement("span")
        spanInput.textContent = inputVal;
        spanInput.addEventListener("click", updateItem)
        spanBtn.classList.add("badge", "bg-danger", "delete");
        spanBtn.style.cursor = "pointer";
        spanBtn.innerHTML = "X";
        spanBtn.addEventListener("click", deleteItem)
        listItem.appendChild(spanInput);
        listItem.appendChild(spanBtn);
        list.appendChild(listItem);
        input.value = ""
    }
}

let deleteBtn = document.getElementsByClassName("delete");


// for (let i = 0; i <deleteBtn.length; i++) {
//     const element = deleteBtn[i];
//     element.addEventListener("click", deleteItem)

// }

function deleteItem(e) {
    let parentListItem = e.target.parentElement
    // let grandParentList = e.target.parentElement.parentNode
    // grandParentList.removeChild(parentListItem);
    parentListItem.remove()
}
function updateItem(e) {
    e.target.classList.add("text-decoration-line-through")
    
}
