// Selecting elements
let myElement = document.getElementById("myId");
let myElements = document.getElementsByClassName("myClass");

// Changing content
myElement.innerHTML = "New content";

// Adding event listener
myElement.addEventListener("click", function() {
  alert("Element clicked!");
});
