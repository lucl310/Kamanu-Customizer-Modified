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

let stickervar = [document.getElementById('sticker1'), document.getElementById('sticker2')]
let stickertextvar = document.getElementById('stickerText')

let stickerOnBack = false
let stickerOnFront = false

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
		}
		numStickers = numStickers - 1;
		document.getElementById("placedSticker").remove
	  };
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
		document.getElementById('composite_Image').style.zIndex = "1000";
		document.getElementById('sticker').style.opacity = "100%";
		document.getElementById('stickerPic').style.opacity = "100%";
		document.getElementById('bucketPic').style.opacity = "80%";
		document.getElementById('paintBucket').style.opacity = "80%";
		document.getElementById('pencilPic').style.opacity = "100%";
		document.getElementById('pencil').style.opacity = "100%";
		document.getElementById('eraserPic').style.opacity = "100%";
		document.getElementById('eraser').style.opacity = "100%";
		document.getElementById('cover').style.display = "none";
		canvas.style.zIndex = "0";
		hideStickers()
		ctx.globalCompositeOperation = "source-over"
		document.getElementById('frontSticker').style.zIndex = "1";
		document.getElementById('backSticker').style.zIndex = "1";
	} else if(type == 'pencil'){
		document.getElementById('shading').style.zIndex = "0";
		document.getElementById('amaShading').style.zIndex = "0";
		document.getElementById('amaPic').style.zIndex = "8";
		document.getElementById('deckPic').style.zIndex = "8";
		document.getElementById('composite_Image').style.zIndex = "8";
		document.getElementById('sticker').style.opacity = "100%";
		document.getElementById('stickerPic').style.opacity = "100%";
		document.getElementById('bucketPic').style.opacity = "100%";
		document.getElementById('paintBucket').style.opacity = "100%";
		document.getElementById('pencilPic').style.opacity = "80%";
		document.getElementById('pencil').style.opacity = "80%";
		document.getElementById('eraserPic').style.opacity = "100%";
		document.getElementById('eraser').style.opacity = "100%";
		document.getElementById('cover').style.display = "none";
		canvas.style.zIndex = "1000";
		hideStickers()
		ctx.globalCompositeOperation = "source-over"
		document.getElementById('frontSticker').style.zIndex = "1";
		document.getElementById('backSticker').style.zIndex = "1";
	} else if(type == 'eraser'){
		ctx.globalCompositeOperation = "destination-out"
		document.getElementById('shading').style.zIndex = "0";
		document.getElementById('amaShading').style.zIndex = "0";
		document.getElementById('amaPic').style.zIndex = "8";
		document.getElementById('deckPic').style.zIndex = "8";
		document.getElementById('composite_Image').style.zIndex = "8";
		document.getElementById('sticker').style.opacity = "100%";
		document.getElementById('stickerPic').style.opacity = "100%";
		document.getElementById('eraserPic').style.opacity = "80%";
		document.getElementById('eraser').style.opacity = "80%";
		document.getElementById('pencilPic').style.opacity = "100%";
		document.getElementById('pencil').style.opacity = "100%";
		document.getElementById('bucketPic').style.opacity = "100%";
		document.getElementById('paintBucket').style.opacity = "100%";
		document.getElementById('cover').style.display = "none";
		canvas.style.zIndex = "1000";
		hideStickers()
		document.getElementById('frontSticker').style.zIndex = "1";
		document.getElementById('backSticker').style.zIndex = "1";
	} else if(type == 'sticker'){
		ctx.globalCompositeOperation = "destination-out"
		document.getElementById('shading').style.zIndex = "0";
		document.getElementById('amaShading').style.zIndex = "0";
		document.getElementById('amaPic').style.zIndex = "800";
		document.getElementById('deckPic').style.zIndex = "800";
		document.getElementById('composite_Image').style.zIndex = "8";
		document.getElementById('sticker').style.opacity = "80%";
		document.getElementById('stickerPic').style.opacity = "80%";
		document.getElementById('eraserPic').style.opacity = "100%";
		document.getElementById('eraser').style.opacity = "100%";
		document.getElementById('pencilPic').style.opacity = "100%";
		document.getElementById('pencil').style.opacity = "100%";
		document.getElementById('bucketPic').style.opacity = "100%";
		document.getElementById('paintBucket').style.opacity = "100%";
		document.getElementById('cover').style.display = "initial";
		canvas.style.zIndex = "1";
		showStickers()
		document.getElementById('frontSticker').style.zIndex = '1001';
		document.getElementById('backSticker').style.zIndex = '1002';
	}
}

function resetZ(){
	document.getElementById('downloadButton').style.display = "initial";
	document.getElementById('downloadLink').style.display = "initial";

    document.getElementById('shading').style.zIndex = "1001";
    document.getElementById('amaShading').style.zIndex = "1001";
    document.getElementById('amaPic').style.zIndex = "1001";
    document.getElementById('deckPic').style.zIndex = "1001";
	document.getElementById('frontSticker').style.zIndex = "1001";
	document.getElementById('backSticker').style.zIndex = "1001";

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
	document.getElementById('frontDeck').style.zIndex = '1001';
	document.getElementById('backDeck').style.zIndex = '1001';
}

function drop(ev, location) {
	console.log(currentSticker)
	ev.preventDefault();
	var placedSticker = document.createElement("img")
	var stickerHolder = document.getElementById("toBeScreenshot")
	stickerHolder.appendChild(placedSticker)
	placedSticker.src = "../" + currentSticker + ".svg"
	console.log(location)
	if(location == comingFrom){
		console.log("please work")
		placedSticker.remove()
		var backDeckNumber = document.querySelectorAll("#replace").length
		if(backDeckNumber >= 1){
			console.log('heeheehaha')
			while(backDeckNumber > 1){
				document.getElementById("replace").remove();
				backDeckNumber = backDeckNumber - 1;
			}
			// if(comingFrom == "frontDeck"){
			// 	document.getElementById('replace').setAttribute('id', 'frontDeck')
			// } else if(comingFrom == "backDeck"){
			// 	document.getElementById('replace').setAttribute('id', 'backDeck')
			// }
		}
	} else if(stickerId >= 1){
		if(location == "delete"){
			document.getElementById("replace").remove();
			placedSticker.remove();
			console.log("yeseyut")
		} else {
			if(currentSticker == "tribalDesign"){
				if(comingFrom == "frontDeck"){
					if(stickerOnBack = true){
						var numBackStickers = document.querySelectorAll("#backSticker").length;
						while(numBackStickers>=1){
							var removeStickers = document.getElementById("backSticker").remove();
							numBackStickers = numBackStickers - 1;
						};
					}
					document.getElementById("replace").remove();
					placedSticker.setAttribute("style", " transform: rotate(90deg); position: absolute; width: 2.4vw; height: auto; top: 76.25vh; left: 34vw;")
					placedSticker.setAttribute("id", "backSticker")
					placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'tribalDesign', 'backDeck')")
					placedSticker.setAttribute("ondragover", "allowDrop(event)")
					placedSticker.setAttribute("ondrop", "drop(event, 'backDeck')")
					stickerOnBack = true
					stickerOnFront = false
					document.getElementById('backSticker').style.zIndex = '1002';
				} else if(comingFrom == "backDeck"){
					if(stickerOnFront = true){
						var numFrontStickers = document.querySelectorAll("#frontSticker").length;
						while(numFrontStickers>=1){
							var removeStickers = document.getElementById("frontSticker").remove();
							numFrontStickers = numFrontStickers - 1;
						};
					}
					document.getElementById("replace").remove();
					placedSticker.setAttribute("style", " transform: rotate(95deg); position: absolute; width: 1.65vw; height: auto; top: 77.5vh; left: 78.5%;")
					placedSticker.setAttribute("id", "frontSticker")
					placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'tribalDesign', 'frontDeck')")
					placedSticker.setAttribute("ondragover", "allowDrop(event)")
					placedSticker.setAttribute("ondrop", "drop(event, 'frontDeck')")
					stickerOnFront = true
					stickerOnBack = false
					document.getElementById('frontSticker').style.zIndex = '1001';
				}
			} else if(currentSticker == "turtle"){
				if(comingFrom == "frontDeck"){
					if(stickerOnBack = true){
						var numBackStickers = document.querySelectorAll("#backSticker").length;
						while(numBackStickers>=1){
							var removeStickers = document.getElementById("backSticker").remove();
							numBackStickers = numBackStickers - 1;
						};
					}
					document.getElementById("replace").remove();
					placedSticker.setAttribute("style", " transform: rotate(90deg); position: absolute; width: 2.4vw; height: auto; top: 80vh; left: 34%;")
					placedSticker.setAttribute("id", "backSticker")
					placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'turtle', 'backDeck')")
					placedSticker.setAttribute("ondragover", "allowDrop(event)")
					placedSticker.setAttribute("ondrop", "drop(event, 'backDeck')")
					stickerOnBack = true
					stickerOnFront = false
					document.getElementById('backSticker').style.zIndex = '1002';
				} else if(comingFrom == "backDeck"){
					if(stickerOnFront = true){
						var numFrontStickers = document.querySelectorAll("#frontSticker").length;
						while(numFrontStickers>=1){
							var removeStickers = document.getElementById("frontSticker").remove();
							numFrontStickers = numFrontStickers - 1;
						};
					}
					document.getElementById("replace").remove();
					placedSticker.setAttribute("style", " transform: rotate(95deg); position: absolute; width: 1.6vw; height: auto; top: 80.25vh; left: 78.5%;")
					placedSticker.setAttribute("id", "frontSticker")
					placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'turtle', 'frontDeck')")
					placedSticker.setAttribute("ondragover", "allowDrop(event)")
					placedSticker.setAttribute("ondrop", "drop(event, 'frontDeck')")
					stickerOnFront = true
					stickerOnBack = false
					document.getElementById('frontSticker').style.zIndex = '1001';
				}
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
				if(stickerOnBack = true){
					var numBackStickers = document.querySelectorAll("#backSticker").length;
					while(numBackStickers>=1){
						var removeStickers = document.getElementById("backSticker").remove();
						numBackStickers = numBackStickers - 1;
					};
				}
				placedSticker.setAttribute("style", " transform: rotate(90deg); position: absolute; width: 2.4vw; height: auto; top: 76.25vh; left: 34vw;")
				placedSticker.setAttribute("id", "backSticker")
				placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'tribalDesign', 'backDeck')")
				placedSticker.setAttribute("ondragover", "allowDrop(event)")
				placedSticker.setAttribute("ondrop", "drop(event, 'backDeck')")
				stickerOnBack = true
				document.getElementById('backSticker').style.zIndex = '1002';
			} else if(location == "frontDeck"){
				if(stickerOnFront = true){
					var numFrontStickers = document.querySelectorAll("#frontSticker").length;
					while(numFrontStickers>=1){
						var removeStickers = document.getElementById("frontSticker").remove();
						numFrontStickers = numFrontStickers - 1;
					};
				}
				placedSticker.setAttribute("style", " transform: rotate(95deg); position: absolute; width: 1.65vw; height: auto; top: 77.5vh; left: 78.5%;")
				placedSticker.setAttribute("id", "frontSticker")
				placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'tribalDesign', 'frontDeck')")
				placedSticker.setAttribute("ondragover", "allowDrop(event)")
				placedSticker.setAttribute("ondrop", "drop(event, 'frontDeck')")
				stickerOnFront = true
				document.getElementById('frontSticker').style.zIndex = '1001';
			}
		} else if(currentSticker == "turtle"){
			if(location == "backDeck"){
				if(stickerOnBack = true){
					var numBackStickers = document.querySelectorAll("#backSticker").length;
					while(numBackStickers>=1){
						var removeStickers = document.getElementById("backSticker").remove();
						numBackStickers = numBackStickers - 1;
					};
				}
				placedSticker.setAttribute("style", " transform: rotate(90deg); position: absolute; width: 2.4vw; height: auto; top: 80vh; left: 34%;")
				placedSticker.setAttribute("id", "backSticker")
				placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'turtle', 'backDeck')")
				placedSticker.setAttribute("ondragover", "allowDrop(event)")
				placedSticker.setAttribute("ondrop", "drop(event, 'backDeck')")
				stickerOnBack = true
				document.getElementById('backSticker').style.zIndex = '1002';
			} else if(location == "frontDeck"){
				if(stickerOnFront = true){
					var numFrontStickers = document.querySelectorAll("#frontSticker").length;
					while(numFrontStickers>=1){
						var removeStickers = document.getElementById("frontSticker").remove();
						numFrontStickers = numFrontStickers - 1;
					};
				}
				placedSticker.setAttribute("style", " transform: rotate(95deg); position: absolute; width: 1.6vw; height: auto; top: 80.25vh; left: 78.5%;")
				placedSticker.setAttribute("id", "frontSticker")
				placedSticker.setAttribute("ondragstart", "replaceDrag(event, 'turtle', 'frontDeck')")
				placedSticker.setAttribute("ondragover", "allowDrop(event)")
				placedSticker.setAttribute("ondrop", "drop(event, 'frontDeck')")
				stickerOnFront = true
				document.getElementById('frontSticker').style.zIndex = '1001';
			}
		}
	}
	placedSticker.setAttribute("class", "tribalStickers")
	comingFrom = "home"
	document.getElementById('frontDeck').style.zIndex = '1';
	document.getElementById('backDeck').style.zIndex = '1';
	document.getElementById('frontSticker').style.zIndex = '1001';
	document.getElementById('backSticker').style.zIndex = '1002';
	console.log('stickers')
}

function replaceDrag(ev, type, location){
	currentSticker = type
	console.log(type)
	comingFrom = location
	console.log(comingFrom)
	document.getElementById('frontDeck').style.zIndex = '1001';
	document.getElementById('backDeck').style.zIndex = '1001';
	if(comingFrom == 'frontDeck'){
		var changeId = document.getElementById('frontSticker')
		changeId.setAttribute("id", "replace")
	} else if(comingFrom == 'backDeck'){
		var changeId = document.getElementById('backSticker')
		changeId.setAttribute("id", "replace")
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