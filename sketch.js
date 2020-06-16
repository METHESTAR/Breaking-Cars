var speed;
var weight;
var bullet,damage,wall;
var thickness;
var minigun1,minigun2;


function setup() {
  createCanvas(1600,400);
  minigun1=createSprite(100,200,70,30);
  minigun2=createSprite(85,220,20,40);
  wall= createSprite(1200, 200, thickness, height/2);
  bullet=createSprite(50,200,50,30);
  bullet.shapeColor=("white");
  speed=random(223,231);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX=speed;
 
}

function draw() {
  background(0);  
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
    var damage=weight*speed*0.5*speed/thickness*thickness*thickness;
    if(damage>10){
      wall.shapeColor="green";
    }
    if(damage<10  ){
      wall.shapeColor="red";
    }
   
  }
 
  drawSprites();
  
}