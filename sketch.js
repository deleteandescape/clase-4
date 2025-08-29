var x = 0;
var y = 0;
var canvas; 

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("cuerpo");
  canvas.position(0,0);
  canvas.style('z-index','-1');
  noStroke();
 frameRate(12);
}

function draw() {
   colorMode(HSB, 360, 100, 100, 100);

  let s = map(mouseY, 0, windowHeight, 0, 100);
  background(map(mouseX, 0, windowWidth, 0, 359), s, 100);
 x = lerp(x, mouseX, 0.1);
 y = lerp(y, mouseY, 0.1)
 fill("white");
 textSize(random (10,25));
 text("👾",x,y); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}