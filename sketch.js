const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var tower,ground,cannon,cannonBall;

function preload(){
    backgroundImg=loadImage("./assets/background.gif");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angle=-PI/4;
    
    tower=new Tower(150,350,160,310);;
    ground=new Ground(0,height-1,width*2,1)
    cannon=new Cannon(180,110,100,50,angle)
    cannonBall=new CannonBall(cannon.x,cannon.y)
}

function draw(){
    background(189);
    image(backgroundImg,0,0,this.width,this.height);
    Engine.update(engine);
    tower.display();
    ground.display();
    cannon.display();
    cannonBall.display();
   
}
function keyReleased(){
    if(keyCode === DOWN_ARROW){
        cannonBall.shoot();
    }
}
