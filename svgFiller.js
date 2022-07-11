const canvas = document.getElementById('drawing-board');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth = 5;
let startX;
let startY;

console.log("I work")

document.getElementById("amaPic").style.fill = "rgb(118,121,124)"
document.getElementById("deckPic").style.fill = "rgb(118,121,124)"

console.log("I still work")

let currentColor = "green"
let deckColor = "rgb(118,121,124)"
let amaColor = "rgb(118,121,124)"

function changeColor(red, green, blue){
    currentColor = "rgb(" + red + "," + green + "," + blue + ")"
    ctx.strokeStyle = currentColor
    if(red == "erase"){
        ctx.globalCompositeOperation = "destination-out"
    }else{
        ctx.globalCompositeOperation = "source-over"
    }
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

    var img = new Image()
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i] = 148;
      imgData.data[i+1] = 163;
      imgData.data[i+2] = 184;
      imgData.data[i+3] = 255;
    };
    ctx.putImageData(imgData, 0, 0);
    ctx.drawImage(img, 50, 0);
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

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX/2 + 5, e.clientY - canvasOffsetY + 150);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

function resize(){
    if(lineWidth == 5){
        lineWidth = 10
    } else if (lineWidth == 10){
        lineWidth = 15
    } else if (lineWidth == 15){
        lineWidth = 20
    } else if (lineWidth == 20){
        lineWidth = 5
    }
    document.getElementById('cursorSize').innerHTML = "Cursor size: " + lineWidth;
}

function allowDrop(ev) {
    ev.preventDefault();
  }

  function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
  }

  function drop(ev) {
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
  }