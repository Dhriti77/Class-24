const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
Box1 = new Box(700,320,70,70)
Box2 = new Box(900,320,70,70)
Box3 = new Box(700,240,70,70)
Box4 = new Box(900,240,70,70)
Box5 = new Box(800,160,70,70)

log1 = new Log(800,260,300,PI/2)
log2 = new Log(800,180,300,PI/2)
log3 = new Log(755,120,150,PI/7)
log4 = new Log(865,120,150,-PI/7)

pig1 = new Pig(800,350)
pig2 = new Pig(800,220)

bird = new Bird(100,100)

ground = new Ground(600,400,1200,25)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    Box1.display()
    Box2.display()
    Box3.display()
    Box4.display()
    Box5.display()

    log1.display()
    log2.display()
    log3.display()
    log4.display()

    pig1.display()
    pig2.display()

    bird.display()

    ground.display()
}