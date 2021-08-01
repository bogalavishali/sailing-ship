
function preload(){

  seaImg = loadAnimation("sea.png");
  shipImage1 =  loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");

}

function setup(){
  createCanvas(400,400);
  
  //create ship sprite
   shipImage1 = createSprite(10,20,20,50);
   shipImage1.addImage("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
   shipImage1.velocityX = -4;
   shipImage1.scale = 4;


}

function draw() {
  background(0);


  sea.png = createSprite(50,160,20,50);
  sea.png.addImage(seaImg);
  


  //rest background
  if(sea.x < 0){
    sea.x = sea.width/2;
  }




  drawSprites();
 
}