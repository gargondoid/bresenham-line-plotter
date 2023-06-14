class Button {
	constructor(t,x,y,w,h) {
		this.t=t
		this.x=x
		this.y=y
		this.w=w
		this.h=h
	}
	
	//function to check if the mouse is hovering over the button
	isMouseOn() {
		if (mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h) {return true}
		return false
	}
	
	draw() {
		push()
		stroke(255)
		fill(0)
		rect(this.x,this.y,this.w,this.h)
		pop()
		push()
		textAlign(LEFT)
		textSize(this.h*uiy)
		fill(255)
		text(this.t,this.x+5,this.y+this.h-10)
		pop()
	}
}
