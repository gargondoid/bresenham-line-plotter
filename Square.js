class Square {
	constructor(x,y,s) {
		//x and y coords
		this.x=x
		this.y=y
		//size
		this.s=s
		//color presets
		this.onc=255
		this.midc=127.5
		this.offc=0
		//color
		// this.c=random(0,255)
		this.c=0
	}
	
	//function to change the state of the square (on, off, etc)
	changeState(st) {
		if(st=="on") {this.c=this.onc}
		if(st=="mid") {this.c=this.midc}
		if(st=="off") {this.c=this.offc}
	}
	
	//function to check if the mouse is hovering over the square
	isMouseOn() {
		if (mouseX-offsetX >= this.x && mouseX-offsetX <= this.x + this.s && mouseY-offsetY >= this.y && mouseY-offsetY <= this.y + this.s) {return true}
		return false
	}
	
	//function to fill in the square if the mouse is on it
	toggleIfMouseOn() {
		if(this.isMouseOn()) {this.changeState("on")}
	}
	
	draw() {		
		push()
		noStroke()
		fill(this.c)
		square(this.x,this.y,this.s)
		pop()
	}
}
