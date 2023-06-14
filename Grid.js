class Grid {
	constructor(w,h,sd) {
		//mode for connecting lines (connect all, last two, or pairs)
		this.mode="all"
		//width & height of the graph
		this.w=w
		this.h=h
		//width & height of the graph in squares
		this.gw=floor(w/sd)
		this.gh=floor(h/sd)
		//dimensions of each square
		this.sd=sd
		//array to hold all of the squares in the grid
		this.squares=[]
		//array to hold all of the squares that are "on"
		this.on=[]
		//array to hold all of the lines that have already been plotted so there isn't repitition
		this.done=[]
		//create the squares
		this.createSquares()
	}
	
	clear() {
		this.squares.forEach(row=>{
			row.forEach(square=>{
				square[0].changeState("off")
				square[1]="off"
				this.on=[]
				this.done=[]
			})
		})
	}
	
	cycleMode() {
		if(this.mode=="all") {this.mode="last"}
		else if(this.mode=="last") {this.mode="pairs"}
		else if(this.mode=="pairs") {this.mode="all"}
	}
	
	createSquares() {
		//for each row
		for(let y=0; y<this.h; y+=this.sd) {
			this.squares.push([])
			//for each column (one row at a time)
			for(let x=0; x<this.w; x+=this.sd) {
				//add the squares
				this.squares[this.squares.length-1].push([new Square(x,y,this.sd),"off",x/this.sd,y/this.sd])
			}
		}
	}
	
	//function to tell the squares to check if the mouse has clicked on them
	//will be called with function mouseClicked() or mousePressed() or etc in mySketch
	clickOnSquares() {
		//UNOPTIMIZED, goes through entire array just for one detection
		// let hasBeenClicked=false
		// this.squares.forEach(row=>{
		// 	row.forEach(square=>{
		// 		if(square[0].isMouseOn() && !hasBeenClicked) {
		// 			square[0].changeState("on")
		// 			square[1]="on"
		// 			this.on.push([square[2],square[3]])
		// 			hasBeenClicked=true
		// 		}
		// 	})
		// })
		
		//OPTIMIZED, gets square's index directly from the mouse position
		//hasBeenClicked prevents a bug where two squares can be clicked at once
		let hasBeenClicked=false
		let mouseXFloored=floor((mouseX-offsetX)/this.sd)
		let mouseYFloored=floor((mouseY-offsetY)/this.sd)
		//Make sure the mouse is within bounds
		if(0<=mouseXFloored && mouseXFloored<this.gw) {
			if(0<=mouseYFloored && mouseYFloored<this.gh) {
				//get the square and perform the operations
				let square=this.squares[mouseYFloored][mouseXFloored]
				if(!hasBeenClicked) {
					square[0].changeState("on")
					square[1]="on"
					//x coord, y coord, has it been plottet yet (to fix mode compatibilities)
					this.on.push([square[2],square[3],false])
					hasBeenClicked=true
				}
			}
		}
	}
	
	//Bresenham's Algorithm!
	bresenham(c1,c2) {
		let incX=Math.sign(c2[0]-c1[0])
		let dX=Math.abs(c2[0]-c1[0])

		let incY=Math.sign(c2[1]-c1[1])
		let dY=Math.abs(c2[1]-c1[1])

		let XaY=dX>dY
		let cmpt=Math.max(dX,dY)
		let incD=-2*Math.abs(dX-dY)
		let incS=2*Math.min(dX,dY)

		let err=incD+cmpt
		let X=c1[0]
		let Y=c1[1]

		while(cmpt>=0) {
			if(this.squares[Y][X][1]=="off") {this.squares[Y][X][0].changeState("mid")}
			cmpt-=1
			if(err>=0 || XaY) {X+=incX}
			if(err>=0 || !XaY) {Y+=incY}
			if(err>=0) {err+=incD}
			else {err+=incS}
		}
	}
	
	//function to plot the lines according to the mode the graph is on
	//(all possible combinations, last two, or pairs)
	plotLines() {
		if(this.mode=="all") {
			this.on.forEach(p1=>{
				this.on.forEach(p2=>{
					// if(!([p1,p2] in this.done) && !([p2,p1] in this.done)) {
					if((!p1[2]) && (!p2[2])) {
						this.bresenham(p1,p2)
						// this.done.push([p1,p2])
					}
				})
			})
		}
		
		let onl=this.on.length
		if(this.mode=="last" && onl>=2) {
			let p1=this.on[onl-2]
			let p2=this.on[onl-1]
			// if(!([p1,p2] in this.done) && !([p2,p1] in this.done)) {
			if((!p1[2]) && (!p2[2])) {
				this.bresenham(p1,p2)
				p1[2]=true
				// this.done.push([p1,p2])
			}
		}
		
		if(this.mode=="pairs" && onl>=2 && onl%2==0) {
			let p1=this.on[onl-2]
			let p2=this.on[onl-1]
			// if(!([p1,p2] in this.done) && !([p2,p1] in this.done)) {
			if((!p1[2]) && (!p2[2])) {
				this.bresenham(p1,p2)
				p1[2]=true
				p2[2]=true
				// this.done.push([p1,p2])
			}
		}
		
		// this.on.forEach(p1=>{
		// 	this.on.forEach(p2=>{
		// 		this.done.push([p1,p2])
		// 	})
		// })
	}
	
	draw() {
		this.squares.forEach(row=>{
			row.forEach(square=>{
				square[0].draw()
			})
		})
	}
}
