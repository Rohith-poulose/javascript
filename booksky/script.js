function deletebook(event) {
    event.target.parentElement.remove()
}

var overlay = document.querySelector(".overlay")
var popbox = document.querySelector(".popbox")

function popup() {
    overlay.style.display = "block"
    popbox.style.display = "block"
}

function cancelbox(event) {
    overlay.style.display = "none"
    popbox.style.display = "none"
    event.preventDefault()
}

//input1,input2,content
var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");
var content = document.getElementById("content");
var addbtn = document.getElementById("addbtn");
var books = document.querySelector(".books");

addbtn.addEventListener("click", function (event) {
    var newbook = document.createElement("div");
    newbook.setAttribute("class", "container");
    newbook.innerHTML = `<h2>${input1.value}</h2> <h4>${input2.value}</h4> <p>${content.value}</p> <button onclick='deletebook(event)'>delete</button>`;
    books.append(newbook);
    event.preventDefault();
    input1.value="";
    input2.value="";
    content.value="";
    overlay.style.display = "none"; // Assuming overlay and popbox are defined elsewhere
    popbox.style.display = "none";
});
