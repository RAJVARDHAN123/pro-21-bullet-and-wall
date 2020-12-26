//----------------------------------------------------------------------
//creating sprite for bullet and wall
var bullet, wall;
//creating thickness, speed and weight
var thickness,speed,weight;
//----------------------------------------------------------------------


function setup() {
  //creating canvas of 1600 width and 400 length
  createCanvas(1600, 400);

  //making bullet sprite
  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "white";

  //making wall sprite
  wall = createSprite(1000,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  //making speed random from 223 to 321
  speed = random(223,321);

  // making weight random 30 to 52
  weight = random(30,52);

  // making thickness random 22 to 83
  thickness = random(22,83);

}

//----------------------------------------------------------------------
function draw() {

  //assigning function

  // making background black
  background(0);

  //making bullet velocity equal to speed
  bullet.velocityX = speed;

  //-------------------------------------------------------------------------
  //assigning work to has collided function
if(hasCollided(bullet,wall))
{

  // creating damage with its formula
var damage = 0.5*speed*speed*weight/(thickness *thickness*thickness);

//making bullet velocity to 0 after touching wall
bullet.velocityX = 0;

// changing color to red if damage is greater than 10
if(damage > 10){
 wall.shapeColor = color(255,0,0);
}

// changing color to green if damage is less than 10
if(damage < 10){
  wall.shapeColor = color(0,255,0)
}

  }
  //-------------------------------------------------------------------------------
 
  drawSprites();
}


// creating hasscollided function
function hasCollided(bullet,wall){

bulletRightEdge = bullet.x + bullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge >= wallLeftEdge){
return true;
}
return false;
}