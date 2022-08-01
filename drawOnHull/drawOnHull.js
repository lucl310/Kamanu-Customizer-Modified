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
let comingFrom;
let stickerId = 0;

let placedSticker;
let placedImage;
let followingSticker;
let stickervar = [document.getElementById('sticker1'), document.getElementById('sticker2')]
let stickertextvar = document.getElementById('stickerText')
let iceCube;

let stickerOnBack = false
let stickerOnFront = false

let mouseX;
let mouseY;

let bw = document.getElementById('baseWhite');
let cw = document.getElementById('crystalWhite');
let sg = document.getElementById('seagullGray');
let p = document.getElementById('platinum');
let mg = document.getElementById('mediumGray');
let c = document.getElementById('charcoal');
let i = document.getElementById('ivory');
let spg = document.getElementById('spanishGold');
let ca = document.getElementById('cafe');
let q = document.getElementById('quicksand');
let ob = document.getElementById('oakBrown');
let dp = document.getElementById('deepPurple');
let cy = document.getElementById('canaryYellow');
let by = document.getElementById('buttercupYellow');
let at = document.getElementById('atomicTangerine');
let io = document.getElementById('internationalOrange');
let r = document.getElementById('red');
let bg = document.getElementById('bubbleGum');
let lg = document.getElementById('limeGreen');
let dlg = document.getElementById('deepLimeGreen');
let cg = document.getElementById('condaGreen');
let fg = document.getElementById('forestGreen');
let dg = document.getElementById('darkGreen');
let bb = document.getElementById('boysenberry');
let a = document.getElementById('aqua');
let t = document.getElementById('teal');
let nb = document.getElementById('neonBlue');
let b = document.getElementById('blue');
let mb = document.getElementById('midnightBlue');
let pu = document.getElementById('purple');

let shading = document.getElementById('shading');
let amaShading = document.getElementById('amaShading');
let amaPic = document.getElementById('amaPic');
let deckPic = document.getElementById('deckPic');
let composite_Image = document.getElementById('composite_Image');
let sticker = document.getElementById('sticker');
let stickerPic = document.getElementById('stickerPic');
let bucketPic = document.getElementById('bucketPic');
let paintBucket = document.getElementById('paintBucket');
let pencilPic = document.getElementById('pencilPic');
let pencil = document.getElementById('pencil');
let eraserPic = document.getElementById('eraserPic');
let eraser = document.getElementById('eraser');
let cover = document.getElementById('cover');

let buttons = document.querySelectorAll('.colorButton')

console.log("I work")

document.getElementById("amaPic").style.fill = "rgb(118,121,124)"
document.getElementById("deckPic").style.fill = "rgb(118,121,124)"

let currentColor = "green"
let deckColor = "rgb(118,121,124)"
let amaColor = "rgb(118,121,124)"

var img = new Image()
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

window.onload = function(){
	document.getElementById('downloadButton').style.display == "none";
	shading.style.zIndex = "1001";
	amaShading.style.zIndex = "1001";
	amaPic.style.zIndex = "1001";
	deckPic.style.zIndex = "1001";
	composite_Image.style.zIndex = "1000";
	bucketPic.style.opacity = "80%";
	paintBucket.style.opacity = "80%";
	pencilPic.style.opacity = "100%";
	pencil.style.opacity = "100%";
	eraserPic.style.opacity = "100%";
	eraser.style.opacity = "100%";
	ctx.globalCompositeOperation = "source-over"
}

function changeColor(red, green, blue, colorName){
	ctx.globalCompositeOperation = "source-over"
	currentColor = "rgb(" + red + "," + green + "," + blue + ")"
	ctx.strokeStyle = currentColor
	buttons.forEach(box => {
		box.style.border = '0px solid'
	  });
	//changes border of selected color
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

    amaPic.style.fill = "rgb(118,121,124)"
    deckPic.style.fill = "rgb(118,121,124)"

    var numStickers = document.querySelectorAll(".tribalStickers").length + 1;
	console.log(numStickers)

	while(numStickers>=0){
		if(document.querySelectorAll("#frontSticker").length >= 1){
			document.getElementById("frontSticker").remove()
		}
		if(document.querySelectorAll("#backSticker").length >= 1){
			document.getElementById("backSticker").remove()
		}
		if(document.querySelectorAll("#replace").length >= 1){
			document.getElementById("replace").remove()
		}
		if(document.querySelectorAll("#placedSticker").length >= 1){
			document.getElementById("placedSticker").remove()
			document.getElementById("placedSticker").remove()
		}
		numStickers = numStickers - 1;
	  };
	  stickerOnBack = false
	  stickerOnFront = false
	  sanityCheck()
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
	  resetZ()
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

//begin drawing function

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(e.pageX - canvasOffsetX, e.pageY - canvasOffsetY + 30);
    ctx.stroke();
	console.log('painting')
}

document.addEventListener('mousemove', (e) => {
	mouseX = e.pageX
	mouseY = e.pageY
	// console.log(mouseX, mouseY)
	// sanityCheck()
})

document.addEventListener('mousedown', (e) => {
	mouseX = e.pageX
	mouseY = e.pageY
	console.log(mouseX, mouseY)
	console.log(stickerOnBack, stickerOnFront)
})

document.addEventListener('mouseup', (e) => {
	mouseX = e.pageX
	mouseY = e.pageY
	console.log(mouseX, mouseY)
})

document.addEventListener('drag', (e) => {
	mouseX = e.pageX
	mouseY = e.pageY
	// console.log(mouseX, mouseY)
})

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.pageX;
    startY = e.pageY;

    console.log(startX, startY)
});

canvas.addEventListener('pointerdown', (e) => {
    isPainting = true;
    startX = e.pageX;
    startY = e.pageY;

    console.log(startX, startY)
});

canvas.addEventListener('touchstart', (e) => {
    isPainting = true;
    startX = e.pageX;
    startY = e.pageY;

    console.log(startX, startY)
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('pointerup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('touchend', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

canvas.addEventListener('pointermove', draw);

canvas.addEventListener('touchmove', draw);

//end drawing function

function toolSwitch(type){
	if(type == 'bucket'){
		shading.style.zIndex = "1001";
		amaShading.style.zIndex = "1001";
		amaPic.style.zIndex = "1001";
		deckPic.style.zIndex = "1001";
		composite_Image.style.zIndex = "1000";
		sticker.style.opacity = "100%";
		stickerPic.style.opacity = "100%";
		bucketPic.style.opacity = "80%";
		paintBucket.style.opacity = "80%";
		pencilPic.style.opacity = "100%";
		pencil.style.opacity = "100%";
		eraserPic.style.opacity = "100%";
		eraser.style.opacity = "100%";
		cover.style.display = "none";
		canvas.style.zIndex = "0";
		hideStickers()
		ctx.globalCompositeOperation = "source-over"
		frontStickerZ('1')
		backStickerZ('1')
		} else if(type == 'pencil'){
		shading.style.zIndex = "0";
		amaShading.style.zIndex = "0";
		amaPic.style.zIndex = "8";
		deckPic.style.zIndex = "8";
		composite_Image.style.zIndex = "8";
		sticker.style.opacity = "100%";
		stickerPic.style.opacity = "100%";
		bucketPic.style.opacity = "100%";
		paintBucket.style.opacity = "100%";
		pencilPic.style.opacity = "80%";
		pencil.style.opacity = "80%";
		eraserPic.style.opacity = "100%";
		eraser.style.opacity = "100%";
		cover.style.display = "none";
		canvas.style.zIndex = "1000";
		hideStickers()
		ctx.globalCompositeOperation = "source-over"
		frontStickerZ('1')
		backStickerZ('1')
	} else if(type == 'eraser'){
		ctx.globalCompositeOperation = "destination-out"
		shading.style.zIndex = "0";
		amaShading.style.zIndex = "0";
		amaPic.style.zIndex = "8";
		deckPic.style.zIndex = "8";
		composite_Image.style.zIndex = "8";
		sticker.style.opacity = "100%";
		stickerPic.style.opacity = "100%";
		eraserPic.style.opacity = "80%";
		eraser.style.opacity = "80%";
		pencilPic.style.opacity = "100%";
		pencil.style.opacity = "100%";
		bucketPic.style.opacity = "100%";
		paintBucket.style.opacity = "100%";
		cover.style.display = "none";
		canvas.style.zIndex = "1000";
		hideStickers()
		frontStickerZ('1')
		backStickerZ('1')
	} else if(type == 'sticker'){
		ctx.globalCompositeOperation = "destination-out"
		shading.style.zIndex = "0";
		amaShading.style.zIndex = "0";
		amaPic.style.zIndex = "800";
		deckPic.style.zIndex = "800";
		composite_Image.style.zIndex = "8";
		sticker.style.opacity = "80%";
		stickerPic.style.opacity = "80%";
		eraserPic.style.opacity = "100%";
		eraser.style.opacity = "100%";
		pencilPic.style.opacity = "100%";
		pencil.style.opacity = "100%";
		bucketPic.style.opacity = "100%";
		paintBucket.style.opacity = "100%";
		cover.style.display = "initial";
		canvas.style.zIndex = "1";
		showStickers()
		frontStickerZ('1001')
		backStickerZ('1001')
	} else {
		sticker.style.opacity = "100%";
		stickerPic.style.opacity = "100%";
		eraserPic.style.opacity = "100%";
		eraser.style.opacity = "100%";
		pencilPic.style.opacity = "100%";
		pencil.style.opacity = "100%";
		bucketPic.style.opacity = "100%";
		paintBucket.style.opacity = "100%";
		cover.style.display = "initial";
		cover.style.display = "none";
		canvas.style.zIndex = "1000";
		hideStickers()
		ctx.globalCompositeOperation = "source-over"
		frontStickerZ('1')
		backStickerZ('1')
	}
}

//resets Z to order things visually before html2canvas activates
function resetZ(){
	document.getElementById('downloadButton').style.display = "initial";
	document.getElementById('downloadLink').style.display = "initial";

    shading.style.zIndex = "1001";
    amaShading.style.zIndex = "1001";
    amaPic.style.zIndex = "1001";
    deckPic.style.zIndex = "1001";

	frontStickerZ('1001')
	backStickerZ('1001')
}

//changes cursor size
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
    document.getElementById('cursorSize').innerHTML = "Size: " + lineWidth;
}

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev, type) {
	currentSticker = type
	console.log(type)
	document.getElementById('frontDeck').style.zIndex = '1001';
	document.getElementById('backDeck').style.zIndex = '1001';
}

function drop(ev, location) {
	console.log(currentSticker)
	ev.preventDefault();
	placedSticker = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	var stickerHolder = document.getElementById("toBeScreenshot")
	stickerHolder.appendChild(placedSticker)
	placedSticker.setAttribute('version', '1.0')
	placedSticker.setAttribute('width', '150.00000px')
	placedSticker.setAttribute('height', '100px')
	placedSticker.setAttribute('viewBox', '-50 0 599.000000 669.000000')
	placedSticker.setAttribute('preserveAspectRatio', 'xMidYMid meet')
	placedSticker.setAttribute('draggable', 'true')
	placedSticker.style = 'position: absolute; z-index: 1005;'
	// placedSticker.src = "../" + currentSticker + ".svg"
	console.log(location)
	if(location == comingFrom){
		if(currentSticker == "tribalDesign"){
			if(comingFrom == "frontDeck"){
				placeFront('tribalDesign')
				stickerOnFront = true
				document.getElementById("replace").remove();
			} else if(comingFrom == "backDeck"){
				placeBack('tribalDesign')
				stickerOnBack = true
				document.getElementById("replace").remove();
			}
		} else if(currentSticker == "turtle"){
			if(comingFrom == "frontDeck"){
				placeFront('turtle')
				stickerOnFront = true
				document.getElementById("replace").remove();
			} else if(comingFrom == "backDeck"){
				placeBack('turtle')
				stickerOnBack = true
				document.getElementById("replace").remove();
			}
		}
	} else if(stickerId >= 1){
		if(location == "delete"){
			document.getElementById("replace").remove();
			placedSticker.remove();
			console.log("yeseyut")
		} else {
			if(currentSticker == "tribalDesign"){
				if(comingFrom == "frontDeck"){
					placeBack('tribalDesign')
					stickerOnFront = false
					document.getElementById("replace").remove();
				} else if(comingFrom == "backDeck"){
					placeFront('tribalDesign')
					stickerOnBack = false
					document.getElementById("replace").remove();
				}
			} else if(currentSticker == "turtle"){
				if(comingFrom == "frontDeck"){
					placeBack('turtle')
					stickerOnFront = false
					document.getElementById("replace").remove();
				} else if(comingFrom == "backDeck"){
					placeFront('turtle')
					stickerOnBack = false
					document.getElementById("replace").remove();
				}
			} else {
				console.log("eytmemmaislemtasdfrnnrsd")
			}
		}
		stickerId = 0
	} else if(stickerId <=0){
		if(location == 'delete'){
			placedSticker.remove();
			console.log('no')
		}
		if(currentSticker == "tribalDesign"){
			if(location == "backDeck"){
				placeBack('tribalDesign')
			} else if(location == "frontDeck"){
				placeFront('tribalDesign')
			}
		} else if(currentSticker == "turtle"){
			if(location == "backDeck"){
				placeBack('turtle')
			} else if(location == "frontDeck"){
				placeFront('turtle')
			}
		}
	}
	placedSticker.setAttribute("class", "tribalStickers")
	if(placedSticker.attributes.id == undefined){
		placedSticker.remove();
	} else if(placedSticker.attributes.id == "backSticker" || "frontSticker"){
		console.log(placedSticker.attributes.id);
	} else {
		placedSticker.remove();
	}
	comingFrom = "home"
	document.getElementById('frontDeck').style.zIndex = '1';
	document.getElementById('backDeck').style.zIndex = '1';
	frontStickerZ('1001')
	backStickerZ('1001')
	console.log('stickers')
}

function replaceDrag(ev, type, location){
	currentSticker = type
	console.log(type)
	comingFrom = location
	console.log(comingFrom)
	document.getElementById('frontDeck').style.zIndex = '1001';
	document.getElementById('backDeck').style.zIndex = '1001';
	if(document.querySelectorAll("#replace").length >= 1){
		placedSticker.remove()
		console.log("thisShouldWork")
	} else if(comingFrom == 'frontDeck'){
		var changeId = document.getElementById('frontSticker')
		changeId.setAttribute("id", "replace")
	} else if(comingFrom == 'backDeck'){
		var changeId = document.getElementById('backSticker')
		changeId.setAttribute("id", "replace")
	} else if(comingFrom == 'home'){
		return("/n");
	}
	stickerId = document.querySelectorAll("#replace").length
}

function showStickers(){
	stickervar[0].style.display = "inline"
	stickervar[1].style.display = "inline"
	stickertextvar.style.display = "inline"
}

function hideStickers(){
	stickervar[0].style.display = "none"
	stickervar[1].style.display = "none"
	stickertextvar.style.display = "none"
}

function placeBack(stickerType){
	// if(stickerOnBack = true){
	// 	var numBackStickers = document.querySelectorAll("#backSticker").length;
	// 	while(numBackStickers>=1){
	// 		var removeStickers = document.getElementById("backSticker").remove();
	// 		numBackStickers = numBackStickers - 1;
	// 	};
	// }
	placedSticker.setAttribute("id", "backSticker")
	if(stickerType == 'turtle'){
		placedSticker.innerHTML = '<g id="iceCube" transform="translate(0.000000,669.000000)" fill="#000000" stroke="none"><path d="M2896 6616 c-296 -155 -525 -393 -572 -596 -45 -196 55 -349 177 -267 69 46 128 174 102 222 -8 14 -15 11 -46 -24 -43 -48 -73 -53 -88 -14 -29 76 58 213 136 213 43 0 90 -39 105 -87 19 -56 8 -197 -20 -263 -30 -69 -94 -171 -148 -233 -52 -60 -53 -71 -4 -63 99 18 221 116 270 218 70 144 68 361 -5 504 -14 29 -23 59 -20 68 17 44 74 21 106 -42 56 -109 52 -326 -10 -567 -43 -169 -145 -331 -255 -404 -49 -32 -81 -68 -70 -78 3 -4 41 6 84 20 124 43 206 57 350 57 145 0 244 -16 350 -56 78 -29 82 -29 82 -4 0 11 -17 31 -42 49 -70 48 -184 175 -216 238 -105 207 -143 604 -71 745 24 48 64 76 88 61 27 -17 24 -42 -15 -126 -34 -74 -38 -90 -42 -186 -9 -226 73 -388 236 -466 105 -51 150 -45 90 11 -49 46 -124 168 -158 257 -26 65 -32 97 -33 162 -2 116 33 171 112 182 39 5 44 3 81 -36 60 -63 83 -178 39 -201 -18 -10 -26 -6 -64 36 l-44 47 -6 -26 c-4 -15 -1 -50 5 -79 26 -106 132 -178 214 -144 74 31 98 198 47 327 -57 148 -205 316 -386 437 -77 52 -252 152 -265 152 -5 0 -48 -20 -94 -44z"/> <path d="M805 5376 c-121 -30 -205 -103 -392 -343 -69 -88 -213 -300 -213 -313 0 -5 57 -44 126 -87 212 -132 284 -222 284 -353 0 -36 -5 -85 -11 -109 -5 -24 -8 -46 -5 -48 8 -8 75 58 104 105 17 26 43 83 57 127 24 70 27 92 23 180 -4 99 -19 154 -45 163 -7 2 -17 -8 -22 -21 -14 -35 -49 -57 -92 -57 -28 0 -46 9 -80 39 -39 34 -44 43 -43 81 2 74 59 128 146 137 49 5 63 2 100 -20 99 -58 127 -114 135 -266 13 -265 -82 -524 -296 -806 -62 -81 -256 -280 -358 -367 l-84 -71 7 -61 c6 -58 36 -159 54 -181 5 -6 16 -33 25 -60 20 -59 75 -153 106 -180 11 -11 27 -32 35 -47 24 -46 34 -32 34 45 0 39 11 125 24 191 22 104 35 139 105 280 168 339 396 680 604 902 31 34 57 64 57 67 0 3 -16 28 -35 57 -42 63 -55 106 -55 190 0 103 62 210 122 210 32 0 95 -38 122 -73 48 -63 66 -117 91 -279 8 -48 27 -48 45 -1 33 92 97 180 222 305 l127 127 -38 48 c-54 68 -124 131 -213 197 -43 31 -118 91 -167 134 -97 83 -167 119 -299 153 -87 22 -229 24 -307 5z"/> <path d="M4894 5356 c-91 -21 -207 -73 -240 -107 -16 -17 -90 -76 -164 -132 -128 -95 -291 -241 -311 -280 -8 -14 12 -39 114 -140 123 -121 198 -223 228 -309 18 -52 36 -48 44 10 11 79 46 205 68 240 25 43 89 90 134 98 42 8 73 -17 109 -88 44 -86 24 -238 -41 -324 -33 -43 -32 -54 11 -95 103 -98 274 -321 421 -549 221 -343 316 -580 332 -825 l6 -100 53 70 c96 128 175 315 196 461 l6 42 -123 109 c-67 61 -165 155 -218 210 -86 90 -123 139 -237 316 -50 78 -123 262 -144 366 -16 77 -19 119 -15 211 10 189 38 250 136 294 101 45 172 29 227 -53 21 -32 24 -46 19 -73 -13 -62 -99 -127 -148 -112 -28 8 -77 54 -77 71 0 7 -7 13 -15 13 -8 0 -15 -9 -15 -20 0 -12 -7 -35 -16 -53 -22 -41 -22 -173 -1 -243 32 -109 134 -264 173 -264 18 0 18 -1 -7 55 -30 67 -22 142 22 225 49 93 109 149 246 229 67 39 125 76 128 82 15 23 -162 270 -361 503 -77 90 -117 121 -189 148 -76 27 -258 35 -351 14z"/> <path d="M2685 5134 c-104 -11 -298 -48 -370 -71 -91 -28 -202 -87 -272 -142 -93 -73 -224 -218 -355 -392 -202 -267 -252 -361 -330 -609 -42 -133 -66 -265 -55 -294 7 -17 18 -18 125 -14 92 4 134 11 197 32 149 50 215 96 386 266 85 85 179 187 208 225 63 85 144 243 171 333 18 63 41 257 31 267 -2 3 -14 5 -26 5 -17 0 -26 -13 -45 -57 -63 -155 -159 -320 -291 -498 -118 -160 -236 -258 -356 -295 -70 -22 -138 -26 -148 -10 -8 13 42 124 65 145 15 14 19 14 29 1 7 -9 15 -33 18 -56 5 -35 9 -40 33 -40 33 0 145 94 178 150 109 183 89 420 -36 420 -11 0 -5 12 23 40 39 40 65 51 65 27 0 -7 10 -30 21 -52 38 -69 50 -117 55 -214 2 -52 6 -97 8 -99 28 -27 191 237 267 431 11 29 28 70 39 92 10 22 25 56 34 76 16 35 17 36 62 29 52 -8 62 -17 99 -84 26 -47 27 -54 21 -138 -19 -245 -131 -496 -354 -794 -105 -138 -154 -184 -321 -295 -174 -116 -360 -196 -529 -229 -38 -8 -66 -19 -71 -29 -5 -9 -19 -56 -32 -106 -20 -77 -23 -114 -23 -260 0 -164 4 -195 40 -327 5 -16 22 -18 179 -18 208 0 264 -13 373 -90 67 -47 202 -191 202 -216 0 -7 11 -32 25 -55 49 -85 65 -160 65 -299 0 -143 -16 -235 -57 -338 -34 -86 -98 -193 -139 -233 -30 -29 -33 -30 -60 -16 -97 51 -155 199 -110 285 13 25 23 32 47 32 35 0 89 -52 89 -85 0 -12 6 -29 13 -39 12 -16 16 -13 46 34 49 76 72 159 78 280 9 183 -40 324 -147 423 -67 63 -133 97 -243 127 -123 32 -270 22 -332 -24 -18 -13 -18 -16 -5 -29 8 -7 40 -21 71 -30 75 -23 163 -81 227 -151 55 -61 75 -93 86 -138 8 -34 7 -34 -52 -4 -54 27 -146 50 -182 45 -24 -4 -25 -6 -25 -84 0 -66 8 -104 44 -220 58 -186 105 -291 190 -429 83 -133 144 -217 196 -266 l36 -35 32 39 c179 218 291 448 329 676 18 105 17 600 0 700 -45 251 -110 399 -225 512 -37 38 -73 68 -80 68 -9 0 -11 -19 -9 -66 5 -80 -16 -142 -59 -178 -63 -53 -225 -73 -304 -37 -52 24 -117 95 -140 154 -22 59 -16 157 13 196 59 80 220 147 351 144 142 -2 302 -80 407 -196 72 -80 179 -326 215 -499 19 -88 22 -135 23 -328 0 -163 -5 -256 -17 -339 -10 -62 -20 -117 -23 -122 -3 -5 -9 -33 -14 -63 -17 -107 -169 -411 -317 -635 -60 -91 -80 -128 -74 -140 15 -27 310 -312 406 -391 123 -103 243 -188 350 -249 90 -51 129 -62 138 -38 3 7 2 233 -2 502 -4 270 -4 506 1 525 4 19 8 82 8 139 0 90 -2 102 -16 97 -9 -3 -24 -6 -34 -6 -20 0 -154 -94 -213 -149 -65 -60 -167 -224 -167 -268 0 -9 -7 -36 -16 -60 -10 -25 -13 -49 -8 -60 4 -10 9 -38 10 -61 4 -56 32 -152 44 -152 5 0 16 13 24 29 26 49 138 87 184 62 44 -23 48 -125 8 -186 -60 -92 -149 -63 -294 96 -38 42 -79 97 -92 124 -21 44 -23 55 -17 169 4 78 14 145 26 186 57 184 231 366 451 472 58 27 116 55 130 62 25 12 25 13 22 122 -17 600 -20 671 -32 697 -29 61 -105 41 -167 -45 -43 -59 -63 -127 -63 -218 0 -66 10 -82 65 -100 29 -9 35 -17 35 -39 0 -62 -59 -84 -106 -40 -41 38 -82 137 -92 219 -18 153 8 270 75 331 49 46 176 132 213 145 35 12 52 46 33 65 -8 8 -2 270 17 749 5 146 10 369 10 496 0 194 -3 236 -17 264 -15 31 -17 32 -30 15 -7 -11 -13 -33 -13 -50 0 -44 -73 -189 -183 -362 -199 -314 -255 -456 -245 -622 5 -79 25 -132 75 -199 28 -37 99 -86 113 -77 5 3 6 30 3 60 -11 102 51 200 121 193 41 -4 57 -38 58 -127 1 -56 -3 -79 -25 -123 -44 -90 -64 -103 -160 -103 -70 0 -91 4 -141 29 -107 52 -174 134 -191 232 -4 21 -14 64 -22 94 -11 39 -14 81 -10 150 6 113 40 225 120 394 57 118 211 394 258 461 16 22 36 65 45 95 9 30 25 73 36 95 36 70 208 589 199 598 -10 10 -146 17 -206 11z"/> <path d="M3112 5133 c-13 -3 -25 -10 -28 -17 -3 -7 12 -57 32 -112 50 -138 144 -414 144 -426 0 -6 11 -32 25 -60 14 -27 25 -55 25 -61 1 -19 58 -126 161 -300 53 -89 117 -202 142 -252 107 -215 158 -437 127 -555 -5 -19 -17 -67 -27 -105 -25 -94 -63 -157 -120 -196 -73 -50 -133 -69 -222 -69 l-79 0 -35 40 c-49 53 -68 124 -58 212 7 69 29 108 60 108 21 0 87 -64 108 -104 12 -22 14 -46 10 -94 l-6 -64 26 7 c96 24 173 152 173 287 0 75 -26 200 -51 247 -10 19 -19 41 -19 49 0 18 -52 109 -160 277 -119 184 -200 336 -200 375 0 36 -16 80 -30 80 -5 0 -10 -8 -10 -18 0 -10 -4 -22 -9 -28 -14 -15 -19 -271 -10 -494 15 -376 21 -543 24 -793 4 -246 8 -277 39 -277 18 0 158 -97 203 -141 70 -69 78 -94 78 -254 0 -130 -2 -144 -26 -195 -42 -87 -102 -140 -137 -121 -22 12 -42 58 -34 79 2 8 23 22 47 32 39 17 42 21 49 65 3 26 6 65 6 86 0 74 -72 194 -137 227 -36 19 -37 19 -68 1 l-32 -19 -6 -138 c-3 -75 -11 -255 -18 -400 -11 -248 -11 -263 6 -282 10 -11 23 -20 29 -20 26 0 216 -101 273 -144 80 -61 199 -189 242 -260 64 -108 103 -375 66 -463 -22 -52 -146 -195 -201 -232 -67 -44 -119 -57 -150 -36 -70 46 -93 193 -34 225 47 25 141 -6 179 -59 12 -17 26 -31 30 -31 13 0 43 110 48 180 4 54 0 83 -17 137 -44 133 -80 194 -160 273 -92 91 -144 128 -213 151 -44 15 -53 15 -60 4 -4 -8 -3 -67 3 -132 12 -129 13 -506 4 -758 -4 -89 -3 -209 1 -268 6 -97 9 -107 26 -107 47 0 252 130 429 273 168 135 440 410 440 444 0 7 -33 61 -73 120 -99 146 -155 244 -227 398 -120 252 -144 368 -145 690 0 294 13 392 77 565 70 190 130 301 203 374 163 165 429 193 641 68 60 -35 90 -77 99 -141 8 -60 -5 -110 -47 -181 -26 -43 -44 -60 -88 -82 -105 -53 -268 -32 -337 44 -25 26 -43 103 -43 179 0 29 -4 49 -11 49 -6 0 -31 -20 -55 -44 -24 -25 -50 -49 -58 -53 -18 -11 -121 -206 -145 -276 -76 -219 -87 -714 -24 -1002 38 -173 201 -472 317 -584 35 -34 36 -35 54 -15 134 147 273 383 360 614 59 154 72 205 79 300 7 112 1 119 -94 95 -37 -9 -72 -20 -78 -24 -5 -4 -29 -15 -52 -24 -50 -20 -52 -14 -23 51 24 53 107 141 171 183 27 17 84 46 126 65 43 18 78 39 78 46 0 18 -86 47 -163 54 -160 15 -300 -33 -423 -144 -104 -94 -156 -248 -147 -436 6 -113 27 -186 79 -266 32 -50 49 -56 49 -18 0 26 36 85 60 98 73 39 121 -48 90 -162 -13 -46 -64 -113 -107 -140 l-32 -19 -40 38 c-22 21 -63 79 -92 128 -43 76 -55 108 -75 207 -47 233 -41 381 23 498 15 29 38 72 50 96 32 61 162 195 222 227 92 51 134 59 336 66 l190 6 12 50 c47 190 43 428 -10 598 l-22 70 -110 27 c-179 45 -333 117 -529 247 -132 88 -148 103 -235 213 -228 285 -353 549 -396 829 -13 83 -13 98 0 124 8 17 15 35 15 42 0 30 87 85 135 85 15 0 44 -52 62 -112 42 -142 182 -409 263 -501 46 -53 60 -38 60 67 0 44 7 106 15 136 17 64 55 150 66 150 10 0 79 -60 79 -69 0 -3 -18 -14 -40 -23 -46 -19 -67 -58 -77 -137 -12 -105 60 -276 149 -352 98 -84 132 -91 141 -29 6 44 24 73 38 64 20 -12 69 -111 69 -138 l0 -29 -67 6 c-146 14 -288 115 -431 309 -145 196 -223 330 -292 501 -19 47 -28 57 -47 57 -33 0 -37 -17 -23 -117 19 -146 38 -201 118 -347 84 -152 165 -252 332 -409 142 -134 262 -207 395 -242 61 -15 187 -20 245 -9 l32 7 -6 56 c-4 31 -13 79 -21 106 -8 28 -26 93 -40 145 -53 194 -140 353 -332 612 -131 176 -294 343 -400 412 -123 79 -330 156 -425 156 -18 0 -69 7 -113 15 -76 14 -184 17 -233 8z"/> <path d="M86 4458 c-69 -195 -77 -687 -15 -922 10 -37 12 -38 45 -33 19 3 52 20 72 38 68 58 274 263 323 322 44 52 69 101 57 112 -2 3 -30 -4 -61 -15 -31 -11 -65 -20 -76 -20 -31 0 -54 54 -49 110 6 59 56 168 93 202 25 24 27 29 17 58 -20 57 -71 109 -141 144 -70 35 -143 60 -202 70 l-37 6 -26 -72z"/> <path d="M5858 4505 c-3 -3 -25 -8 -48 -11 -116 -14 -255 -106 -305 -203 -14 -28 -14 -31 10 -49 13 -11 41 -51 60 -90 58 -113 56 -222 -3 -230 -20 -3 -66 9 -124 33 -37 15 -18 -38 39 -109 84 -105 301 -313 355 -341 75 -39 84 -36 97 38 54 321 42 643 -35 915 -14 46 -30 63 -46 47z"/> <path d="M304 2042 c-73 -26 -99 -45 -131 -99 -25 -43 -28 -57 -27 -138 1 -147 57 -310 185 -545 46 -85 78 -123 86 -102 11 30 66 82 107 101 53 26 96 26 179 1 53 -17 73 -29 106 -66 81 -93 102 -199 95 -490 l-5 -190 29 -40 c175 -240 483 -425 750 -451 55 -5 62 -4 56 11 -3 9 -37 32 -76 53 -104 54 -208 150 -363 337 -125 150 -145 178 -184 269 -52 120 -65 212 -37 265 9 18 18 32 20 32 2 0 17 -5 35 -11 44 -15 61 -54 72 -167 6 -53 16 -106 22 -118 7 -12 23 -41 36 -65 27 -50 157 -200 209 -241 54 -43 87 -31 43 16 -42 45 -132 293 -146 401 -4 28 -13 84 -21 125 -9 41 -14 109 -13 150 l2 75 -44 -2 c-24 -1 -71 -3 -104 -5 -72 -4 -114 12 -146 55 -20 27 -24 43 -24 109 0 90 19 125 80 146 45 15 72 9 80 -19 22 -67 327 -419 418 -481 67 -46 195 -118 208 -118 17 0 -6 36 -68 113 -73 89 -194 287 -260 427 -46 98 -96 232 -140 380 -14 47 -28 88 -32 93 -4 4 -30 -5 -57 -19 -208 -111 -309 -112 -526 -3 -64 32 -130 76 -191 127 -133 113 -135 114 -223 84z"/> <path d="M5560 2043 c-14 -9 -41 -31 -60 -49 -57 -53 -256 -181 -317 -204 -151 -56 -236 -53 -385 14 -57 26 -107 48 -113 49 -5 1 -21 -43 -36 -98 -14 -55 -35 -118 -46 -140 -11 -22 -30 -71 -42 -109 -35 -109 -224 -447 -308 -550 -26 -32 -57 -69 -67 -82 -11 -13 -17 -26 -13 -30 11 -11 167 80 250 147 119 96 281 285 363 425 23 40 30 44 64 44 45 0 91 -33 110 -80 19 -45 8 -132 -21 -174 -40 -58 -77 -66 -264 -53 -29 2 -29 2 -26 -47 5 -83 -20 -255 -55 -391 -32 -120 -109 -305 -134 -320 -15 -9 -12 -35 4 -35 21 0 129 103 193 183 74 93 110 164 118 234 15 144 17 154 42 183 33 40 68 40 88 0 8 -16 15 -43 15 -60 0 -58 -40 -188 -80 -263 -99 -184 -453 -548 -560 -577 -44 -12 -56 -40 -17 -40 85 0 311 69 412 125 33 19 96 63 140 98 71 57 107 93 229 225 l31 33 0 262 c1 291 3 304 70 403 41 59 87 88 171 105 89 18 143 1 211 -67 62 -62 56 -66 138 86 65 119 83 162 131 310 75 228 51 358 -77 423 -70 36 -125 43 -159 20z"/> <path d="M599 1192 c-43 -22 -129 -102 -129 -120 0 -7 5 -18 10 -25 6 -7 31 -43 57 -82 25 -38 92 -126 149 -195 57 -69 112 -136 123 -150 l19 -25 7 49 c4 26 5 121 3 209 -4 151 -6 166 -31 214 -38 74 -82 121 -125 133 -47 13 -42 13 -83 -8z"/> <path d="M5285 1193 c-49 -25 -92 -72 -117 -127 -20 -46 -23 -69 -26 -250 -2 -109 0 -202 5 -207 12 -12 363 435 363 464 0 15 -105 109 -137 123 -40 17 -51 17 -88 -3z"/> </g> </g>'
		placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'turtle', 'backDeck'), sanityCheck()")
		placedSticker.setAttribute("onmouseup", "pngClear()")
		iceCube = document.getElementById('iceCube')
		iceCube.setAttribute('fill', '#FFFFFF')
		placedSticker.setAttribute('onmousedown', 'replaceSVG("back", "turtle")')
		placedSticker.style = 'left:' + (mouseX - 25 - (placedSticker.clientWidth/4)) +'px; top:' + (mouseY - (placedSticker.clientHeight/4) - 5) + 'px; position: absolute; transform: rotate(90deg);'
		iceCube.setAttribute('transform', 'translate(-50.000000,450.000000) scale(0.0500000,-0.0500000)')
		if(lineWidth == 5){
			iceCube.setAttribute('transform', 'translate(25.000000,375.000000) scale(0.02500000,-0.02500000)')
		} else if(lineWidth == 10){
			iceCube.setAttribute('transform', 'translate(-50.000000,450.000000) scale(0.0500000,-0.0500000)')
		} else if(lineWidth == 15){
			iceCube.setAttribute('transform', 'translate(-50.000000,550.000000) scale(0.07500000,-0.07500000)')
		} else if(lineWidth == 20){
			iceCube.setAttribute('transform', 'translate(-50.000000,650.000000) scale(0.100000,-0.100000)')
		}
	} else if(stickerType == 'tribalDesign'){
		placedSticker.innerHTML = '<g id="iceCube1" transform="translate(0.000000,600.000000)" fill="#00f000" stroke="none"> <path d="M1440 5495 c0 -312 -257 -513 -665 -518 -150 -2 -241 33 -307 118 -34 44 -32 151 4 220 28 54 96 123 147 149 72 38 10 49 -79 15 -115 -44 -194 -125 -251 -260 -27 -63 -31 -82 -26 -132 7 -74 54 -155 119 -206 50 -38 58 -60 32 -82 -53 -44 -214 -274 -214 -306 0 -5 -8 -27 -19 -49 -10 -21 -24 -63 -30 -92 -19 -89 -12 -322 10 -322 5 0 13 19 19 43 54 220 141 386 275 526 134 140 226 191 514 287 304 101 449 190 507 312 24 49 28 69 28 147 -1 100 -26 205 -50 205 -10 0 -14 -14 -14 -55z"/> <path d="M1710 5477 c0 -8 7 -34 17 -58 12 -32 17 -79 17 -174 1 -122 -1 -133 -26 -180 -31 -59 -197 -224 -284 -283 -95 -64 -236 -135 -399 -202 -218 -90 -368 -163 -438 -214 -176 -126 -279 -289 -308 -488 -25 -175 41 -396 183 -605 27 -40 53 -73 58 -73 12 0 13 6 0 28 -36 66 -83 195 -111 307 -57 232 -2 425 165 583 61 58 162 111 228 119 38 6 41 4 33 -13 -4 -10 -12 -37 -18 -59 -5 -22 -13 -44 -17 -50 -11 -14 -55 -204 -69 -293 -23 -150 -10 -418 30 -613 18 -92 78 -267 114 -336 19 -35 35 -69 35 -73 0 -5 -41 -49 -91 -97 -87 -83 -189 -220 -218 -290 -7 -18 -19 -33 -26 -33 -7 0 -30 21 -50 47 -43 55 -106 116 -112 109 -2 -2 4 -21 15 -43 36 -69 62 -177 62 -252 0 -46 -11 -117 -31 -199 -52 -215 -60 -254 -65 -342 -7 -100 8 -267 26 -283 9 -9 10 13 5 103 -11 190 16 346 86 488 101 208 264 399 394 464 86 43 165 57 199 34 20 -13 127 -137 149 -173 4 -7 -37 -55 -104 -123 -224 -227 -340 -433 -425 -755 -29 -108 -27 -373 4 -520 56 -263 188 -508 375 -693 102 -101 207 -181 207 -158 0 2 -21 28 -46 58 -111 130 -196 289 -220 415 -39 204 9 424 120 550 21 24 36 46 33 50 -3 3 -35 -15 -70 -40 -64 -46 -127 -124 -148 -184 -16 -47 -34 -41 -58 20 -113 282 -36 715 180 1012 76 106 218 265 235 265 19 0 204 -170 204 -187 0 -7 -33 -63 -74 -125 -41 -62 -90 -144 -109 -183 -36 -70 -77 -201 -77 -240 1 -17 5 -14 28 15 54 70 159 174 237 235 104 81 142 102 155 89 6 -6 30 -62 55 -125 44 -117 75 -270 75 -378 0 -55 15 -69 26 -23 4 15 15 59 25 97 42 154 35 324 -21 514 l-29 96 72 138 c39 76 77 143 84 149 10 8 13 -4 13 -66 0 -103 11 -101 49 12 31 89 40 225 20 310 -36 162 -48 200 -93 296 -38 82 -83 156 -94 156 -5 0 0 -33 10 -72 27 -102 29 -282 4 -363 -38 -121 -147 -325 -183 -339 -11 -5 -139 81 -198 132 l-27 24 49 51 c73 75 127 149 160 214 25 53 28 67 27 163 -1 224 -40 283 -342 510 -141 106 -185 161 -197 251 -4 27 -11 51 -16 55 -15 9 -10 -63 7 -124 35 -122 82 -182 215 -275 83 -59 162 -136 193 -190 56 -97 53 -239 -9 -362 -42 -82 -149 -215 -174 -215 -9 0 -60 44 -112 98 -312 321 -419 565 -419 957 0 258 58 454 184 621 50 68 125 134 151 134 13 0 15 -7 9 -35 -15 -82 47 -218 138 -300 65 -58 123 -84 205 -92 35 -3 63 -9 63 -13 0 -4 -8 -15 -19 -24 -10 -9 -31 -44 -46 -78 -33 -74 -32 -156 4 -230 35 -74 50 -64 44 30 -7 97 5 123 113 241 42 47 87 108 100 136 30 65 47 181 39 270 -8 95 -26 195 -35 195 -4 0 -10 -53 -13 -117 -8 -164 -32 -211 -134 -262 -83 -41 -222 -23 -275 36 -68 75 -64 286 7 423 37 70 105 116 275 186 63 25 140 59 170 74 99 51 177 155 199 268 13 64 15 269 2 276 -12 8 -21 -18 -21 -58 0 -40 -13 -79 -55 -171 -52 -113 -149 -194 -253 -211 -49 -8 -52 -1 -16 47 65 88 104 216 104 349 0 79 -3 90 -41 167 -41 83 -69 120 -69 90z"/> </g>'
		placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'tribalDesign', 'backDeck'), sanityCheck()")
		placedSticker.setAttribute("onmouseup", "pngClear()")
		iceCube = document.getElementById('iceCube1')
		iceCube.setAttribute('fill', '#FFFFFF')
		placedSticker.setAttribute('onmousedown', 'replaceSVG("back", "tribalDesign")')
		placedSticker.style = 'left:' + (mouseX - 25 - (placedSticker.clientWidth/4)) +'px; top:' + (mouseY - (placedSticker.clientHeight/4) + 10) + 'px; position: absolute; transform: rotate(90deg);'
		iceCube.setAttribute('transform', 'translate(-100.000000,625.000000) scale(0.100000,-0.100000)')
		if(lineWidth == 5){
			iceCube.setAttribute('transform', 'translate(-100.000000,625.000000) scale(0.0500000,-0.0500000)')
		} else if(lineWidth == 10){
			iceCube.setAttribute('transform', 'translate(-100.000000,625.000000) scale(0.07500000,-0.07500000)')
		} else if(lineWidth == 15){
			iceCube.setAttribute('transform', 'translate(-100.000000,625.000000) scale(0.100000,-0.100000)')
		} else if(lineWidth == 20){
			iceCube.setAttribute('transform', 'translate(-100.000000,675.000000) scale(0.12500000,-0.12500000)')
		}
	}
	placedSticker.setAttribute("ondragover", "allowDrop(event)")
	placedSticker.setAttribute("ondrop", "drop(event, 'backDeck')")
	placedSticker.style.transform = 'rotate(90deg)'
	stickerOnBack = true
	console.log(mouseX)
	console.log('that was mouse X')
	backStickerZ('1001')
	iceCube.setAttribute('fill', currentColor)
	// sanityCheck()
}

function placeFront(stickerType){
	// if(stickerOnFront = true){
	// 	var numFrontStickers = document.querySelectorAll("#frontSticker").length;
	// 	while(numFrontStickers>=1){
	// 		var removeStickers = document.getElementById("frontSticker").remove();
	// 		numFrontStickers = numFrontStickers - 1;
	// 	};
	// }
	placedSticker.setAttribute("id", "frontSticker")
	if(stickerType == 'turtle'){
		placedSticker.innerHTML = '<g id="iceCube2" transform="translate(0.000000,669.000000)" fill="#000000" stroke="none"><path d="M2896 6616 c-296 -155 -525 -393 -572 -596 -45 -196 55 -349 177 -267 69 46 128 174 102 222 -8 14 -15 11 -46 -24 -43 -48 -73 -53 -88 -14 -29 76 58 213 136 213 43 0 90 -39 105 -87 19 -56 8 -197 -20 -263 -30 -69 -94 -171 -148 -233 -52 -60 -53 -71 -4 -63 99 18 221 116 270 218 70 144 68 361 -5 504 -14 29 -23 59 -20 68 17 44 74 21 106 -42 56 -109 52 -326 -10 -567 -43 -169 -145 -331 -255 -404 -49 -32 -81 -68 -70 -78 3 -4 41 6 84 20 124 43 206 57 350 57 145 0 244 -16 350 -56 78 -29 82 -29 82 -4 0 11 -17 31 -42 49 -70 48 -184 175 -216 238 -105 207 -143 604 -71 745 24 48 64 76 88 61 27 -17 24 -42 -15 -126 -34 -74 -38 -90 -42 -186 -9 -226 73 -388 236 -466 105 -51 150 -45 90 11 -49 46 -124 168 -158 257 -26 65 -32 97 -33 162 -2 116 33 171 112 182 39 5 44 3 81 -36 60 -63 83 -178 39 -201 -18 -10 -26 -6 -64 36 l-44 47 -6 -26 c-4 -15 -1 -50 5 -79 26 -106 132 -178 214 -144 74 31 98 198 47 327 -57 148 -205 316 -386 437 -77 52 -252 152 -265 152 -5 0 -48 -20 -94 -44z"/> <path d="M805 5376 c-121 -30 -205 -103 -392 -343 -69 -88 -213 -300 -213 -313 0 -5 57 -44 126 -87 212 -132 284 -222 284 -353 0 -36 -5 -85 -11 -109 -5 -24 -8 -46 -5 -48 8 -8 75 58 104 105 17 26 43 83 57 127 24 70 27 92 23 180 -4 99 -19 154 -45 163 -7 2 -17 -8 -22 -21 -14 -35 -49 -57 -92 -57 -28 0 -46 9 -80 39 -39 34 -44 43 -43 81 2 74 59 128 146 137 49 5 63 2 100 -20 99 -58 127 -114 135 -266 13 -265 -82 -524 -296 -806 -62 -81 -256 -280 -358 -367 l-84 -71 7 -61 c6 -58 36 -159 54 -181 5 -6 16 -33 25 -60 20 -59 75 -153 106 -180 11 -11 27 -32 35 -47 24 -46 34 -32 34 45 0 39 11 125 24 191 22 104 35 139 105 280 168 339 396 680 604 902 31 34 57 64 57 67 0 3 -16 28 -35 57 -42 63 -55 106 -55 190 0 103 62 210 122 210 32 0 95 -38 122 -73 48 -63 66 -117 91 -279 8 -48 27 -48 45 -1 33 92 97 180 222 305 l127 127 -38 48 c-54 68 -124 131 -213 197 -43 31 -118 91 -167 134 -97 83 -167 119 -299 153 -87 22 -229 24 -307 5z"/> <path d="M4894 5356 c-91 -21 -207 -73 -240 -107 -16 -17 -90 -76 -164 -132 -128 -95 -291 -241 -311 -280 -8 -14 12 -39 114 -140 123 -121 198 -223 228 -309 18 -52 36 -48 44 10 11 79 46 205 68 240 25 43 89 90 134 98 42 8 73 -17 109 -88 44 -86 24 -238 -41 -324 -33 -43 -32 -54 11 -95 103 -98 274 -321 421 -549 221 -343 316 -580 332 -825 l6 -100 53 70 c96 128 175 315 196 461 l6 42 -123 109 c-67 61 -165 155 -218 210 -86 90 -123 139 -237 316 -50 78 -123 262 -144 366 -16 77 -19 119 -15 211 10 189 38 250 136 294 101 45 172 29 227 -53 21 -32 24 -46 19 -73 -13 -62 -99 -127 -148 -112 -28 8 -77 54 -77 71 0 7 -7 13 -15 13 -8 0 -15 -9 -15 -20 0 -12 -7 -35 -16 -53 -22 -41 -22 -173 -1 -243 32 -109 134 -264 173 -264 18 0 18 -1 -7 55 -30 67 -22 142 22 225 49 93 109 149 246 229 67 39 125 76 128 82 15 23 -162 270 -361 503 -77 90 -117 121 -189 148 -76 27 -258 35 -351 14z"/> <path d="M2685 5134 c-104 -11 -298 -48 -370 -71 -91 -28 -202 -87 -272 -142 -93 -73 -224 -218 -355 -392 -202 -267 -252 -361 -330 -609 -42 -133 -66 -265 -55 -294 7 -17 18 -18 125 -14 92 4 134 11 197 32 149 50 215 96 386 266 85 85 179 187 208 225 63 85 144 243 171 333 18 63 41 257 31 267 -2 3 -14 5 -26 5 -17 0 -26 -13 -45 -57 -63 -155 -159 -320 -291 -498 -118 -160 -236 -258 -356 -295 -70 -22 -138 -26 -148 -10 -8 13 42 124 65 145 15 14 19 14 29 1 7 -9 15 -33 18 -56 5 -35 9 -40 33 -40 33 0 145 94 178 150 109 183 89 420 -36 420 -11 0 -5 12 23 40 39 40 65 51 65 27 0 -7 10 -30 21 -52 38 -69 50 -117 55 -214 2 -52 6 -97 8 -99 28 -27 191 237 267 431 11 29 28 70 39 92 10 22 25 56 34 76 16 35 17 36 62 29 52 -8 62 -17 99 -84 26 -47 27 -54 21 -138 -19 -245 -131 -496 -354 -794 -105 -138 -154 -184 -321 -295 -174 -116 -360 -196 -529 -229 -38 -8 -66 -19 -71 -29 -5 -9 -19 -56 -32 -106 -20 -77 -23 -114 -23 -260 0 -164 4 -195 40 -327 5 -16 22 -18 179 -18 208 0 264 -13 373 -90 67 -47 202 -191 202 -216 0 -7 11 -32 25 -55 49 -85 65 -160 65 -299 0 -143 -16 -235 -57 -338 -34 -86 -98 -193 -139 -233 -30 -29 -33 -30 -60 -16 -97 51 -155 199 -110 285 13 25 23 32 47 32 35 0 89 -52 89 -85 0 -12 6 -29 13 -39 12 -16 16 -13 46 34 49 76 72 159 78 280 9 183 -40 324 -147 423 -67 63 -133 97 -243 127 -123 32 -270 22 -332 -24 -18 -13 -18 -16 -5 -29 8 -7 40 -21 71 -30 75 -23 163 -81 227 -151 55 -61 75 -93 86 -138 8 -34 7 -34 -52 -4 -54 27 -146 50 -182 45 -24 -4 -25 -6 -25 -84 0 -66 8 -104 44 -220 58 -186 105 -291 190 -429 83 -133 144 -217 196 -266 l36 -35 32 39 c179 218 291 448 329 676 18 105 17 600 0 700 -45 251 -110 399 -225 512 -37 38 -73 68 -80 68 -9 0 -11 -19 -9 -66 5 -80 -16 -142 -59 -178 -63 -53 -225 -73 -304 -37 -52 24 -117 95 -140 154 -22 59 -16 157 13 196 59 80 220 147 351 144 142 -2 302 -80 407 -196 72 -80 179 -326 215 -499 19 -88 22 -135 23 -328 0 -163 -5 -256 -17 -339 -10 -62 -20 -117 -23 -122 -3 -5 -9 -33 -14 -63 -17 -107 -169 -411 -317 -635 -60 -91 -80 -128 -74 -140 15 -27 310 -312 406 -391 123 -103 243 -188 350 -249 90 -51 129 -62 138 -38 3 7 2 233 -2 502 -4 270 -4 506 1 525 4 19 8 82 8 139 0 90 -2 102 -16 97 -9 -3 -24 -6 -34 -6 -20 0 -154 -94 -213 -149 -65 -60 -167 -224 -167 -268 0 -9 -7 -36 -16 -60 -10 -25 -13 -49 -8 -60 4 -10 9 -38 10 -61 4 -56 32 -152 44 -152 5 0 16 13 24 29 26 49 138 87 184 62 44 -23 48 -125 8 -186 -60 -92 -149 -63 -294 96 -38 42 -79 97 -92 124 -21 44 -23 55 -17 169 4 78 14 145 26 186 57 184 231 366 451 472 58 27 116 55 130 62 25 12 25 13 22 122 -17 600 -20 671 -32 697 -29 61 -105 41 -167 -45 -43 -59 -63 -127 -63 -218 0 -66 10 -82 65 -100 29 -9 35 -17 35 -39 0 -62 -59 -84 -106 -40 -41 38 -82 137 -92 219 -18 153 8 270 75 331 49 46 176 132 213 145 35 12 52 46 33 65 -8 8 -2 270 17 749 5 146 10 369 10 496 0 194 -3 236 -17 264 -15 31 -17 32 -30 15 -7 -11 -13 -33 -13 -50 0 -44 -73 -189 -183 -362 -199 -314 -255 -456 -245 -622 5 -79 25 -132 75 -199 28 -37 99 -86 113 -77 5 3 6 30 3 60 -11 102 51 200 121 193 41 -4 57 -38 58 -127 1 -56 -3 -79 -25 -123 -44 -90 -64 -103 -160 -103 -70 0 -91 4 -141 29 -107 52 -174 134 -191 232 -4 21 -14 64 -22 94 -11 39 -14 81 -10 150 6 113 40 225 120 394 57 118 211 394 258 461 16 22 36 65 45 95 9 30 25 73 36 95 36 70 208 589 199 598 -10 10 -146 17 -206 11z"/> <path d="M3112 5133 c-13 -3 -25 -10 -28 -17 -3 -7 12 -57 32 -112 50 -138 144 -414 144 -426 0 -6 11 -32 25 -60 14 -27 25 -55 25 -61 1 -19 58 -126 161 -300 53 -89 117 -202 142 -252 107 -215 158 -437 127 -555 -5 -19 -17 -67 -27 -105 -25 -94 -63 -157 -120 -196 -73 -50 -133 -69 -222 -69 l-79 0 -35 40 c-49 53 -68 124 -58 212 7 69 29 108 60 108 21 0 87 -64 108 -104 12 -22 14 -46 10 -94 l-6 -64 26 7 c96 24 173 152 173 287 0 75 -26 200 -51 247 -10 19 -19 41 -19 49 0 18 -52 109 -160 277 -119 184 -200 336 -200 375 0 36 -16 80 -30 80 -5 0 -10 -8 -10 -18 0 -10 -4 -22 -9 -28 -14 -15 -19 -271 -10 -494 15 -376 21 -543 24 -793 4 -246 8 -277 39 -277 18 0 158 -97 203 -141 70 -69 78 -94 78 -254 0 -130 -2 -144 -26 -195 -42 -87 -102 -140 -137 -121 -22 12 -42 58 -34 79 2 8 23 22 47 32 39 17 42 21 49 65 3 26 6 65 6 86 0 74 -72 194 -137 227 -36 19 -37 19 -68 1 l-32 -19 -6 -138 c-3 -75 -11 -255 -18 -400 -11 -248 -11 -263 6 -282 10 -11 23 -20 29 -20 26 0 216 -101 273 -144 80 -61 199 -189 242 -260 64 -108 103 -375 66 -463 -22 -52 -146 -195 -201 -232 -67 -44 -119 -57 -150 -36 -70 46 -93 193 -34 225 47 25 141 -6 179 -59 12 -17 26 -31 30 -31 13 0 43 110 48 180 4 54 0 83 -17 137 -44 133 -80 194 -160 273 -92 91 -144 128 -213 151 -44 15 -53 15 -60 4 -4 -8 -3 -67 3 -132 12 -129 13 -506 4 -758 -4 -89 -3 -209 1 -268 6 -97 9 -107 26 -107 47 0 252 130 429 273 168 135 440 410 440 444 0 7 -33 61 -73 120 -99 146 -155 244 -227 398 -120 252 -144 368 -145 690 0 294 13 392 77 565 70 190 130 301 203 374 163 165 429 193 641 68 60 -35 90 -77 99 -141 8 -60 -5 -110 -47 -181 -26 -43 -44 -60 -88 -82 -105 -53 -268 -32 -337 44 -25 26 -43 103 -43 179 0 29 -4 49 -11 49 -6 0 -31 -20 -55 -44 -24 -25 -50 -49 -58 -53 -18 -11 -121 -206 -145 -276 -76 -219 -87 -714 -24 -1002 38 -173 201 -472 317 -584 35 -34 36 -35 54 -15 134 147 273 383 360 614 59 154 72 205 79 300 7 112 1 119 -94 95 -37 -9 -72 -20 -78 -24 -5 -4 -29 -15 -52 -24 -50 -20 -52 -14 -23 51 24 53 107 141 171 183 27 17 84 46 126 65 43 18 78 39 78 46 0 18 -86 47 -163 54 -160 15 -300 -33 -423 -144 -104 -94 -156 -248 -147 -436 6 -113 27 -186 79 -266 32 -50 49 -56 49 -18 0 26 36 85 60 98 73 39 121 -48 90 -162 -13 -46 -64 -113 -107 -140 l-32 -19 -40 38 c-22 21 -63 79 -92 128 -43 76 -55 108 -75 207 -47 233 -41 381 23 498 15 29 38 72 50 96 32 61 162 195 222 227 92 51 134 59 336 66 l190 6 12 50 c47 190 43 428 -10 598 l-22 70 -110 27 c-179 45 -333 117 -529 247 -132 88 -148 103 -235 213 -228 285 -353 549 -396 829 -13 83 -13 98 0 124 8 17 15 35 15 42 0 30 87 85 135 85 15 0 44 -52 62 -112 42 -142 182 -409 263 -501 46 -53 60 -38 60 67 0 44 7 106 15 136 17 64 55 150 66 150 10 0 79 -60 79 -69 0 -3 -18 -14 -40 -23 -46 -19 -67 -58 -77 -137 -12 -105 60 -276 149 -352 98 -84 132 -91 141 -29 6 44 24 73 38 64 20 -12 69 -111 69 -138 l0 -29 -67 6 c-146 14 -288 115 -431 309 -145 196 -223 330 -292 501 -19 47 -28 57 -47 57 -33 0 -37 -17 -23 -117 19 -146 38 -201 118 -347 84 -152 165 -252 332 -409 142 -134 262 -207 395 -242 61 -15 187 -20 245 -9 l32 7 -6 56 c-4 31 -13 79 -21 106 -8 28 -26 93 -40 145 -53 194 -140 353 -332 612 -131 176 -294 343 -400 412 -123 79 -330 156 -425 156 -18 0 -69 7 -113 15 -76 14 -184 17 -233 8z"/> <path d="M86 4458 c-69 -195 -77 -687 -15 -922 10 -37 12 -38 45 -33 19 3 52 20 72 38 68 58 274 263 323 322 44 52 69 101 57 112 -2 3 -30 -4 -61 -15 -31 -11 -65 -20 -76 -20 -31 0 -54 54 -49 110 6 59 56 168 93 202 25 24 27 29 17 58 -20 57 -71 109 -141 144 -70 35 -143 60 -202 70 l-37 6 -26 -72z"/> <path d="M5858 4505 c-3 -3 -25 -8 -48 -11 -116 -14 -255 -106 -305 -203 -14 -28 -14 -31 10 -49 13 -11 41 -51 60 -90 58 -113 56 -222 -3 -230 -20 -3 -66 9 -124 33 -37 15 -18 -38 39 -109 84 -105 301 -313 355 -341 75 -39 84 -36 97 38 54 321 42 643 -35 915 -14 46 -30 63 -46 47z"/> <path d="M304 2042 c-73 -26 -99 -45 -131 -99 -25 -43 -28 -57 -27 -138 1 -147 57 -310 185 -545 46 -85 78 -123 86 -102 11 30 66 82 107 101 53 26 96 26 179 1 53 -17 73 -29 106 -66 81 -93 102 -199 95 -490 l-5 -190 29 -40 c175 -240 483 -425 750 -451 55 -5 62 -4 56 11 -3 9 -37 32 -76 53 -104 54 -208 150 -363 337 -125 150 -145 178 -184 269 -52 120 -65 212 -37 265 9 18 18 32 20 32 2 0 17 -5 35 -11 44 -15 61 -54 72 -167 6 -53 16 -106 22 -118 7 -12 23 -41 36 -65 27 -50 157 -200 209 -241 54 -43 87 -31 43 16 -42 45 -132 293 -146 401 -4 28 -13 84 -21 125 -9 41 -14 109 -13 150 l2 75 -44 -2 c-24 -1 -71 -3 -104 -5 -72 -4 -114 12 -146 55 -20 27 -24 43 -24 109 0 90 19 125 80 146 45 15 72 9 80 -19 22 -67 327 -419 418 -481 67 -46 195 -118 208 -118 17 0 -6 36 -68 113 -73 89 -194 287 -260 427 -46 98 -96 232 -140 380 -14 47 -28 88 -32 93 -4 4 -30 -5 -57 -19 -208 -111 -309 -112 -526 -3 -64 32 -130 76 -191 127 -133 113 -135 114 -223 84z"/> <path d="M5560 2043 c-14 -9 -41 -31 -60 -49 -57 -53 -256 -181 -317 -204 -151 -56 -236 -53 -385 14 -57 26 -107 48 -113 49 -5 1 -21 -43 -36 -98 -14 -55 -35 -118 -46 -140 -11 -22 -30 -71 -42 -109 -35 -109 -224 -447 -308 -550 -26 -32 -57 -69 -67 -82 -11 -13 -17 -26 -13 -30 11 -11 167 80 250 147 119 96 281 285 363 425 23 40 30 44 64 44 45 0 91 -33 110 -80 19 -45 8 -132 -21 -174 -40 -58 -77 -66 -264 -53 -29 2 -29 2 -26 -47 5 -83 -20 -255 -55 -391 -32 -120 -109 -305 -134 -320 -15 -9 -12 -35 4 -35 21 0 129 103 193 183 74 93 110 164 118 234 15 144 17 154 42 183 33 40 68 40 88 0 8 -16 15 -43 15 -60 0 -58 -40 -188 -80 -263 -99 -184 -453 -548 -560 -577 -44 -12 -56 -40 -17 -40 85 0 311 69 412 125 33 19 96 63 140 98 71 57 107 93 229 225 l31 33 0 262 c1 291 3 304 70 403 41 59 87 88 171 105 89 18 143 1 211 -67 62 -62 56 -66 138 86 65 119 83 162 131 310 75 228 51 358 -77 423 -70 36 -125 43 -159 20z"/> <path d="M599 1192 c-43 -22 -129 -102 -129 -120 0 -7 5 -18 10 -25 6 -7 31 -43 57 -82 25 -38 92 -126 149 -195 57 -69 112 -136 123 -150 l19 -25 7 49 c4 26 5 121 3 209 -4 151 -6 166 -31 214 -38 74 -82 121 -125 133 -47 13 -42 13 -83 -8z"/> <path d="M5285 1193 c-49 -25 -92 -72 -117 -127 -20 -46 -23 -69 -26 -250 -2 -109 0 -202 5 -207 12 -12 363 435 363 464 0 15 -105 109 -137 123 -40 17 -51 17 -88 -3z"/> </g> </g>'
		placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'turtle', 'frontDeck'), sanityCheck()")
		placedSticker.setAttribute("onmouseup", "pngClear()")
		iceCube = document.getElementById('iceCube2')
		iceCube.setAttribute('fill', '#FFFFFF')
		placedSticker.setAttribute('onmousedown', 'replaceSVG("front", "turtle")')
		placedSticker.style = 'left:' + (mouseX - 25 - (placedSticker.clientWidth/4)) +'px; top:' + (mouseY - (placedSticker.clientHeight/4) - 5) + 'px; position: absolute; transform: rotate(90deg);'
		iceCube.setAttribute('transform', 'translate(-50.000000,450.000000) scale(0.0500000,-0.0500000)')
		if(lineWidth == 5){
			iceCube.setAttribute('transform', 'translate(25.000000,375.000000) scale(0.02500000,-0.02500000)')
		} else if(lineWidth == 10){
			iceCube.setAttribute('transform', 'translate(-50.000000,450.000000) scale(0.0500000,-0.0500000)')
		} else if(lineWidth == 15){
			iceCube.setAttribute('transform', 'translate(-50.000000,550.000000) scale(0.07500000,-0.07500000)')
		} else if(lineWidth == 20){
			iceCube.setAttribute('transform', 'translate(-50.000000,650.000000) scale(0.100000,-0.100000)')
		}
	} else if(stickerType == 'tribalDesign'){
		placedSticker.innerHTML = '<g id="iceCube3" transform="translate(0.000000,600.000000)" fill="#00f000" stroke="none"> <path d="M1440 5495 c0 -312 -257 -513 -665 -518 -150 -2 -241 33 -307 118 -34 44 -32 151 4 220 28 54 96 123 147 149 72 38 10 49 -79 15 -115 -44 -194 -125 -251 -260 -27 -63 -31 -82 -26 -132 7 -74 54 -155 119 -206 50 -38 58 -60 32 -82 -53 -44 -214 -274 -214 -306 0 -5 -8 -27 -19 -49 -10 -21 -24 -63 -30 -92 -19 -89 -12 -322 10 -322 5 0 13 19 19 43 54 220 141 386 275 526 134 140 226 191 514 287 304 101 449 190 507 312 24 49 28 69 28 147 -1 100 -26 205 -50 205 -10 0 -14 -14 -14 -55z"/> <path d="M1710 5477 c0 -8 7 -34 17 -58 12 -32 17 -79 17 -174 1 -122 -1 -133 -26 -180 -31 -59 -197 -224 -284 -283 -95 -64 -236 -135 -399 -202 -218 -90 -368 -163 -438 -214 -176 -126 -279 -289 -308 -488 -25 -175 41 -396 183 -605 27 -40 53 -73 58 -73 12 0 13 6 0 28 -36 66 -83 195 -111 307 -57 232 -2 425 165 583 61 58 162 111 228 119 38 6 41 4 33 -13 -4 -10 -12 -37 -18 -59 -5 -22 -13 -44 -17 -50 -11 -14 -55 -204 -69 -293 -23 -150 -10 -418 30 -613 18 -92 78 -267 114 -336 19 -35 35 -69 35 -73 0 -5 -41 -49 -91 -97 -87 -83 -189 -220 -218 -290 -7 -18 -19 -33 -26 -33 -7 0 -30 21 -50 47 -43 55 -106 116 -112 109 -2 -2 4 -21 15 -43 36 -69 62 -177 62 -252 0 -46 -11 -117 -31 -199 -52 -215 -60 -254 -65 -342 -7 -100 8 -267 26 -283 9 -9 10 13 5 103 -11 190 16 346 86 488 101 208 264 399 394 464 86 43 165 57 199 34 20 -13 127 -137 149 -173 4 -7 -37 -55 -104 -123 -224 -227 -340 -433 -425 -755 -29 -108 -27 -373 4 -520 56 -263 188 -508 375 -693 102 -101 207 -181 207 -158 0 2 -21 28 -46 58 -111 130 -196 289 -220 415 -39 204 9 424 120 550 21 24 36 46 33 50 -3 3 -35 -15 -70 -40 -64 -46 -127 -124 -148 -184 -16 -47 -34 -41 -58 20 -113 282 -36 715 180 1012 76 106 218 265 235 265 19 0 204 -170 204 -187 0 -7 -33 -63 -74 -125 -41 -62 -90 -144 -109 -183 -36 -70 -77 -201 -77 -240 1 -17 5 -14 28 15 54 70 159 174 237 235 104 81 142 102 155 89 6 -6 30 -62 55 -125 44 -117 75 -270 75 -378 0 -55 15 -69 26 -23 4 15 15 59 25 97 42 154 35 324 -21 514 l-29 96 72 138 c39 76 77 143 84 149 10 8 13 -4 13 -66 0 -103 11 -101 49 12 31 89 40 225 20 310 -36 162 -48 200 -93 296 -38 82 -83 156 -94 156 -5 0 0 -33 10 -72 27 -102 29 -282 4 -363 -38 -121 -147 -325 -183 -339 -11 -5 -139 81 -198 132 l-27 24 49 51 c73 75 127 149 160 214 25 53 28 67 27 163 -1 224 -40 283 -342 510 -141 106 -185 161 -197 251 -4 27 -11 51 -16 55 -15 9 -10 -63 7 -124 35 -122 82 -182 215 -275 83 -59 162 -136 193 -190 56 -97 53 -239 -9 -362 -42 -82 -149 -215 -174 -215 -9 0 -60 44 -112 98 -312 321 -419 565 -419 957 0 258 58 454 184 621 50 68 125 134 151 134 13 0 15 -7 9 -35 -15 -82 47 -218 138 -300 65 -58 123 -84 205 -92 35 -3 63 -9 63 -13 0 -4 -8 -15 -19 -24 -10 -9 -31 -44 -46 -78 -33 -74 -32 -156 4 -230 35 -74 50 -64 44 30 -7 97 5 123 113 241 42 47 87 108 100 136 30 65 47 181 39 270 -8 95 -26 195 -35 195 -4 0 -10 -53 -13 -117 -8 -164 -32 -211 -134 -262 -83 -41 -222 -23 -275 36 -68 75 -64 286 7 423 37 70 105 116 275 186 63 25 140 59 170 74 99 51 177 155 199 268 13 64 15 269 2 276 -12 8 -21 -18 -21 -58 0 -40 -13 -79 -55 -171 -52 -113 -149 -194 -253 -211 -49 -8 -52 -1 -16 47 65 88 104 216 104 349 0 79 -3 90 -41 167 -41 83 -69 120 -69 90z"/> </g>'
		placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'tribalDesign', 'frontDeck'), sanityCheck()")
		placedSticker.setAttribute("onmouseup", "pngClear()")
		iceCube = document.getElementById('iceCube3')
		iceCube.setAttribute('fill', '#FFFFFF')
		placedSticker.setAttribute('onmousedown', 'replaceSVG("front", "tribalDesign")')
		placedSticker.style = 'left:' + (mouseX - 25 - (placedSticker.clientWidth/4)) +'px; top:' + (mouseY - (placedSticker.clientHeight/4) + 10) + 'px; position: absolute; transform: rotate(90deg);'
		iceCube.setAttribute('transform', 'translate(-100.000000,625.000000) scale(0.100000,-0.100000)')
		if(lineWidth == 5){
			iceCube.setAttribute('transform', 'translate(-100.000000,625.000000) scale(0.0500000,-0.0500000)')
		} else if(lineWidth == 10){
			iceCube.setAttribute('transform', 'translate(-100.000000,625.000000) scale(0.07500000,-0.07500000)')
		} else if(lineWidth == 15){
			iceCube.setAttribute('transform', 'translate(-100.000000,625.000000) scale(0.100000,-0.100000)')
		} else if(lineWidth == 20){
			iceCube.setAttribute('transform', 'translate(-100.000000,675.000000) scale(0.12500000,-0.12500000)')
		}
	}
	placedSticker.setAttribute("ondragover", "allowDrop(event)")
	placedSticker.setAttribute("ondrop", "drop(event, 'frontDeck')")
	stickerOnFront = true
	console.log(mouseX)
	console.log('that was mouse X')
	frontStickerZ('1001')
	iceCube.setAttribute('fill', currentColor)
	// sanityCheck()
}

function frontStickerZ(zValue){
	if(stickerOnFront == true){
		document.getElementById('frontSticker').style.zIndex = zValue;
	}
}

function backStickerZ(zValue){
	if(stickerOnBack == true){
		document.getElementById('backSticker').style.zIndex = zValue;
	}
}

// function svgDragging(){
// 	followingSticker = document.createElement('img')
// 	followingSticker.src = "../" + stickerType + ".svg";
// 	stickerHolder.appendChild(followingSticker)
// 	console.log()
// }

// function svgDrop(){
// 	iceCube.setAttribute('transform', 'translate(' + startX + ',' + startY + ') scale(0.0500000, -0.0500000)')
// 	console.log("yaramesh")
// 	document.getElementById('iceCube').style.transform = "translate(" + startX + "," + startY + ") scale(0.050000, -0.050000)"
// 	console.log(startX, startY)
// }

function replaceSVG(location, stickerType){
	var stickerHolder = document.getElementById("toBeScreenshot")
	placedImage = document.createElement('img')
	placedImage.src = "../" + stickerType + ".svg"
	stickerHolder.appendChild(placedImage)
	if(location == "front"){
		placedImage.setAttribute("id", "frontSticker")
		if(stickerType == 'turtle'){
			placedImage.setAttribute("ondragstart", "replaceDrag(event, 'turtle', 'frontDeck')")
			placedImage.setAttribute("onmouseup", "drop(event, 'frontDeck'), pngClear()")
			placedImage.setAttribute("style", "transform: rotate(90deg); position: absolute; width: 1.6vw; height: auto; top:" + (mouseY-10) + "px; left:" + (mouseX - 10) + "px; z-index: 1001;")
		} else if(stickerType == 'tribalDesign'){
			placedImage.setAttribute("ondragstart", "replaceDrag(event, 'tribalDesign', 'frontDeck')")
			placedImage.setAttribute("onmouseup", "drop(event, 'frontDeck'), pngClear()")
			placedImage.setAttribute("style", "transform: rotate(90deg); position: absolute; width: 1.6vw; height: auto; top:" + (mouseY-30) + "px; left:" + (mouseX - 10) + "px; z-index: 1001;")
		}
		placedImage.setAttribute("ondragover", "allowDrop(event)")
		placedImage.setAttribute("ondrop", "drop(event, 'backDeck')")
		// stickerOnFront = true
		document.getElementById('frontSticker').style.zIndex = '1001';
	} else if(location == "back"){
		placedImage.setAttribute("id", "backSticker")
		if(stickerType == 'turtle'){
			placedImage.setAttribute("ondragstart", "replaceDrag(event, 'turtle', 'backDeck')")
			placedImage.setAttribute("onmouseup", "drop(event, 'backDeck'), pngClear()")
			placedImage.setAttribute("style", "transform: rotate(90deg); position: absolute; width: 1.6vw; height: auto; top:" + (mouseY-10) + "px; left:" + (mouseX - 10) + "px; z-index: 1001;")
		} else if(stickerType == 'tribalDesign'){
			placedImage.setAttribute("ondragstart", "replaceDrag(event, 'tribalDesign', 'backDeck')")
			placedImage.setAttribute("onmouseup", "drop(event, 'backDeck'), pngClear()")
			placedImage.setAttribute("style", "transform: rotate(90deg); position: absolute; width: 1.6vw; height: auto; top:" + (mouseY-30) + "px; left:" + (mouseX - 10) + "px; z-index: 1001;")
		}
		placedImage.setAttribute("ondragover", "allowDrop(event)")
		placedImage.setAttribute("ondrop", "drop(event, 'frontDeck')")
		// stickerOnBack = true
		document.getElementById('backSticker').style.zIndex = '1001';
	}
	placedImage.setAttribute('onmousedown', 'sanityCheck()')
	iceCube.setAttribute('fill', currentColor)
	placedSticker.remove()
	if(stickerOnBack == false){
		while(document.querySelectorAll('#backSticker').length >= 1){
			document.getElementById('backSticker').remove()
		}
	}
	if(stickerOnFront == false){
		while(document.querySelectorAll('#frontSticker').length >= 1){
			document.getElementById('frontSticker').remove()
		}
	}
	if(document.querySelectorAll('#replace').length >= 1){
		while(document.querySelectorAll('#replace').length >= 1){
			document.getElementById('replace').remove()
		}
	}
	sanityCheck()
}

function sanityCheck(){
	if(stickerOnBack == false){
		while(document.querySelectorAll('#backSticker').length >= 1){
			document.getElementById('backSticker').remove()
		}
	} else if(stickerOnBack == true){
		while(document.querySelectorAll('#backSticker').length >= 2){
			document.getElementById('backSticker').remove()
		}
	}
	if(stickerOnFront == false){
		while(document.querySelectorAll('#frontSticker').length >= 1){
			document.getElementById('frontSticker').remove()
		}
	} else if(stickerOnFront == true){
		while(document.querySelectorAll('#frontSticker').length >= 2){
			document.getElementById('frontSticker').remove()
		}
	}
	if(document.querySelectorAll('#replace').length > 0){
		while(document.querySelectorAll('#replace').length > 0){
			document.getElementById('replace').remove()
		}
	}
	console.log("Sanity check ran")
	console.log("there were " + document.querySelectorAll('#frontSticker').length + " front stickers")
	console.log("there were " + document.querySelectorAll('#backSticker').length + " back stickers")
	console.log("there were " + document.querySelectorAll('#replace').length + " replace stickers")
}

function pngClear(){
	placedImage.remove()
}

sanityCheck();