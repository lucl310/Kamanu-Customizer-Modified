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
let currentSticker;

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
		io.style.border = '2px solid'
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
		mb.style.border = '2px solid white'
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

    var numStickers = document.querySelectorAll("#tribalStickers").length;
	while(numStickers>=1){
		var removeStickers = document.getElementById("tribalStickers").remove();
		numStickers = numStickers - 1;
	  };

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

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev, type) {
	currentSticker = type
	console.log(type)
}

function drop(ev, location) {
	console.log(currentSticker)
	ev.preventDefault();
	var placedSticker = document.createElement("img")
	var stickerHolder = document.getElementById("toBeScreenshot")
	stickerHolder.appendChild(placedSticker)
	placedSticker.src = "../" + currentSticker + ".svg"
	if(currentSticker == "tribalDesign" && location == "frontDeck"){
		placedSticker.setAttribute("style", " transform: rotate(95deg); position: absolute; width: 50px; height: auto; top: 88.75%; left: 39%;")
	}
	placedSticker.setAttribute("id", "tribalStickers")

	// placedSticker.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
	// placedSticker.innerHTML = '<g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M1440 5495 c0 -312 -257 -513 -665 -518 -150 -2 -241 33 -307 118 -34 44 -32 151 4 220 28 54 96 123 147 149 72 38 10 49 -79 15 -115 -44 -194 -125 -251 -260 -27 -63 -31 -82 -26 -132 7 -74 54 -155 119 -206 50 -38 58 -60 32 -82 -53 -44 -214 -274 -214 -306 0 -5 -8 -27 -19 -49 -10 -21 -24 -63 -30 -92 -19 -89 -12 -322 10 -322 5 0 13 19 19 43 54 220 141 386 275 526 134 140 226 191 514 287 304 101 449 190 507 312 24 49 28 69 28 147 -1 100 -26 205 -50 205 -10 0 -14 -14 -14 -55z"/> <path d="M1710 5477 c0 -8 7 -34 17 -58 12 -32 17 -79 17 -174 1 -122 -1 -133 -26 -180 -31 -59 -197 -224 -284 -283 -95 -64 -236 -135 -399 -202 -218 -90 -368 -163 -438 -214 -176 -126 -279 -289 -308 -488 -25 -175 41 -396 183 -605 27 -40 53 -73 58 -73 12 0 13 6 0 28 -36 66 -83 195 -111 307 -57 232 -2 425 165 583 61 58 162 111 228 119 38 6 41 4 33 -13 -4 -10 -12 -37 -18 -59 -5 -22 -13 -44 -17 -50 -11 -14 -55 -204 -69 -293 -23 -150 -10 -418 30 -613 18 -92 78 -267 114 -336 19 -35 35 -69 35 -73 0 -5 -41 -49 -91 -97 -87 -83 -189 -220 -218 -290 -7 -18 -19 -33 -26 -33 -7 0 -30 21 -50 47 -43 55 -106 116 -112 109 -2 -2 4 -21 15 -43 36 -69 62 -177 62 -252 0 -46 -11 -117 -31 -199 -52 -215 -60 -254 -65 -342 -7 -100 8 -267 26 -283 9 -9 10 13 5 103 -11 190 16 346 86 488 101 208 264 399 394 464 86 43 165 57 199 34 20 -13 127 -137 149 -173 4 -7 -37 -55 -104 -123 -224 -227 -340 -433 -425 -755 -29 -108 -27 -373 4 -520 56 -263 188 -508 375 -693 102 -101 207 -181 207 -158 0 2 -21 28 -46 58 -111 130 -196 289 -220 415 -39 204 9 424 120 550 21 24 36 46 33 50 -3 3 -35 -15 -70 -40 -64 -46 -127 -124 -148 -184 -16 -47 -34 -41 -58 20 -113 282 -36 715 180 1012 76 106 218 265 235 265 19 0 204 -170 204 -187 0 -7 -33 -63 -74 -125 -41 -62 -90 -144 -109 -183 -36 -70 -77 -201 -77 -240 1 -17 5 -14 28 15 54 70 159 174 237 235 104 81 142 102 155 89 6 -6 30 -62 55 -125 44 -117 75 -270 75 -378 0 -55 15 -69 26 -23 4 15 15 59 25 97 42 154 35 324 -21 514 l-29 96 72 138 c39 76 77 143 84 149 10 8 13 -4 13 -66 0 -103 11 -101 49 12 31 89 40 225 20 310 -36 162 -48 200 -93 296 -38 82 -83 156 -94 156 -5 0 0 -33 10 -72 27 -102 29 -282 4 -363 -38 -121 -147 -325 -183 -339 -11 -5 -139 81 -198 132 l-27 24 49 51 c73 75 127 149 160 214 25 53 28 67 27 163 -1 224 -40 283 -342 510 -141 106 -185 161 -197 251 -4 27 -11 51 -16 55 -15 9 -10 -63 7 -124 35 -122 82 -182 215 -275 83 -59 162 -136 193 -190 56 -97 53 -239 -9 -362 -42 -82 -149 -215 -174 -215 -9 0 -60 44 -112 98 -312 321 -419 565 -419 957 0 258 58 454 184 621 50 68 125 134 151 134 13 0 15 -7 9 -35 -15 -82 47 -218 138 -300 65 -58 123 -84 205 -92 35 -3 63 -9 63 -13 0 -4 -8 -15 -19 -24 -10 -9 -31 -44 -46 -78 -33 -74 -32 -156 4 -230 35 -74 50 -64 44 30 -7 97 5 123 113 241 42 47 87 108 100 136 30 65 47 181 39 270 -8 95 -26 195 -35 195 -4 0 -10 -53 -13 -117 -8 -164 -32 -211 -134 -262 -83 -41 -222 -23 -275 36 -68 75 -64 286 7 423 37 70 105 116 275 186 63 25 140 59 170 74 99 51 177 155 199 268 13 64 15 269 2 276 -12 8 -21 -18 -21 -58 0 -40 -13 -79 -55 -171 -52 -113 -149 -194 -253 -211 -49 -8 -52 -1 -16 47 65 88 104 216 104 349 0 79 -3 90 -41 167 -41 83 -69 120 -69 90z"/></g>'

	console.log('stickers')
}