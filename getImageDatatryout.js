var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = new Image()

  // for seperate function of draw image only on canoe deck use   ctx.putImageData(imgData, 0, 0, 0, 165, 1000, 100);   ctx.putImageData(imgData, 0, 0, 0, 400, 1000, 50), first for top hull, second for side hull


document.addEventListener("mousemove", () => {
  let mousex = event.clientX;
  let mousey = event.clientY;
});

window.onload = function colorChange() {
  img.onload = function () {
    ctx.drawImage(img, 50, 0);
    var imgData = ctx.getImageData(0, 0, c.width, c.height);
    // invert colors
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
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 171;
    imgData.data[i+1] = 176;
    imgData.data[i+2] = 178;
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
};

function colorInvert() {
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

function changeRed() {
  var x = event.clientX;
  var y = event.clientY; 
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255;
    imgData.data[i+1] = 0;
    imgData.data[i+2] = 0;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 165, 1000, 100);
  ctx.putImageData(imgData, 0, 0, 0, 400, 1000, 50);
  // for seperate function of draw image only on canoe deck use   ctx.putImageData(imgData, 0, 0, 0, 165, 1000, 100);   ctx.putImageData(imgData, 0, 0, 0, 400, 1000, 50), first for top hull, second for side hull
  // ctx.drawImage(img, 50, 0,);
}

function changeBlue() {
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 0;
    imgData.data[i+1] = 0;
    imgData.data[i+2] = 255;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 165, 1000, 100);
  ctx.putImageData(imgData, 0, 0, 0, 400, 1000, 50);
}

function changeGreen() {
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 0;
    imgData.data[i+1] = 255;
    imgData.data[i+2] = 0;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 165, 1000, 100);
  ctx.putImageData(imgData, 0, 0, 0, 400, 1000, 50);
}

function changeWhite() {
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255;
    imgData.data[i+1] = 255;
    imgData.data[i+2] = 255;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 165, 1000, 100);
  ctx.putImageData(imgData, 0, 0, 0, 400, 1000, 50);
}


function changeRedHull() {
  var x = event.clientX;
  var y = event.clientY; 
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255;
    imgData.data[i+1] = 0;
    imgData.data[i+2] = 0;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 450, 1000, 75);
  // for seperate function of draw image only on canoe deck use   ctx.putImageData(imgData, 0, 0, 0, 165, 1000, 100);   ctx.putImageData(imgData, 0, 0, 0, 400, 1000, 50), first for top hull, second for side hull
  // ctx.drawImage(img, 50, 0,);
}

function changeBlueHull() {
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 0;
    imgData.data[i+1] = 0;
    imgData.data[i+2] = 255;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 450, 1000, 75);
  // ctx.drawImage(img, 50, 0);
}

function changeGreenHull() {
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 0;
    imgData.data[i+1] = 255;
    imgData.data[i+2] = 0;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 450, 1000, 75);
  // ctx.drawImage(img, 50, 0);
}

function changeWhiteHull() {
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255;
    imgData.data[i+1] = 255;
    imgData.data[i+2] = 255;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 450, 1000, 75);
  // ctx.drawImage(img, 50, 0);
}


function changeRedAma() {
  var x = event.clientX;
  var y = event.clientY; 
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255;
    imgData.data[i+1] = 0;
    imgData.data[i+2] = 0;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 0, 1000, 59);
  ctx.putImageData(imgData, 0, 0, 0, 300, 1000, 80);
  // for seperate function of draw image only on canoe deck use   ctx.putImageData(imgData, 0, 0, 0, 165, 1000, 100);   ctx.putImageData(imgData, 0, 0, 0, 400, 1000, 50), first for top hull, second for side hull
  // ctx.drawImage(img, 50, 0,);
}
//59-165 for iako

function changeBlueAma() {
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 0;
    imgData.data[i+1] = 0;
    imgData.data[i+2] = 255;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 0, 1000, 59);
  ctx.putImageData(imgData, 0, 0, 0, 300, 1000, 80);
  // ctx.drawImage(img, 50, 0);
}

function changeGreenAma() {
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 0;
    imgData.data[i+1] = 255;
    imgData.data[i+2] = 0;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 0, 1000, 59);
  ctx.putImageData(imgData, 0, 0, 0, 300, 1000, 80);
  // ctx.drawImage(img, 50, 0);
}

function changeWhiteAma() {
  var imgData = ctx.getImageData(0, 0, c.width, c.height);
  // invert colors
  var i;
  for (i = 0; i < imgData.data.length; i += 4) {
    imgData.data[i] = 255;
    imgData.data[i+1] = 255;
    imgData.data[i+2] = 255;
    imgData.data[i+3] = 255;
  };
  ctx.putImageData(imgData, 0, 0, 0, 0, 1000, 59);
  ctx.putImageData(imgData, 0, 0, 0, 300, 1000, 80);
  // ctx.drawImage(img, 50, 0);
}

function changeSticker() {
  // var imageHTML = document.getElementById("tribalSticker")
  // var placedSticker = imageHTML.cloneNode();
  var placedSticker = document.createElement("img")
  placedSticker.src = "tribalDesign.png"
  placedSticker.setAttribute("style", " transform: rotate(95deg); position: absolute; width: 50px; height: auto; top: 76%; left: 41%;")
  placedSticker.setAttribute("id", "tribalStickers")
  document.getElementById("placedSticker").appendChild(placedSticker)
  // document.getElementById("placedSticker") = placedSticker
  // ctx.drawImage(img, 0, 0);
  // img.src = "tribalDesign.png" //ADD IMAGE SOURCE URI
  // img.style.transform = "rotate(95deg)";
  // img.style.POSITION = "absolute";
}

// function singleClick() {
//   // ctx.drawImage(img, 50, 0);
//     var imgData = ctx.getImageData(0, 0, c.width, c.height);
//     // invert colors
//     var i;
//     for (i = 0; i < imgData.data.length; i += 4) {
//       imgData.data[i] = 255;
//       imgData.data[i+1] = 0;
//       imgData.data[i+2] = 0;
//       imgData.data[i+3] = 255;
//     };
//     ctx.putImageData(imgData, 0, 0);
//   // ctx.drawImage(img, 50, 0);
// };

// function colorInvert() {
//   ctx.drawImage(img, 50, 0);
//   var imgData = ctx.getImageData(0, 0, c.width, c.height);
//   // invert colors
//   var i;
//   for (i = 0; i < imgData.data.length; i += 4) {
//     imgData.data[i] = 255 - imgData.data[i];
//     imgData.data[i+1] = 255 - imgData.data[i+1];
//     imgData.data[i+2] = 255 - imgData.data[i+2];
//     imgData.data[i+3] = 255;
//   };
//   ctx.putImageData(imgData, 0, 0);
// }