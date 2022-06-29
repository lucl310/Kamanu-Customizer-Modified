console.log("I work")

document.getElementById("amaPic").style.fill = "rgb(118,121,124)"
document.getElementById("deckPic").style.fill = "rgb(118,121,124)"

console.log("I still work")

let currentColor = "green"
let deckColor = "rgb(118,121,124)"
let amaColor = "rgb(118,121,124)"

function changeColor(red, green, blue){
    currentColor = "rgb(" + red + "," + green + "," + blue + ")"
};

function deckChange(){
    document.getElementById("deckPic").style.fill = currentColor
    deckColor = currentColor
};
function amaChange(){
    document.getElementById("amaPic").style.fill = currentColor
    amaColor = currentColor
};
function clearClick() {
    document.getElementById("amaPic").style.fill = "rgb(118,121,124)"
    document.getElementById("deckPic").style.fill = "rgb(118,121,124)"
    console.clear()
    console.log("The layup has been cleared");
};
function confirmMessage(){
    if(amaColor == "rgb(118,121,124)" && deckColor == "rgb(118,121,124)"){
      var confirmAlert = confirm("Please ensure the following is correct \nThis is a stock grey Noio")
    } else {
      var confirmAlert = confirm("Please ensure the design is correct");
    }
    if(confirmAlert == true){
      console.log("Correct order")
      var orderComplete = true
      return(orderComplete)
    }
    else{
      console.log("Incorrect order")
      var orderComplete = false
      return(orderComplete)
    }
};

function showDesigns(){
    var doneLayups = document.getElementById("canvasImage")
    if(doneLayups.style.display == "none"){
      doneLayups.style.display = "initial"
    } else if(doneLayups.style.display == "initial"){
      doneLayups.style.display = "none"
    }
};