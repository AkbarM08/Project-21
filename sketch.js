var speed, weight, wall, bullet, impact;

function setup() {
  createCanvas(800, 400);
  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));
  textSize(20);
  bullet = createSprite(100, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = ("white");
  thickness = Math.round(random(22, 80));
  fill(80,80,80);
  wall = createSprite(700, 200, thickness, height/2);
  impact = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  console.log(impact);
}

function draw() {
  background("lightGray");  
  bullet.collide(wall);
  
  if(bullet.x>635 && impact>10){
    wall.shapeColor=("red");
  }
  if(bullet.x>635 && impact<10){
    wall.shapeColor=("green");
  }
  text("Speed: "+speed, 20, 25);
  text("Weight: "+weight, 140, 25);
  text("Thickness: "+thickness, 250, 25);
  
  drawSprites();
}