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

    // var img = new Image()
    // var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    // var i;
    // for (i = 0; i < imgData.data.length; i += 4) {
    //   imgData.data[i] = 148;
    //   imgData.data[i+1] = 163;
    //   imgData.data[i+2] = 184;
    //   imgData.data[i+3] = 255;
    // };
    // ctx.putImageData(imgData, 0, 0);
    // ctx.drawImage(img, 50, 0);
    // // canvas.style.zIndex = "0"

    // // var newSvg = document.createElement("svg");
    // // newSvg.setAttribute("id", "replaceable")
    // // newSvg.innerHTML = '<svg  id="composite_Image" data-name="composite Image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1493.47 71.99"><defs><style id="stylish">.cls-1{stroke:#000;stroke-miterlimit:10;fill: rgb(0,0,0);}</style></defs><g id="rGIEd9"><path onclick="deckChange()" id="deckPic" class="cls-1" d="M1525.39,342.21a42.83,42.83,0,0,0-11.69-4.1,246.47,246.47,0,0,0-26.79-3c-35-1.64-69.9-3.57-104.88-4.27-132-2.65-264-5.69-396.06,1.94-68.3,3.94-136.92,2.33-205.4,3.32-29.82.44-59.63,1.19-89.45,1.63-9.8.14-19.67.43-29.39-.53-28.49-2.81-56.86-7.84-85.4-8.89-24.35-.9-48.86,2.52-73.3,4-58.87,3.61-117.74,7.11-176.6,10.88-18.88,1.2-38,.12-56.49,5.78-9.46,2.89-19.3,3.32-28.91-.75-2.49-1.06-5.55-1.13-8.33-1.05Q147,349.57,61.31,352.23A98.63,98.63,0,0,0,45,354.17c-2.57.52-4.85,2.52-7.26,3.84l.59,1.53c1.76.15,3.51.39,5.28.45,16.65.57,33.3,1.48,50,1.59,125.48.87,251,1.9,376.44,2.17,46.64.1,93.3-1.31,139.93-2.82,23.29-.75,46.49-3.9,69.78-4.81,30.8-1.19,61.64-1.61,92.46-1.71,48.82-.16,97.65.57,146.47.31,107-.57,214-1.61,320.94-2.3q140.73-.9,281.46-1.47h8.85C1530.72,346.2,1528.42,343.68,1525.39,342.21Z" transform="translate(-37.08 -292.26)"/><path onclick="amaChange()" id="amaPic" class="cls-1" d="M1080.58,295.12c-2.55-.69-5.08-1.85-7.66-2-7.13-.36-14.29-.43-21.44-.36-18,.18-36,0-53.92.85-45.92,2.18-91.8,5.61-137.75,7.11-65.6,2.15-131.25,2.85-196.87,4.52-33.3.85-66.62,1.78-99.84,4.05-16.17,1.1-32.13,5.28-48.16,8.22-2.1.38-4,1.67-6,2.54l.36,1.45C700.1,326.15,890.25,314.51,1080.58,295.12Z" transform="translate(-37.08 -292.26)"/></g></svg>'

    // // var oldSvg = document.getElementById('composite_Image');
    // // var oldSvg = document.getElementById('toBeScreenshot')

    // // var newSvg = '<svg  id="composite_Image" data-name="composite Image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1493.47 71.99"><defs><style id="stylish">.cls-1{stroke:#000;stroke-miterlimit:10;fill: rgb(0,0,0);}</style></defs><g id="rGIEd9"><path onclick="deckChange()" id="deckPic" class="cls-1" d="M1525.39,342.21a42.83,42.83,0,0,0-11.69-4.1,246.47,246.47,0,0,0-26.79-3c-35-1.64-69.9-3.57-104.88-4.27-132-2.65-264-5.69-396.06,1.94-68.3,3.94-136.92,2.33-205.4,3.32-29.82.44-59.63,1.19-89.45,1.63-9.8.14-19.67.43-29.39-.53-28.49-2.81-56.86-7.84-85.4-8.89-24.35-.9-48.86,2.52-73.3,4-58.87,3.61-117.74,7.11-176.6,10.88-18.88,1.2-38,.12-56.49,5.78-9.46,2.89-19.3,3.32-28.91-.75-2.49-1.06-5.55-1.13-8.33-1.05Q147,349.57,61.31,352.23A98.63,98.63,0,0,0,45,354.17c-2.57.52-4.85,2.52-7.26,3.84l.59,1.53c1.76.15,3.51.39,5.28.45,16.65.57,33.3,1.48,50,1.59,125.48.87,251,1.9,376.44,2.17,46.64.1,93.3-1.31,139.93-2.82,23.29-.75,46.49-3.9,69.78-4.81,30.8-1.19,61.64-1.61,92.46-1.71,48.82-.16,97.65.57,146.47.31,107-.57,214-1.61,320.94-2.3q140.73-.9,281.46-1.47h8.85C1530.72,346.2,1528.42,343.68,1525.39,342.21Z" transform="translate(-37.08 -292.26)"/><path onclick="amaChange()" id="amaPic" class="cls-1" d="M1080.58,295.12c-2.55-.69-5.08-1.85-7.66-2-7.13-.36-14.29-.43-21.44-.36-18,.18-36,0-53.92.85-45.92,2.18-91.8,5.61-137.75,7.11-65.6,2.15-131.25,2.85-196.87,4.52-33.3.85-66.62,1.78-99.84,4.05-16.17,1.1-32.13,5.28-48.16,8.22-2.1.38-4,1.67-6,2.54l.36,1.45C700.1,326.15,890.25,314.51,1080.58,295.12Z" transform="translate(-37.08 -292.26)"/></g></svg>'


    // // oldSvg.replaceChild(newSvg, document.getElementById("composite_Image"))

    // // var replaceSvg = document.getElementById('composite_Image')

    // // replaceSvg.remove()


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

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX/2 - 5, e.clientY - canvasOffsetY + 100);
    ctx.stroke();
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

function changeZ(){
    if(document.getElementById('shading').style.zIndex == 1001){
        document.getElementById('shading').style.zIndex = "0";
        document.getElementById('amaShading').style.zIndex = "0";
        document.getElementById('amaPic').style.zIndex = "8";
        document.getElementById('deckPic').style.zIndex = "8";
    } else if (document.getElementById('shading').style.zIndex == 0){
        document.getElementById('shading').style.zIndex = "1001";
        document.getElementById('amaShading').style.zIndex = "1001";
        document.getElementById('amaPic').style.zIndex = "1001";
        document.getElementById('deckPic').style.zIndex = "1001";
    }
    // var newSvg = document.createElement("svg");
    // newSvg.innerHTML = '<svg  id="composite_Image" data-name="composite Image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1493.47 71.99"><defs><style id="stylish">.cls-1{stroke:#000;stroke-miterlimit:10;fill: rgb(0,0,0);}</style></defs><g id="rGIEd9"><path onclick="deckChange()" id="deckPic" class="cls-1" d="M1525.39,342.21a42.83,42.83,0,0,0-11.69-4.1,246.47,246.47,0,0,0-26.79-3c-35-1.64-69.9-3.57-104.88-4.27-132-2.65-264-5.69-396.06,1.94-68.3,3.94-136.92,2.33-205.4,3.32-29.82.44-59.63,1.19-89.45,1.63-9.8.14-19.67.43-29.39-.53-28.49-2.81-56.86-7.84-85.4-8.89-24.35-.9-48.86,2.52-73.3,4-58.87,3.61-117.74,7.11-176.6,10.88-18.88,1.2-38,.12-56.49,5.78-9.46,2.89-19.3,3.32-28.91-.75-2.49-1.06-5.55-1.13-8.33-1.05Q147,349.57,61.31,352.23A98.63,98.63,0,0,0,45,354.17c-2.57.52-4.85,2.52-7.26,3.84l.59,1.53c1.76.15,3.51.39,5.28.45,16.65.57,33.3,1.48,50,1.59,125.48.87,251,1.9,376.44,2.17,46.64.1,93.3-1.31,139.93-2.82,23.29-.75,46.49-3.9,69.78-4.81,30.8-1.19,61.64-1.61,92.46-1.71,48.82-.16,97.65.57,146.47.31,107-.57,214-1.61,320.94-2.3q140.73-.9,281.46-1.47h8.85C1530.72,346.2,1528.42,343.68,1525.39,342.21Z" transform="translate(-37.08 -292.26)"/><path onclick="amaChange()" id="amaPic" class="cls-1" d="M1080.58,295.12c-2.55-.69-5.08-1.85-7.66-2-7.13-.36-14.29-.43-21.44-.36-18,.18-36,0-53.92.85-45.92,2.18-91.8,5.61-137.75,7.11-65.6,2.15-131.25,2.85-196.87,4.52-33.3.85-66.62,1.78-99.84,4.05-16.17,1.1-32.13,5.28-48.16,8.22-2.1.38-4,1.67-6,2.54l.36,1.45C700.1,326.15,890.25,314.51,1080.58,295.12Z" transform="translate(-37.08 -292.26)"/></g></svg>'

    // var oldSvg = document.getElementById('composite_Image');

    // oldSvg.replaceWith(newSvg)

    // document.getElementById("amaPic").style.fill = "rgb(118,121,124)"
    // document.getElementById("deckPic").style.fill = "rgb(118,121,124)"
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

function colorpick (e) {
    var c = canvas.getContext('2d');

    var p = c.getImageData(startX, startY, 1, 1).data;
    actualColor = ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    $('#colorOutput').css("background-color", "#" + actualColor);
};
function rgbToHex(r, g, b) {
    console.log(componentToHex(r) + componentToHex(g) + componentToHex(b))

    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
