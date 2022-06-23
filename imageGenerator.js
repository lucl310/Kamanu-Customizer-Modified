import html2canvas from './html2canvas.esm.js';

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = new Image()


function exportAsImage(element, imageFilename){
    console.log("dhasfj")
    html2canvas(document.body).then(function(canvas) {
        document.body.appendChild(canvas);
    });
    async(element, imageFileName) => {
    var html = document.getElementsByTagName("html")[0];
    var body = document.getElementsByTagName("body")[0];
    htmlWidth = html.clientWidth;
    bodyWidth = body.clientWidth;
    var newWidth = element.scrollWidth - element.clientWidth;
    if (newWidth > element.clientWidth) {
        htmlWidth += newWidth;
        bodyWidth += newWidth;
    }
    html.style.width = htmlWidth + "px";
    body.style.width = bodyWidth + "px";
    var canvas = await html2canvas(element);
    var image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
    html.style.width = null;
    body.style.width = null;
    console.log("Im working better")
  }
};
console.log("f")

//if not working, remove function and screenshot from the async and remove the screenshot call at the bottom of the function and canvas var await back to html2canvas

var downloadImage = (blob, fileName) => {
  var fakeLink = window.document.createElement("a");
  // fakeLink.style = "display:none;";
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);
  console.log("im working")
  fakeLink.remove();
  };
// exportAsImage("body", "canoeLayup")


export default exportAsImage;