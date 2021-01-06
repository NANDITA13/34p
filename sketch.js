var bob1 , bob2 , bob3 , bob4 , bob5;
var sling1 , sling2 , sling3 , sling4 , sling5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {

  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  sling1 = new Sling (pendulum.body, {x:150,y:50});

  sling2 = new Sling (pendulum.body, {x:250,y:50});

  sling3 = new Sling (pendulum.body, {x:350,y:50});

  sling4 = new Sling (pendulum.body, {x:450,y:50});

  sling5 = new Sling (pendulum.body, {x:550,y:50});





  
  canvas = createCanvas (windowWidth /2, windowWidth /1.5);
  engine = Engine.ceate();
  world = engine.world 


  let canvasmouse = Mouse.create (canvas.elt);
  canvasmouse.pixelRatio = pixelDensity ();

  let option = {
    mouse: canvasmouse

  }

  mConstraint = MouseConstraint.create (engine, options);
  world.add(world, mConstraint);


  
}

function draw() {

  background(255,255,255);  
  drawSprites();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function display() { 
    var pointA = this.body.bodyA.position; 
    var pointB = this.body.bodyB.position; 
    var posX = pointB.x + this.offsetX; 
    var posY = pointB.y + this.offsetY; 
    strokeWeight(2); 
    stroke("white"); 
    line (pointA.x, pointA.y,posX,posY); 
    }
