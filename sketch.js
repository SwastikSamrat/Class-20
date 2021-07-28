var fixedRec , movingRec;

function setup() {
  createCanvas(400,400);
  fixedRec= createSprite(150, 200, 100, 100);
  fixedRec.shapeColor=("blue");
  movingRec = createSprite(300,200,50,50);
  movingRec.shapeColor=("blue");
}

function draw() {
  background("red");  
  movingRec.x=mouseX;
  movingRec.y=mouseY;
  if(movingRec.x-fixedRec.x< fixedRec.width/2+movingRec.width/2
    &&fixedRec.x-movingRec.x< fixedRec.width/2+movingRec.width/2
    && movingRec.y-fixedRec.y< fixedRec.height/2+movingRec.height/2
    &&fixedRec.y-movingRec.y< fixedRec.height/2+movingRec.height/2){
    fixedRec.shapeColor=("yellow");
    movingRec.shapeColor=("yellow"); 
  }
  else{
    fixedRec.shapeColor=("blue");
    movingRec.shapeColor=("blue");
  }
  drawSprites();
}