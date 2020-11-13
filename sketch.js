const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   ball = new Paper(200,200); 
   rope = new Rope(ball.body, {x:200,y:100} );
   ground = new Ground(200,380,400,40);
   box1 = new Box(300, 340,40,40);
   box2 = new Box(300, 340,40,40);
   box3 = new Box(300, 320,40,40);
   box4 = new Box(300, 300,40,40);
   box5 = new Box(300, 280,40,40);

}

function draw(){
    background(255);
    Engine.update(engine);
    rope.display();
    ball.display();
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

}
function mouseDragged()
{
   Matter.Body.setPosition(ball.body, {x : mouseX,y : mouseY})
}