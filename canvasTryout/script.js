var blue = document.createElement("img");
blue.src = "blueImage.png";
blue.id = "colorImage";
blue.height = "10";
blue.width = "10";

var red = document.createElement("img");
red.src = "redImage.png";
red.id = "colorImage";
red.height = "10";
red.width = "10";

var white = document.createElement("img");
white.src = "whiteImage.png";
white.id = "colorImage";
white.height = "10";
white.width = "10";


var changer = document.getElementById('imgHolder');

var canvas = document.getElementById("myCanvas");


document.addEventListener("mousemove", () => {
  let mousex = event.clientX;
  let mousey = event.clientY;
});

// Going to make double click functionality into the single click function for simplicity.
// Single click functionality will be moved into the clear button and named clearclick

function clearClick() {
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("noio");
    // img.id = "noioDupe"
    ctx.drawImage(img, 50, 0);
};

function singleClick() {
    var x = event.clientX;
    var y = event.clientY; 
    var ctx = canvas.getContext ("2d");
    var img = document.getElementById("colorImage");
    img.height = "10";
    ctx.drawImage(img, x-150, y-500, 300, 300);
};

function changeBlue() {
    // var blue = document.createElement("img");
    // blue.src = "blueImage.png";
    // var changer = document.getElementById('imgHolder');
    var colorRemove = document.getElementById('imgHolder').firstChild
    changer.appendChild(blue);
    changer.removeChild(colorRemove);
    // changer.removeChild(white);
}
function changeRed() {
    // var red = document.createElement("img");
    // red.src = "redImage.png";
    // var changer = document.getElementById('imgHolder');
    var colorRemove = document.getElementById('imgHolder').firstChild
    changer.appendChild(red);
    changer.removeChild(colorRemove);
    // changer.removeChild(white);
}
function changeWhite() {
    // var white = document.createElement("img");
    // white.src = "whiteImage.png";
    // var changer = document.getElementById('imgHolder');
    var colorRemove = document.getElementById('imgHolder').firstChild
    changer.appendChild(white);
    changer.removeChild(colorRemove);
    // changer.removeChild(red);
}