var cuadro;



function setup() {
  createCanvas(400,400);
cuadro=createSprite(200,200,10,10);
}

function draw() 
{
  background(30);

if (keyDown ("d")){
  cuadro.velocityX = .1;
}
if (keyDown ("a")){
  cuadro.velocityX = -.1;
}
if (keyDown ("w")){
  cuadro.velocityY = -.1;
}
if (keyDown ("s")){
  cuadro.velocityY = .1;
}

  drawSprites();
}




