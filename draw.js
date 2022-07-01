// const c = document.getElementById("myCanvas");
// const ctx = c.getContext("2d");
// const img = new Image()

// const canvasOffsetX = c.offsetLeft;
// const canvasOffsetY = c.offsetTop;

// c.width = window.innerWidth - canvasOffsetX;
// c.height = window.innerHeight - canvasOffsetY;

// let isPainting = false;
// let lineWidth = 5;
// let startX;
// let startY;

// const draw = (e) => {
//     if(!isPainting) {
//         return;
//     }

//     ctx.lineWidth = lineWidth;
//     ctx.lineCap = 'round';

//     ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
//     ctx.stroke();
// }

// c.addEventListener('mousedown', (e) => {
//     isPainting = true;
//     startX = e.clientX;
//     startY = e.clientY;
// });

// c.addEventListener('mouseup', e => {
//     isPainting = false;
//     ctx.stroke();
//     ctx.beginPath();
// });

// c.addEventListener('mousemove', draw);


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


document.addEventListener("mousemove", () => {
    let mousex = event.clientX;
    let mousey = event.clientY;
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvasOffsetX/2, e.clientY - canvasOffsetY);
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



function clearClick() {
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
