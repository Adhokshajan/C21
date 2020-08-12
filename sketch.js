var bullet,wall;
var thichness,speed,weight;



function setup() {
  createCanvas(1600,400);
  thichness = random(22,83)
  speed = random(223,321);
  weight = random(30,52);
   bullet = createSprite(50, 200, 50, 50);
   bullet.velocityX = speed;
   bullet.shapeColor = color(255);

   wall = createSprite(1200,200,thichness,height/2);
   wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0); 
  
  if(hascollided(bullet,wall)){
    bullet.velocityX = 0 ;
    var damage = 0.5*weight*speed*speed/(thichness*thichness*thichness);
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10  ){
      wall.shapeColor = color(0,255,0);
    } 

   
  }
  
  drawSprites();
}

function hascollided(Lbullet,Lwall){

  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}