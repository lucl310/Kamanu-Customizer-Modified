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

let bw = document.getElementById('baseWhite')
let cw = document.getElementById('crystalWhite')
let sg = document.getElementById('seagullGray')
let p = document.getElementById('platinum')
let mg = document.getElementById('mediumGray')
let c = document.getElementById('charcoal')
let i = document.getElementById('ivory')
let spg = document.getElementById('spanishGold')
let ca = document.getElementById('cafe')
let q = document.getElementById('quicksand')
let ob = document.getElementById('oakBrown')
let dp = document.getElementById('deepPurple')
let cy = document.getElementById('canaryYellow')
let by = document.getElementById('buttercupYellow')
let at = document.getElementById('atomicTangerine')
let io = document.getElementById('internationalOrange')
let r = document.getElementById('red')
let bg = document.getElementById('bubbleGum')
let lg = document.getElementById('limeGreen')
let dlg = document.getElementById('deepLimeGreen')
let cg = document.getElementById('condaGreen')
let fg = document.getElementById('forestGreen')
let dg = document.getElementById('darkGreen')
let bb = document.getElementById('boysenberry')
let a = document.getElementById('aqua')
let t = document.getElementById('teal')
let nb = document.getElementById('neonBlue')
let b = document.getElementById('blue')
let mb = document.getElementById('midnightBlue')
let pu = document.getElementById('purple')

let buttons = document.querySelectorAll('.colorButton')

console.log("I work")

document.getElementById("amaPic").style.fill = "rgb(118,121,124)"
document.getElementById("deckPic").style.fill = "rgb(118,121,124)"

console.log("I still work")

let currentColor = "green"
let deckColor = "rgb(118,121,124)"
let amaColor = "rgb(118,121,124)"

var img = new Image()
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

window.onload = function(){
	document.getElementById('downloadButton').style.display == "none";
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

function changeColor(red, green, blue, colorName){
	ctx.globalCompositeOperation = "source-over"
	currentColor = "rgb(" + red + "," + green + "," + blue + ")"
	ctx.strokeStyle = currentColor
	buttons.forEach(box => {
		box.style.border = '0px solid'
	  });
	if(colorName == 'bw'){
		bw.style.border = '2px solid'
	} else if(colorName == 'cw'){
		cw.style.border = '2px solid'
	} else if(colorName == 'p'){
		p.style.border = '2px solid'
	} else if(colorName == 'sg'){
		sg.style.border = '2px solid'
	} else if(colorName == 'mg'){
		mg.style.border = '2px solid'
	} else if(colorName == 'c'){
		c.style.border = '2px solid white'
	} else if(colorName == 'i'){
		i.style.border = '2px solid'
	} else if(colorName == 'spg'){
		spg.style.border = '2px solid'
	} else if(colorName == 'ca'){
		ca.style.border = '2px solid'
	} else if(colorName == 'q'){
		q.style.border = '2px solid'
	} else if(colorName == 'ob'){
		ob.style.border = '2px solid white'
	} else if(colorName == 'dp'){
		dp.style.border = '2px solid'
	} else if(colorName == 'cy'){
		cy.style.border = '2px solid'
	} else if(colorName == 'by'){
		by.style.border = '2px solid'
	} else if(colorName == 'at'){
		at.style.border = '2px solid'
	} else if(colorName == 'io'){
		ia.style.border = '2px solid'
	} else if(colorName == 'r'){
		r.style.border = '2px solid'
	} else if(colorName == 'bg'){
		bg.style.border = '2px solid'
	} else if(colorName == 'lg'){
		lg.style.border = '2px solid'
	} else if(colorName == 'dlg'){
		dlg.style.border = '2px solid'
	} else if(colorName == 'cg'){
		cg.style.border = '2px solid'
	} else if(colorName == 'fg'){
		fg.style.border = '2px solid white'
	} else if(colorName == 'dg'){
		dg.style.border = '2px solid white'
	} else if(colorName == 'bb'){
		bb.style.border = '2px solid'
	} else if(colorName == 'a'){
		a.style.border = '2px solid'
	} else if(colorName == 't'){
		t.style.border = '2px solid'
	} else if(colorName == 'nb'){
		nb.style.border = '2px solid'
	} else if(colorName == 'b'){
		b.style.border = '2px solid'
	} else if(colorName == 'mb'){
		mb.style.border = '2px solid white	'
	} else if(colorName == 'pu'){
		pu.style.border = '2px solid'
	}
};

function deckChange(placement){
    document.getElementById(placement + 'Pic').style.fill = currentColor
    deckColor = currentColor
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

    ctx.lineTo(e.pageX - canvasOffsetX, e.pageY - canvasOffsetY + 40);
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

function toolSwitch(type){
	if(type == 'bucket'){
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
	} else if(type == 'pencil'){
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
	} else if(type == 'eraser'){
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
	}
}

function resetZ(){
    document.getElementById('shading').style.zIndex = "1001";
    document.getElementById('amaShading').style.zIndex = "1001";
    document.getElementById('amaPic').style.zIndex = "1001";
    document.getElementById('deckPic').style.zIndex = "1001";

	document.getElementById('downloadButton').style.opacity = "100%"
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