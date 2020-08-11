var gs=0
var tittle
var MayorNedI, MayorNed, BudI, Bud, Old, Oldie
var bg
var mon, ster
var i

function preload() {
tittle=loadImage("Pictures/tittle.png")
MayorNedI=loadImage("Pictures/MayorNed.png")
BudI=loadAnimation("Pictures/BudS.png", "Pictures/BudW1.png", "Pictures/BudW2.png", "Pictures/BudW3.png")
bg=loadImage("Pictures/BG.png")
tangle=loadImage("Pictures/monster2.png")
fright=loadImage("Pictures/monster1.png")
Old=loadImage("Pictures/Oldwoman.png")
}

function setup() {
  createCanvas(800,displayHeight);
  Bud=createSprite(650,800,10,10)
  MayorNed=createSprite (100,400, 10,10)
  Oldie=createSprite (900,400, 10,10)
}

function draw() {

  if (gs===0){
    imageMode(CENTER)
    image(tittle,400,displayHeight/2,800,displayHeight)
  }  
  if (gs===1){
    background(155,255,155);
    console.log("hag")
    MayorNed.addImage(MayorNedI)
    Bud.addAnimation("Bud1",BudI)
    Bud.scale=0.3
    if (keyDown("up")){
      Bud.velocityY=-569
    }
    if (mouseIsOver(MayorNed)){
      textSize(20)
      fill("Purple")
      text("Bring The GEm to The Old lady at the end of the forest.",150, 375)
      
    } 
    if (Bud.y<0){
      gs=2
      createCanvas(1000, displayHeight);
      gb=createSprite(300,200,1000,displayHeight)
      gb.addImage(bg)
      gb.velocityX=-2
      Monster2=createSprite(1000, 320, 10, 10)
      Monster1=createSprite (1700, 320, 10, 10)
      Monster2.addImage(tangle)
      Monster1.addImage(fright)
      Monster2.velocityX=-4
      Monster1.velocityX=-4
      Monster2.scale=0.3
      Monster1.scale=0.3
      i=createSprite(1000,340,300,300)
      i.visible=false
      Monster2.depth=gb.depth+1
      Monster1.depth=gb.depth+1
      Bud.y=360
    }
  }
  if (gs===2){
    gb.scale=2
    
    if(gb.x<-1){
      gb.x=gb.width/2
    }
   
             Bud.x=60
             Bud.depth=gb.depth+1
             MayorNed.destroy()
             
             if(keyDown("space")){
             Bud.y=Bud.y-15 ;
             Bud.velocityY=-10;
    }
    if(Bud.y>320){
      Bud.y=320;
    }
    Bud.velocityY=Bud.velocityY+2

    if(Bud.isTouching(Monster1) || Bud.isTouching(Monster2)){
     gs= "end";
    }
    if(Monster2.x<0 && Monster1.x<0){
      gs=3;
    }
  }

  if(gs==="end"){
    gb.destroy();
    Bud.destroy();
    Monster1.destroy();
    Monster2.destroy();
    background(25, 54, 22);
    textSize(20);
    fill("white")
    text("Game Over ",200,200)
  }




    if (gs===3){
      background(155,255,155)
      gb.destroy();
      if (mouseIsOver(Oldie)){
        textSize(25)
        fill("Purple")
        text("Thanks For the Gem!",390, 400)
        console.log("Thanks For the Gem!")
      } 
      Bud.addAnimation ("label",BudI)
      Bud.x= 200
      Bud.y= 400
      Bud.scale=1
      Oldie.addImage("label",Old)
      Monster1.destroy()
      Monster2.destroy()
      
      if(mouseClicked(gb)){
        if(mouseClicked(gb)){
          gs=4
          Oldie.destroy()
          console.log("FISHNUGGETS")
        }
      }


    }
    if (gs===4){
    }







    drawSprites();
    
}

function mouseClicked(){
  if(gs===0){
    gs=1
  }
}

//There’s a town called Phurrus
//They have a gem, but it broke :O
//So u take the gem goes through the maze but avoid the enemies (Pacman style)
//Give it to the gem maker and help him fix it 
//You then have to run back through the maze but twice the enemies 
//U then put it back in the statute 
//Then it falls and breaks
//The end. 
