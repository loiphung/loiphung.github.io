var object = 0
var canvas;
function setup() {
  canvas = createCanvas (windowWidth, windowHeight);
	canvas.position (0, 0);
	canvas.style ('z-index', '-1');
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
	function windowResized(){
		resizeCanvas();
	}
}