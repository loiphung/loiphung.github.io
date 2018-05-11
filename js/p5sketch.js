var object = 0
function setup() {
  createCanvas(windowWidth,windowHeight);
	background(255);

}

function draw() {

	
	if (mouseIsPressed) {
			background(255);
		strokeWeight(7);
		fill(mouseX,mouseY,object);
	rect(pmouseX,pmouseY,65,65);

		}else{
			stroke(mouseX,mouseY,object);
			strokeWeight(mouseX);
		ellipse(mouseX,mouseY,70,70);
		fill(pmouseX,pmouseY,width);

	}
		
}