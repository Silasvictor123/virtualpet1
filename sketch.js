//Create variables here
var dog;
var dogImg;
var happydogImg;
var database;
var foodS;
var foodStock;

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  happydogImg = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20)
  dog.addImage(dogImg)
  dog.scale=0.3;
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  
}


function draw() {  
background(46,139,87)
  drawSprites();
  textSize(15)
  fill("red")
  text(foodS,100,100)
 
  //add styles here

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogImg)
  }

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  } else {
    x=x-1;
  }
     
      database.ref('/').update({
        Food:x
      })

}

