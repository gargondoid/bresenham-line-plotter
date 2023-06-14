class Display {
	constructor(oX,oY) {
		this.oX=oX
		this.oY=oY
		// this.clear=new Button("clear",(oX/2)-72.5,250*buttonScaleFactor,145*buttonScaleFactor,60*buttonScaleFactor)
		// this.mode=new Button("mode",(oX/2)-80,450*buttonScaleFactor,160*buttonScaleFactor,60*buttonScaleFactor)
		this.clear=new Button("clear",(oX/2)-(72.5*uix),250*uiy,145*uix,60*uiy)
		this.mode=new Button("mode",(oX/2)-(80*uix),450*uiy,160*uix,60*uiy)
	}
	
	clickOnButtons() {
		if(this.clear.isMouseOn()) {grid.clear()}
		if(this.mode.isMouseOn()) {grid.cycleMode()}
	}
	
	draw() {
		
		push()
		fill(255)
		textSize(50*uiy)
		textAlign(CENTER)
		text("Line Plotter w/ Bresenham's Line Algorithm",(windowWidth/2),60*uiy)
		pop()

		push()
		fill(255)
		textSize(25*uiy)
		textAlign(CENTER)
		text("By: Ayush Thoren",(windowWidth/2),90*uiy)
		pop()
		
		if(!userHasInteracted) {
			push()
			fill("rgba(255,255,255,0.75)")
			textSize(80*uiy)
			textAlign(CENTER)
			text("click multiple points\nto get started",(windowWidth/2),((windowHeight/2)-(40*uiy)))
			pop()
		}
		
		push()
		fill(255)
		textSize(40*uiy)
		textAlign(LEFT)
		text(ms+" ms",10*uix,90*uiy)
		pop()
		
		push()
		fill(255)
		textSize(40*uiy)
		textAlign(LEFT)
		text(round(1000/deltaTime,1)+" fps",10*uix,40*uiy)
		pop()
		
		push()
		fill(255)
		textSize(20*uiy)
		textAlign(LEFT)
		text(grid.on.length+" points",((this.oX/2)-(72.5*uix)),320*uiy,145*uix,60*uiy)
		pop()
		
		push()
		fill(255)
		textSize(20*uiy)
		textAlign(LEFT)
		text(grid.mode,((this.oX/2)-(80*uix)),520*uiy,160*uix,60*uiy)
		pop()
		
		this.clear.draw()
		this.mode.draw()
	}
}
