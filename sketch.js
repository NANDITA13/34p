var bob1 , bob2 , bob3 , bob4 , bob5;
var sling1 , sling2 , sling3 , sling4 , sling5;
var pendulum1,peduluml2,pendulum3,pendulum4,pendulum5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {

  canvas = createCanvas (windowWidth /2, windowWidth /1.5);
  engine = Engine.ceate();
  world = engine.world 

  pendulum1 = new Pendulum (150,150);
  pendulum2 = new Pendulum (250,150);
  pendumul3 = new Pendulum (350,150);
  pendumul4 = new Pendulum (450,150);
  pendulum5 = new Pendulum (550,150);


  sling1 = new Sling (pendulum1.body, {x:150,y:50});

  sling2 = new Sling (pendulum2.body, {x:250,y:50});

  sling3 = new Sling (pendulum3.body, {x:350,y:50});

  sling4 = new Sling (pendulum4.body, {x:450,y:50});

  sling5 = new Sling (pendulum5.body, {x:550,y:50});





  
  


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
   
  pendulum1.display();
  pendulum2.display();
  pendumul3.display();
  pendulum4.display();
  pendulum5.display();
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
