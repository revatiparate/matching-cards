var bg,bg2,form,system,code,security;
var treasure;
var score=0,score2=0;
var click=0;
var restart,restartImg;
var substate=0;
var c1,c2,c3,c4,c5,c6;
var c1Img,c2Img,c3Img;
var card1,card2,card3,card4,card5,card6;

var a=0,b=0,c=0,d=0,e=0,f=0;
var x1=1, x2=1, x3=1, x4=1, x5=1, x6=1;
var ca=0, cb=0, cc=0, cd=0, ce=0, cf=0;
var cardImg,gamestate=1;


function preload() {
  cardImg = loadAnimation("images/card.png");
  key = loadImage("images//key.png");
  bg= loadImage("images/aladdin_cave.jpg");
  bg2= loadImage("images/aladdin_cave2.jpg");
  treasure= loadImage("images/treasure.jpg");
  c1Img= loadAnimation("images/1.png");
  c2Img= loadAnimation("images/2.png");
  c3Img= loadAnimation("images/3.png");
  restartImg= loadImage("images/restart1.png")

}

function setup() {
  createCanvas(1000,500);
  security = new Security();
  system = new System();

  restart= createSprite(500,250,50,50);
  restart.addImage(restartImg);
  restart.scale=0.4;
  restart.visible=false;

c1 = createSprite(300,100,40,70);
c1.addAnimation("c1i",cardImg);
c1.scale=0.1;
//c1.shapeColor='YELLOW';
c1.visible=false;

c2 = createSprite(500,100,40,70);
c2.addAnimation("c2i",cardImg);
c2.scale=0.1;
//c2.shapeColor='GREEN';
c2.visible=false;

c3 = createSprite(700,100,40,70);
c3.addAnimation("c3i",cardImg);
c3.scale=0.1;
//c3.shapeColor='PINK';
c3.visible=false;

c4 = createSprite(300,400,40,70);
c4.addAnimation("c4i",cardImg);
c4.scale=0.1;
//c4.shapeColor='BLUE';
c4.visible=false;

c5 = createSprite(500,400,40,70);
c5.addAnimation("c5i",cardImg);
c5.scale=0.1;
//c5.shapeColor='RED';
c5.visible=false;

c6 = createSprite(700,400,40,70);
c6.addAnimation("c6i",cardImg);
c6.scale=0.1;
//c6.shapeColor='BLACK';
c6.visible=false;
 
}


function draw() {
 
  if(gamestate===1) {
  background(bg);

  clues();
  security.display();
  textSize(30);
  fill("white");
  text("Score: " + score, 850, 50);

  if(score === 5 ) {
    clear()
  

    background(bg2)
    c1.visible=true;
    c2.visible=true;
    c3.visible=true;
    c4.visible=true;
    c5.visible=true;
    c6.visible=true;

if(mousePressedOver(c1) && x1===1){
  c1.addAnimation("c1i",c1Img);
c1.scale=0.1;
a=1;
click++
x1=0;


}

if(mousePressedOver(c2) && x2===1){
  c2.addAnimation("c2i",c2Img);
  c2.scale=0.1;
  b=1;
  click++
  x2=0;
 
  }

if(mousePressedOver(c3) && x3===1){ 
  c3.addAnimation("c3i",c2Img);
  c3.scale=0.1;
  c=1;
  click++
  x3=0;
 
  }

if(mousePressedOver(c4) && x4===1){ 
  c4.addAnimation("c4i",c3Img);
  c4.scale=0.1;
  d=1;
  click++
  x4=0;
 

  }

  if(mousePressedOver(c5) && x5===1){ 
    c5.addAnimation("c5i",c1Img);
    c5.scale=0.1;
    e=1;
    click++
    x5=0;
    
    }
  
if(mousePressedOver(c6) && x6===1){
  c6.addAnimation("c6i",c3Img);
  c6.scale=0.1;
  f=1;
  click++
  x6=0;
 
   }

   if(a===1 && e===1 ){
    c1.visible=false;
    c5.visible=false;
    if(ca===0 && ce===0)
    {
    score2=score2+1;
    ca=1;
    ce=1
    }
  }
  

   if(b===1 && c===1 ){
    c2.visible=false;
    c3.visible=false;
    if(cb===0 && cc===0)
    {
    score2=score2+1;
    cb=1;
    cc=1
    }
  }
   
    if(d===1 && f===1){
    c4.visible=false;
    c6.visible=false;
    if(cd===0 && cf===0)
    {
    score2=score2+1;
    cd=1;
    cf=1
    }
  
  }


   console.log(click)

if( score2 ===3){
  c1.visible=false;
  c2.visible=false;
  c3.visible=false;
  c4.visible=false;
  c5.visible=false;
  c6.visible=false;
  text("Passed",200,200);
}

  if ((click===2 && score2 !== 1) ||(click===4 && score2 !==2) ||(click===6 && score2 !== 3)  )
  { 
    c1.visible=false;
    c2.visible=false;
    c3.visible=false;
    c4.visible=false;
    c5.visible=false;
    c6.visible=false;
      text("Failed",200,200);
      restart.visible=true;
      if(mousePressedOver(restart)){ 
        gameRestart() 
        }
  }

  fill("black")
  textSize(30);
  text("Match the cards !!",30,30)
  textSize(35);
  text("Score "+ score2,850,30);
  }

  }


  drawSprites()
  
}


function gameRestart() {
  a=0;b=0;c=0;d=0;e=0;f=0;
  x1=1; x2=1; x3=1; x4=1; x5=1; x6=1;
  ca=0; cb=0; cc=0; cd=0; ce=0, cf=0;
  click=0;
  score2=0;
 
  c1.addAnimation("c1i",cardImg);
  c2.addAnimation("c2i",cardImg);
  c3.addAnimation("c3i",cardImg);
  c4.addAnimation("c4i",cardImg);
  c5.addAnimation("c5i",cardImg);
  c6.addAnimation("c6i",cardImg);
  c1.visible=true;
  c2.visible=true;
  c3.visible=true;
  c4.visible=true;
  c5.visible=true;
  c6.visible=true;
  restart.visible=false;
}
  


