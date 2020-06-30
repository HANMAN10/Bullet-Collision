var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, 200);

  bullet = createSprite(50, 200, 30, 10);
  bullet.shapeColor = "white";

}

function draw() {
  background(0, 0, 0);  

  // Color of wall
  wall.shapeColor = color(80, 80, 80);

  // Bullet velocity
  bullet.velocityX = speed;

  if(wall.x - bullet.x < (bullet.width + wall.width/2)) {

    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness );

    if(damage < 10) {
    
      bullet.shapeColor = "green";

    }

    if(damage > 10) {
      
      bullet.shapeColor = "red";

    }

  }

  drawSprites();
}