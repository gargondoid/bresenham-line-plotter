class GridBg {
	constructor(w,h,sd) {
		//width & height of the graph
		this.w=w
		this.h=h
		//dimensions of each square
		this.sd=sd
		//array to hold the properties of each line
		this.lines=[]
		//create the grid lines
		this.createLines(sd)
	}
	
	//function to get the coordinates of each line with a distance of ld between each line
	createLines(ld) {
		//horizontal lines (constant x)
		for(let x=0; x<=this.w; x+=ld) {this.lines.push([x,0,x,this.h])}
		//vertical lines (constant y)
		for(let y=0; y<=this.h; y+=ld) {this.lines.push([0,y,this.w,y])}
	}
	
	draw() {
		this.lines.forEach(l=>{
			push()
			strokeWeight(1)
			stroke(150)
			line(l[0],l[1],l[2],l[3])
			pop()
		})
	}
}
