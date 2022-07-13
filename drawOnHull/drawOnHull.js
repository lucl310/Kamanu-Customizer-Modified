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

var img = new Image()
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

function changeColor(red, green, blue){
    currentColor = "rgb(" + red + "," + green + "," + blue + ")"
    ctx.strokeStyle = currentColor
	if(red == "erase"){
		ctx.globalCompositeOperation = "destination-out"
		document.getElementById('shading').style.zIndex = "0";
		document.getElementById('amaShading').style.zIndex = "0";
		document.getElementById('amaPic').style.zIndex = "8";
		document.getElementById('deckPic').style.zIndex = "8";
		document.getElementById('composite_Image').style.zIndex = "8";
		document.getElementById('eraserPic').style.opacity = "80%";
		document.getElementById('eraser').style.opacity = "80%";
		document.getElementById('pencilPic').style.opacity = "100%";
		document.getElementById('pencil').style.opacity = "100%";
		document.getElementById('bucketPic').style.opacity = "100%";
		document.getElementById('paintBucket').style.opacity = "100%";
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

    ctx.putImageData(imgData, 0, 0);
    ctx.drawImage(img, 50, 0);

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
		console.log('displays shown')
		doneLayups.style.display = "initial"
    } else if(doneLayups.style.display == "initial"){
      	console.log("displays hidden")
		doneLayups.style.display = "none"
    }
};

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.pageX - canvasOffsetX, e.pageY - canvasOffsetY + 60);
    ctx.stroke();
	console.log('painting')
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    let startX = e.clientX;
    let startY = e.clientY;

    console.log(startX, startY)
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

function bucketSwitch(){
	document.getElementById('shading').style.zIndex = "1001";
	document.getElementById('amaShading').style.zIndex = "1001";
	document.getElementById('amaPic').style.zIndex = "1001";
	document.getElementById('deckPic').style.zIndex = "1001";
	document.getElementById("composite_Image").style.zIndex = "1000";
	document.getElementById('bucketPic').style.opacity = "80%";
	document.getElementById('paintBucket').style.opacity = "80%";
	document.getElementById('pencilPic').style.opacity = "100%";
	document.getElementById('pencil').style.opacity = "100%";
	document.getElementById('eraserPic').style.opacity = "100%";
	document.getElementById('eraser').style.opacity = "100%";
	ctx.globalCompositeOperation = "source-over"
}

function pencilSwitch(){
	document.getElementById('shading').style.zIndex = "0";
	document.getElementById('amaShading').style.zIndex = "0";
	document.getElementById('amaPic').style.zIndex = "8";
	document.getElementById('deckPic').style.zIndex = "8";
	document.getElementById('composite_Image').style.zIndex = "8";
	document.getElementById('bucketPic').style.opacity = "100%";
	document.getElementById('paintBucket').style.opacity = "100%";
	document.getElementById('pencilPic').style.opacity = "80%";
	document.getElementById('pencil').style.opacity = "80%";
	document.getElementById('eraserPic').style.opacity = "100%";
	document.getElementById('eraser').style.opacity = "100%";
	ctx.globalCompositeOperation = "source-over"
}
function resetZ(){
    document.getElementById('shading').style.zIndex = "1001";
    document.getElementById('amaShading').style.zIndex = "1001";
    document.getElementById('amaPic').style.zIndex = "1001";
    document.getElementById('deckPic').style.zIndex = "1001";
}
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