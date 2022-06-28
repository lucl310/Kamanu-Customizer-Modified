// import html2canvas from 'C:/Users/Keizo/node_modules/html2canvas/dist';
// import html2canvas from './html2canvas.esm.js';

// var html2canvas = require('html2canvas');
// var exportRef = useRef();
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = new Image()
let deck = "Deck"
let hull = "Hull"
let ama = "Ama"
// var floaters = document.getElementsByClassName("floats")
// var sticky = floaters.offsetTop();
let boatType = "Pueo"
let deckColor = "yes"
let hullColor = "yes"
let amaColor = "yes"
let stickerStatus = "There are no stickers on the boat"

// onclick="exportAsImage('body', 'test')"


// window.onscroll = function() {floatHead()};

document.addEventListener("mousemove", () => {
  let mousex = event.clientX;
  let mousey = event.clientY;
});

window.onload = function colorChange() {
  img.onload = function () {
    ctx.drawImage(img, 50, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);

    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i] = 255 - imgData.data[i];
      imgData.data[i+1] = 255 - imgData.data[i+1];
      imgData.data[i+2] = 255 - imgData.data[i+2];
      imgData.data[i+3] = 255;
    };
    ctx.putImageData(imgData, 0, 0);
  };
};

function clearClick() {
  var img = new Image()
  var imgData = ctx.getImageData(0, 0, c.width, c.height);

  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 148;
    imgData.data[i+1] = 163;
    imgData.data[i+2] = 184;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0);
  ctx.drawImage(img, 50, 0);
  var numStickers = document.querySelectorAll("#tribalStickers").length;
  console.log(numStickers)
  while(numStickers>=1){
    var removeStickers = document.getElementById("tribalStickers").remove();
    numStickers = numStickers - 1;
  };
  deckColor = "yes"
  hullColor = "yes"
  amaColor = "yes"
  stickerStatus = "There are no stickers on the boat"
  console.clear()
  console.log("The layup has been cleared");
};

function changeBird(birdModel){
  var overlay = document.getElementById("overlay")
  if(birdModel == "Noio"){
    overlay.src = "noioLayup.png"
    boatType = "Noio"
  } else if(birdModel == "Pueo"){
    overlay.src = "ScreenshotWhite1.png"
    boatType = "Pueo"
  }
}

function colorInvert() {
  var imgData = ctx.getImageData(0, 0, c.width, c.height);

    var i;
    for (i = 0; i < imgData.data.length; i += 4) {
      imgData.data[i] = 255 - imgData.data[i];
      imgData.data[i+1] = 255 - imgData.data[i+1];
      imgData.data[i+2] = 255 - imgData.data[i+2];
      imgData.data[i+3] = 255;
    };
    ctx.putImageData(imgData, 0, 0);
  img.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIAAYACgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APryiiiug4z/2Q=="
  ctx.drawImage(img, 0, 0);
};

function singleClick() {
    var x = event.clientX;
    var y = event.clientY;
    var img = new Image();
    img.height = "10";
    ctx.drawImage(img, x-150, y-100, 300, 300);
};

function changeColor(red, green, blue, placement){
  // var x = event.clientX;
  // var y = event.clientY;
  var imgData = ctx.getImageData(0, 0, c.width, c.height);

  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = red;
    imgData.data[i+1] = green;
    imgData.data[i+2] = blue;
    imgData.data[i+3] = 255;
  };
  if(red == 255 && green == 0){
    color = "red"
  }
  else if(green == 255 && red == 0){
    color = "green"
  }
  else if(blue == 255 && green == 0){
    color = "blue"
  }
  else if(blue == 255 && red == 255 && green == 255){
    color = "white"
  };
  if(placement == "Deck"){
    ctx.putImageData(imgData, 0, 0, 0, 165, 1000, 100);
    ctx.putImageData(imgData, 0, 0, 0, 400, 1000, 50);
    deckColor = "The deck is " + color
    console.log(deckColor);
  }
  else if(placement == "Hull"){
    ctx.putImageData(imgData, 0, 0, 0, 450, 1000, 75);
    hullColor = "The hull is " + color
    console.log(hullColor);
  }
  else if(placement == "Ama"){
    ctx.putImageData(imgData, 0, 0, 0, 0, 1000, 59);
    ctx.putImageData(imgData, 0, 0, 0, 300, 1000, 80);
    amaColor = "The ama is " + color
    console.log(amaColor);
  };
  return(amaColor, hullColor, deckColor)
};


// floatHead();

function changeSticker() {
  // var imageHTML = document.getElementById("tribalSticker")
  // var placedSticker = imageHTML.cloneNode();
  var placedSticker = document.createElement("img")
  var stickerHolder = document.getElementById("toBeScreenshot")
  stickerHolder.appendChild(placedSticker)
  placedSticker.src = "tribalDesign.png"
  placedSticker.setAttribute("style", " transform: rotate(95deg); position: absolute; width: 50px; height: auto; top: 88.75%; left: 39%;")
  placedSticker.setAttribute("id", "tribalStickers")
  // document.getElementById("placedSticker").appendChild(placedSticker)
  // document.getElementById("placedSticker") = placedSticker
  // ctx.drawImage(img, 0, 0);
  // img.src = "tribalDesign.png" //ADD IMAGE SOURCE URI
  // img.style.transform = "rotate(95deg)";
  // img.style.POSITION = "absolute";
  let stickerStatus = "There are stickers on the boat"
  // return(stickerStatus)
}

function confirmMessage(){
  if(amaColor == "yes" && deckColor == "yes" && hullColor == "yes"){
    var confirmAlert = confirm("Please ensure the following is correct \nThis is a stock grey " + boatType)
  } else {
    if(deckColor == "yes"){
      deckColor = "The deck is grey"
    }
    if(hullColor == "yes"){
      hullColor = "The hull is grey"
    }
    if(amaColor == "yes"){
      amaColor = "The ama is grey"
    }
    var confirmAlert = confirm("Please ensure the following is correct \nThis is a " + boatType + ", " + deckColor.toLowerCase() + ", " + hullColor.toLowerCase() + ", " + amaColor.toLowerCase() + ", and " + stickerStatus.toLowerCase());
  }
  // var confirmAlert = confirm("Is this the correct layup of your canoe?")
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
}

function showDesigns(){
  var doneLayups = document.getElementById("canvasImage")
  if(doneLayups.style.display == "none"){
    doneLayups.style.display = "initial"
  } else if(doneLayups.style.display == "initial"){
    doneLayups.style.display = "none"
  }
}

// function floatHead(){
//   if (window.pageYOffset > sticky) {
//     floaters.classList.add("sticky");
//   } else {
//     floaters.classList.remove("sticky");
//   }
// }

// Confirms everything is working

// changeColor(0, 0, 0, "Hull");
// changeSticker();
// clearClick();
// colorInvert();
// confirmMessage();