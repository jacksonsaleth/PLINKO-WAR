 //Creating Physical World
 var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var division=[];
var divisionHeight=300;
var score =0;
var turn=0;
var particle;
var gameState="PLAY";



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
//Creating Divisions
   for (var k = 0; k <=width; k = k + 80) {
     division.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

//Creating Plinko 
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
   
    
}
 


function draw() {
//Creating Background
  background("black");
//Texting Score
if(turn===6){
  textSize(100);
  text("GAME OVER ! ! !",0,400);
 gamestate !=null;
}
  
fill ("yellow");
  textSize(20);
    text("SCORE : "+score,20,30);
    text("TURN : "+turn,700,30);   
text ("500",25,500);
text ("200",105,500);
text ("300",185,500);
text ("900",265,500);
text ("10",345,500);
text ("700",425,500);
text ("400",505,500);
text ("80",585,500);
text ("800",665,500);
text ("1000",745,500);
 Engine.update(engine);
  
//Displaying the Plinkos
      for (var i = 0; i < plinkos.length; i++) {
        
        plinkos[i].display();
     
      }


 //Displaying Divisions  
      for (var k = 0; k < division.length; k++) {
        
        division[k].display();
      }

   
    if(particle !=null){
       particle.display();
   if(particle.body.position.y>760){
         if(particle.body.position.x>=0&&particle.body.position.x<=80){
                      score=score+500;
                      particle=null;

                      
}
}
}
  
if(particle !=null){
  particle.display();
if(particle.body.position.y>760){
    if(particle.body.position.x>80&&particle.body.position.x<=160){
                 score=score+200;
                 particle=null;

                      
}
}
}

if(particle !=null){
  particle.display();
if(particle.body.position.y>760){
    if(particle.body.position.x>160&&particle.body.position.x<=240){
                 score=score+300;
                 particle=null;

                       
}
}
}
if(particle !=null){
  particle.display();
if(particle.body.position.y>760){
    if(particle.body.position.x>240&&particle.body.position.x<=320){
                 score=score+900;
                 particle=null;

                     
}
}
}
if(particle !=null){
  particle.display();
if(particle.body.position.y>760){
    if(particle.body.position.x>320&&particle.body.position.x<=400){
                 score=score+10;
                 particle=null;

                      
}
}
}
if(particle !=null){
  particle.display();
if(particle.body.position.y>760){
    if(particle.body.position.x>400&&particle.body.position.x<=480){
                 score=score+700;
                 particle=null;

                      
}
}
} 
if(particle !=null){
  particle.display();
if(particle.body.position.y>760){
    if(particle.body.position.x>480&&particle.body.position.x<=560){
                 score=score+400;
                 particle=null;

                       
}
}
} 
if(particle !=null){
  particle.display();
if(particle.body.position.y>760){
    if(particle.body.position.x>560&&particle.body.position.x<=640){
                 score=score+80;
                 particle=null;

                    
}
}
} 
if(particle !=null){
  particle.display();
if(particle.body.position.y>760){
    if(particle.body.position.x>640&&particle.body.position.x<=720){
                 score=score+800;
                 particle=null;
     
}
}
} 
if(particle !=null){
  particle.display();
if(particle.body.position.y>760){
    if(particle.body.position.x>720&&particle.body.position.x<=800){
                 score=score+1000;
                 particle=null;

                      
}
}
} 
}
          

function mousePressed(){
if(gameState !=="END"){
  turn++
particle=new Particle(mouseX,10,10,10);

}
   }
