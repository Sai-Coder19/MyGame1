const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var ground,bg;
var Startbutton,StartbuttonIMG,message;
var spaceBg,spaceBgIMG;
var gamestate="start";
var mercury,mercuryIMG,venus,venusIMG,earth,earthIMG,mars,marsIMG,jupitar,jupitarIMG,saturn,saturnIMG,uranus,uranusIMG,neptune,neptuneIMG;

function preload(){
    bg=loadImage("images/background.jpg")
    StartbuttonIMG=loadImage("images/StartButton.png")
    spaceBgIMG=loadImage("images/Space.png");

    mercuryIMG=loadImage("images/Mercury.png");
    venusIMG=loadImage("images/Venus.png");
    earthIMG=loadImage("images/Earth.png");
    marsIMG=loadImage("images/Mars.png");
    jupitarIMG=loadImage("images/Jupitar.png");
    saturnIMG=loadImage("images/Saturn.png");
    uranusIMG=loadImage("images/Uranus.png");
    neptuneIMG=loadImage("images/Neptune.png");
}

function setup(){
    var canvas = createCanvas(2000,1000);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(1500,height,3000,20);
    Startbutton=createSprite(width/2,height/2,100,50);
    Startbutton.addImage(StartbuttonIMG);
    spaceBg=createSprite(0,0,width,height);
    spaceBg.addImage(spaceBgIMG);
    spaceBg.visible=false;

    mercury=createSprite(120,255)
    mercury.addImage(mercuryIMG)
    mercury.visible=false
    mercury.scale=0.4;

    venus=createSprite(431,255)
    venus.addImage(venusIMG)
    venus.visible=false
    venus.scale=0.25;

    earth=createSprite(742,255)
    earth.addImage(earthIMG)
    earth.visible=false
    earth.scale=0.6;

    mars=createSprite(631,555)
    mars.addImage(marsIMG)
    mars.visible=false
    mars.scale=0.25;
}

function draw(){
    background(bg);
    text(mouseX+","+mouseY,mouseX,mouseY);
    Engine.update(engine);
    if(gamestate==="start"){
        textSize(30);
        fill("White")
        text("Earth has been destroyed and you are the last one left.",10,240);
        text("However all hope is not lost.Travel to each planet and",10,280)
        text("complete the task that the Space Wizard gives you.",10,320);
        text("Succeed to complete the tasks and Earth will be restored.",10,360);
        text("Good luck your our last hope!",10,400);
        textSize(80);
        fill("Blue")
        text("JOURNEY THROUGH SPACE",400,100);
        
        if(mousePressedOver(Startbutton)){
            spaceBg.visible=true;
            spaceBg.scale=2.5;
            gamestate="play";
        }
    }
   if(gamestate==="play"){
       mercury.visible=true;
       venus.visible=true;
       earth.visible=true;
       mars.visible=true;
    }
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function keyPressed(){}