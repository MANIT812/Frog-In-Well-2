var monkey,monkeyimg,rope,ropeimg;
var well,wellimg,rect1,shed,shed1,rope2,ropepic;
var numberline,numberline1,que1,queimg,next,nextimg;
var gameState="statement";
var cover,cover1,cover3,positive,positiveimg,negative,negativeimg;
var or,orimg;
var key1,key1img,key2,key2img,key3,key3img,key4,key4img,key5,key5img,key6,key6img,key7,key7img,key8,key8img,key9,key9img,key0,key0img;
var tryagain,tryimg;
var cover4;
var keyscore=-1;
var keyclicked,keyclicked1,retry,retryimg;
var retry1,retryimg1;
var cover5,cover6;
var oops,oopsimg,restart,restartimg;
var cover7,tick,tickimg,cross,crossimg;
var alltimesound;
function preload(){
  monkeyimg=loadImage("monkey.jpg");
  ropeimg=loadImage("rope.jpg");
  wellimg=loadImage("well.jpg");
  shed1=loadImage("shed.jpg");
  ropepic=loadImage("rope2.jpg");
  numberline1=loadImage("numberline.jpg");
  queimg=loadImage("question.jpg");
  nextimg=loadImage("next.jpg");
  negativeimg=loadImage("-ve.jpg");
  positiveimg=loadImage("+ve.jpg");
  orimg=loadImage("or.jpg");
  key1img=loadImage("key1.jpg");
  key2img=loadImage("key2.jpg");
  key3img=loadImage("key3.jpg");
  key4img=loadImage("key4.jpg");
  key5img=loadImage("key5.jpg");
  key6img=loadImage("key6.jpg");
  key7img=loadImage("key7.jpg");
  key9img=loadImage("key9.jpg");
  key0img=loadImage("0key.jpg");
  key8img=loadImage("key8.jpg");
  tryimg=loadImage("TRY AGAIN.jpg");
  keyclicked=loadImage("keyclicked.jpg");
  retryimg=loadImage("Quiz Over.jpg");
  retryimg1=loadImage("retry.jpg");
  oopsimg=loadImage("oops.jpg");
  restartimg=loadImage("restart.jpg");
  tickimg=loadImage("correct.jpg");
  crossimg=loadImage("wrong.jpg");
  alltimesound=loadSound("gameSound.mp3");
}
function setup() {
  createCanvas(800,1500);

 }
function draw() {
  if(gameState==="statement"){
    background("lightgreen");
    que1=createSprite(280,300,20,20);
    que1.addImage(queimg);
    next=createSprite(280,500,20,20);
    next.addImage(nextimg);
    que1.scale=0.6;
    if(mousePressedOver(next)){
      gameState="sign";
    }
  }
  if (gameState==="sign"){
    background("black");
    cover1=createSprite(400,750,800,1500);
    cover1.shapeColor="lightgreen";
    positive=createSprite(230,400,20,20);
    positive.addImage(positiveimg);
    negative=createSprite(370,400,20,20);
    negative.addImage(negativeimg);
    or=createSprite(300,400,20,20);
    or.addImage(orimg);
    next.destroy();
    que1.destroy();
    if(mousePressedOver(positive)){
      gameState="display";
    }
    else if(mousePressedOver(negative)){
      gameState="wrong";
      cover4=createSprite(400,750,800,1500);
      cover4.shapeColor="lightgreen";
    }
  }
  if(gameState==="display"){
    background("lightgreen");
     alltimesound.loop();
  cover=createSprite(400,750,800,1500);
  cover.shapeColor="lightgreen";
  rect1=createSprite(330,1000,315,1000);
  rect1.shapeColor="black";
  monkey=createSprite(320,1000,50,50);
  monkey.addImage(monkeyimg);
  monkey.scale=0.3;
  rope=createSprite(300,1080,1000,80);
  rope.addImage(ropeimg);
  well=createSprite(330,600,200,200);
  well.addImage(wellimg);
  well.scale=0.4;
  shed=createSprite(330,250);
  shed.addImage(shed1);
  shed.scale=0.75;
  rope2=createSprite(315,315);
  rope2.addImage(ropepic);
  rope2.scale=0.8;
  numberline=createSprite(30,750);
  numberline.addImage(numberline1);
  numberline.scale=1.7;
  key1=createSprite(580,250,50,20);
  key1.addImage(key1img);
  key2=createSprite(650,250,50,20);
  key2.addImage(key2img);
  key3=createSprite(720,250,50,20);
  key3.addImage(key3img);
  key4=createSprite(580,320,50,20);
  key4.addImage(key4img);
  key5=createSprite(650,320,50,20);
  key5.addImage(key5img);
  key6=createSprite(720,320,50,20);
  key6.addImage(key6img);
  key7=createSprite(580,390,50,20);
  key7.addImage(key7img);
  key8=createSprite(650,390,50,20);
  key8.addImage(key8img);
  key9=createSprite(720,390,50,20); 
  key9.addImage(key9img);
  key0=createSprite(650,460,50,20);
  key0.addImage(key0img);
  if(mousePressedOver(key9) ){
    gameState="end";
    }
    if(mousePressedOver(key1)){
      gameState="wrong";
    }
    if(mousePressedOver(key2)){
      gameState="wrong";
    }
    if(mousePressedOver(key3)){
      gameState="wrong";
    }
    if(mousePressedOver(key4)){
      gameState="wrong";
    }
    if(mousePressedOver(key5)){
      gameState="wrong";
    }
    if(mousePressedOver(key6)){
      gameState="wrong";
    }
    if(mousePressedOver(key7)){
      gameState="wrong";
    }
    if(mousePressedOver(key8)){
      gameState="wrong";
    }
    if(mousePressedOver(key0)){
       gameState="wrong";
    }
  }
  if(gameState==="end"){
    cover4=createSprite(400,750,800,1500);
    cover4.shapeColor="lightgreen";
    retry=createSprite(400,250,100,50);
    retry.addImage(retryimg);
    retry1=createSprite(400,400,100,100);
    retry1.addImage(retryimg1);
    tick=createSprite(180,250,100,100);
    tick.addImage(tickimg);
    tick.scale=0.5;
    if(mousePressedOver(retry1)){
      gameState="statement";
      cover5=createSprite(400,750,800,1500);
      cover5.shapeColor="lightgreen";
    }
  }
  if(gameState==="wrong"){
    cover6=createSprite(400,750,800,1500);
    cover6.shapeColor="lightgreen";
    oops=createSprite(400,250,50,50);
    oops.addImage(oopsimg);
    restart=createSprite(400,400,50,50);
    restart.addImage(restartimg);
    cross=createSprite(200,240,50,50);
    cross.addImage(crossimg);
    if(mousePressedOver(restart)){
      gameState="statement";
      cover7=createSprite(400,750,800,1500);
      cover7.shapeColor="lightgreen";
    }
  }
  drawSprites();
}