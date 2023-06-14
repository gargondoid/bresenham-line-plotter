let userHasInteracted=false
let ms=0

//width/height of each square of the grid; canvas width and height should be divisible by this
let squareSize=20

//variable for the display class that shouws the text and stuff
let display

//variables to hold the grid related classes
let gridBg
let grid

//not actual canvas dimensions, just those in terms of the graph
//edit these based on the user's screen size (in setup())
let canvasW=1280
let canvasH=720

let uix
let uiy

//variables to hold the offset of the graph when translating the graph (also used to artificially offset the mouse position when detecting clicks)
let offsetX
let offsetY

function setup() {
	uix=windowWidth/1879
	uiy=windowHeight/958
	
	canvasW=squareSize*floor((canvasW*uix)/squareSize)
	canvasH=squareSize*floor((canvasH*uiy)/squareSize)
	
	createCanvas(windowWidth,windowHeight);
	background(0);
	
	//initialize the offsets for translating the graph
	offsetX=(windowWidth-canvasW)/2
	offsetY=((windowHeight-canvasH)/2)+50
	
	display=new Display(offsetX,offsetY)
	
	gridBg=new GridBg(canvasW,canvasH,squareSize)
	
	grid=new Grid(canvasW,canvasH,squareSize)
	
	// noLoop()
}

function mousePressed() {
	startTime=millis()
	
	userHasInteracted=true
	
	display.clickOnButtons()
	
	grid.clickOnSquares()
	grid.plotLines()
	
	//Measure how long the calculations took
	ms=round(millis()-startTime,1)
	
	// redraw()
}

function draw() {
	background(0)
	
	push()
	translate(offsetX,offsetY)
	
	grid.draw()
	gridBg.draw()
	pop()
	
	//text elements
	display.draw()
}