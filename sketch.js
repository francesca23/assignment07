var mic;
var capture;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  mic = new p5.AudioIn();
  mic.start();
  capture = createCapture(VIDEO);
  capture.size(500,375);
  capture.hide();
}

function draw() {
  translate(windowWidth/2-250, windowHeight/2-187.5);
  var myImg = capture.loadPixels();

  for(var i=0; i<100; i++) {
      var x = random(500);
      var y = random(375);
      var c = myImg.get(x,y);
      
      var vol = mic.getLevel();
      var l = map(vol,0,1,1,100);
      
      noStroke();
      fill(c);
      rect(x,y,l,l);
  }
}