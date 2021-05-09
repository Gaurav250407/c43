var hr,sec,min;
var sc_hr,sc_min,sc_sec;

function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(0);  
  
  hr = hour();
  sec=second();
  min = minute();

  sc_sec = map(sec,0,60,0,360)
  sc_min = map(min,0,60,0,360)
  sc_hr = map(hr%12,0,12,0,360)

  textAlign(CENTER);
  fill(255);
  textSize(20)
  text("12",600,120);
  text("3",780,300);
  text("6",600,480);
  text("9",410,300);

  translate(600,300)
  rotate(-90)
  push()
  rotate(sc_sec)
  stroke(255,0,0)
  strokeWeight(10)
  line(0,0,160,0)
  pop()

  push()
  rotate(sc_min)
  stroke(0,255,0)
  strokeWeight(10)
  line(0,0,140,0)
  pop()

  push()
  rotate(sc_hr)
  stroke(0,0,255)
  strokeWeight(10)
  line(0,0,110,0)
  pop()

noFill();
stroke(255,0,0)
strokeWeight(10);
arc(0,0,480,480,0,sc_sec)
strokeWeight(7);
stroke(0,255,0)
arc(0,0,450,450,0,sc_min)
strokeWeight(7);
stroke(0,0,255)
arc(0,0,430,430,0,sc_hr)



  drawSprites();

}