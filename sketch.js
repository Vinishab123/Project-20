var bg,bgImage;
var cat,catImg,catImg2;
var mouse,mouseImg;
var gameoverImg
function preload() {
    //load the images here
bgImage=loadImage("images/garden.png");
catImg=loadImage("images/cat2.png");
mouseImg=loadImage("images/mouse1.png");

gameoverImg=loadImage("images/gameover.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(200,300,20,20)
    bg.scale=1.8;
    bg.addImage(bgImage);
       
cat = createSprite(450,350,20,20);
cat.scale=0.1
cat.addImage(catImg);

mouse = createSprite(200,350,20,20);
mouse.scale=0.05
mouse.addImage(mouseImg)
mouse.velocityX=0


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(frameCount % 60 == 0){
    mouse.x = Math.round(random(100,800));
    mouse.y = Math.round(random(350,600));
    }
    if (keyDown("left"))
{
    cat.velocityX = -2;
    cat.velocityY = 0
    
}
if (keyDown("right"))
{
    cat.velocityX = 2;
    cat.velocityY = 0;
}
if (keyDown("up"))
{
    cat.velocityY = -2;
    cat.velocityX = 0;

}
if (keyDown("down"))
{
    cat.velocityY = 2;
    cat.velocityX = 0;
}

if(cat.isTouching(mouse)){

bg.addImage(gameoverImg);

cat.velocityY = 0;
cat.velocityX = 0;
cat.scale=0;
mouse.scale=0;

}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyDown("space"))
  {
      
  
  }

}
