var char1, charImg;
var lava1,lava2,lava3,lava4,lava5,lava6,lava7,lava8,lava9,lava10,lava11,lava12,lava13,lava14,lava15,lava16,lava17,lava18,lava19,lava20,lava21,lava22,lava23,lava24,lava25,lava26,lava27,lava28,lava29,lava30,lava31,lava32,lava33,lava34,lava35,lava36,lava37,lava38,lava39,lava40,lava41,lava42,lava43,lava44,lava45,lava46,lava47,lava48,lava49,lava50,lava51,lava52,lava53,lava54,lava55,lava56,lava57,lava58,lava59,lava60,lava61,lava62,lava63,lava64,lava65,lava66,lava67,lava68,lava69,lava70,lava71,lava72,lava73,lava74,lava75,lava76,lava77,lava78,lava79,lava80,lava81,lava82,lava83,lava84,lava85,lava86,lava87,lava88,lava89,lava90,lava91,lava92,lava93,lava94,lava95,lava96,lava97,lava98,lava99,lava100,lava101,lava102,lava103,lava104,lava105,lava106,lava107,lava108,lava109,lava110,lava111,lavaImg;
var dirt;
var end, endimg;
var img,imgImg;



function preload(){
  charImg = loadImage("Images/cube.png");
  imgImg = loadImage("Images/dirt.png");
  lavaImg = loadImage("Images/lava.png");
}


function setup() {
  createCanvas(windowWidth-25,windowHeight-25);
  end = createSprite(windowWidth-50, windowHeight/25,35,35)
  lava1 = createSprite(100,windowHeight-100,25,25);
  lava2 = createSprite(100,windowHeight-200,25,25);
  lava3 = createSprite(50,windowHeight-100,25,25);
  lava4 = createSprite(100,windowHeight-200,25,25);
  lava5 = createSprite(50,windowHeight-100,25,25);
  lava6 = createSprite(100,windowHeight-200,25,25);
  lava7 = createSprite(50,windowHeight-100,25,25);
  lava8 = createSprite(100,windowHeight-200,25,25);
  lava9 = createSprite(50,windowHeight-100,25,25);
  lava10 = createSprite(100,windowHeight-200,25,25);
  lava11 = createSprite(50,windowHeight-100,25,25);
  lava12 = createSprite(100,windowHeight-200,25,25);
  lava13 = createSprite(50,windowHeight-100,25,25);
  lava14 = createSprite(100,windowHeight-200,25,25);
  lava15 = createSprite(50,windowHeight-100,25,25);
  lava16 = createSprite(100,windowHeight-200,25,25);
  lava17 = createSprite(50,windowHeight-100,25,25);
  lava18 = createSprite(100,windowHeight-200,25,25);
  lava19 = createSprite(50,windowHeight-100,25,25);
  lava20 = createSprite(100,windowHeight-200,25,25);
  lava21 = createSprite(50,windowHeight-100,25,25);
  lava22 = createSprite(100,windowHeight-200,25,25);
  lava23 = createSprite(50,windowHeight-100,25,25);
  lava24 = createSprite(100,windowHeight-200,25,25);
  lava25 = createSprite(50,windowHeight-100,25,25);
  lava26 = createSprite(100,windowHeight-200,25,25);
  lava27 = createSprite(50,windowHeight-100,25,25);
  lava28 = createSprite(100,windowHeight-200,25,25);
  lava29 = createSprite(50,windowHeight-100,25,25);
  lava30 = createSprite(100,windowHeight-200,25,25);
  lava31 = createSprite(50,windowHeight-100,25,25);
  lava32 = createSprite(100,windowHeight-200,25,25);
  lava33 = createSprite(50,windowHeight-100,25,25);
  lava34 = createSprite(100,windowHeight-200,25,25);
  lava35 = createSprite(50,windowHeight-100,25,25);
  lava36 = createSprite(100,windowHeight-200,25,25);
  lava37 = createSprite(50,windowHeight-100,25,25);
  lava38 = createSprite(100,windowHeight-200,25,25);
  lava39 = createSprite(50,windowHeight-100,25,25);
  lava40 = createSprite(100,windowHeight-200,25,25);
  lava41 = createSprite(50,windowHeight-100,25,25);
  lava42 = createSprite(100,windowHeight-200,25,25);
  lava43 = createSprite(50,windowHeight-100,25,25);
  lava44 = createSprite(100,windowHeight-200,25,25);
  lava45 = createSprite(50,windowHeight-100,25,25);
  lava46 = createSprite(100,windowHeight-200,25,25);
  lava47 = createSprite(50,windowHeight-100,25,25);
  lava48 = createSprite(100,windowHeight-200,25,25);
  lava49 = createSprite(50,windowHeight-100,25,25);
  lava50 = createSprite(100,windowHeight-200,25,25);
  lava51 = createSprite(50,windowHeight-100,25,25);
  lava52 = createSprite(100,windowHeight-200,25,25);
  lava53 = createSprite(50,windowHeight-100,25,25);
  lava54 = createSprite(100,windowHeight-200,25,25);
  lava55 = createSprite(50,windowHeight-100,25,25);
  lava56 = createSprite(100,windowHeight-200,25,25);
  lava57 = createSprite(50,windowHeight-100,25,25);
  lava58 = createSprite(100,windowHeight-200,25,25);
  lava59 = createSprite(50,windowHeight-100,25,25);
  lava60 = createSprite(100,windowHeight-200,25,25);
  lava61 = createSprite(50,windowHeight-100,25,25);
  lava62 = createSprite(100,windowHeight-200,25,25);
  lava63 = createSprite(50,windowHeight-100,25,25);
  lava64 = createSprite(100,windowHeight-200,25,25);
  lava65 = createSprite(50,windowHeight-100,25,25);
  lava66 = createSprite(100,windowHeight-200,25,25);
  lava67 = createSprite(50,windowHeight-100,25,25);
  lava68 = createSprite(100,windowHeight-200,25,25);
  lava69 = createSprite(50,windowHeight-100,25,25);
  lava70 = createSprite(100,windowHeight-200,25,25);
  lava71 = createSprite(50,windowHeight-100,25,25);
  lava72 = createSprite(100,windowHeight-200,25,25);
  lava73 = createSprite(50,windowHeight-100,25,25);
  lava74 = createSprite(100,windowHeight-200,25,25);
  lava75 = createSprite(50,windowHeight-100,25,25);
  lava76 = createSprite(100,windowHeight-200,25,25);
  lava77 = createSprite(50,windowHeight-100,25,25);
  lava78 = createSprite(100,windowHeight-200,25,25);
  lava79 = createSprite(50,windowHeight-100,25,25);
  lava80 = createSprite(100,windowHeight-200,25,25);
  lava81 = createSprite(50,windowHeight-100,25,25);
  lava82 = createSprite(100,windowHeight-200,25,25);
  lava83 = createSprite(50,windowHeight-100,25,25);
  lava84 = createSprite(100,windowHeight-200,25,25);
  lava85 = createSprite(50,windowHeight-100,25,25);
  lava86 = createSprite(100,windowHeight-200,25,25);
  lava87 = createSprite(50,windowHeight-100,25,25);
  lava88 = createSprite(100,windowHeight-200,25,25);
  lava89 = createSprite(50,windowHeight-100,25,25);
  lava90 = createSprite(100,windowHeight-200,25,25);
  lava91 = createSprite(50,windowHeight-100,25,25);
  lava92 = createSprite(100,windowHeight-200,25,25);
  lava93 = createSprite(50,windowHeight-100,25,25);
  lava94 = createSprite(100,windowHeight-200,25,25);
  lava95 = createSprite(50,windowHeight-100,25,25);
  lava96 = createSprite(100,windowHeight-200,25,25);
  lava97 = createSprite(50,windowHeight-100,25,25);
  lava98 = createSprite(100,windowHeight-200,25,25);
  lava99 = createSprite(50,windowHeight-100,25,25);
  lava100 = createSprite(100,windowHeight-200,25,25);
  lava101 = createSprite(50,windowHeight-100,25,25);
  lava102 = createSprite(100,windowHeight-200,25,25);
  lava103 = createSprite(50,windowHeight-100,25,25);
  lava104 = createSprite(100,windowHeight-200,25,25);
  lava105 = createSprite(50,windowHeight-100,25,25);
  lava106 = createSprite(100,windowHeight-200,25,25);
  lava107 = createSprite(50,windowHeight-100,25,25);
  lava108 = createSprite(100,windowHeight-200,25,25);
  lava109 = createSprite(50,windowHeight-100,25,25);
  lava110 = createSprite(100,windowHeight-200,25,25);
  lava111 = createSprite(50,windowHeight-100,25,25);
  
  lava1.addImage(lavaImg);
  lava2.addImage(lavaImg);
  lava3.addImage(lavaImg);
  lava4.addImage(lavaImg);
  lava5.addImage(lavaImg);
  lava6.addImage(lavaImg);
  lava7.addImage(lavaImg);
  lava8.addImage(lavaImg);
  lava9.addImage(lavaImg);
  lava10.addImage(lavaImg);
  lava11.addImage(lavaImg);
  lava12.addImage(lavaImg);
  lava13.addImage(lavaImg);
  lava14.addImage(lavaImg);
  lava15.addImage(lavaImg);
  lava16.addImage(lavaImg);
  lava17.addImage(lavaImg);
  lava18.addImage(lavaImg);
  lava19.addImage(lavaImg);
  lava20.addImage(lavaImg);
  lava21.addImage(lavaImg);
  lava22.addImage(lavaImg);
  lava23.addImage(lavaImg);
  lava24.addImage(lavaImg);
  lava25.addImage(lavaImg);
  lava26.addImage(lavaImg);
  lava27.addImage(lavaImg);
  lava28.addImage(lavaImg);
  lava29.addImage(lavaImg);
  lava30.addImage(lavaImg);
  lava31.addImage(lavaImg);
  lava32.addImage(lavaImg);
  lava33.addImage(lavaImg);
  lava34.addImage(lavaImg);
  lava35.addImage(lavaImg);
  lava36.addImage(lavaImg);
  lava37.addImage(lavaImg);
  lava38.addImage(lavaImg);
  lava39.addImage(lavaImg);
  lava40.addImage(lavaImg);
  lava41.addImage(lavaImg);
  lava42.addImage(lavaImg);
  lava43.addImage(lavaImg);
  lava44.addImage(lavaImg);
  lava45.addImage(lavaImg);
  lava46.addImage(lavaImg);
  lava47.addImage(lavaImg);
  lava48.addImage(lavaImg);
  lava49.addImage(lavaImg);
  lava50.addImage(lavaImg);
  lava51.addImage(lavaImg);
  lava52.addImage(lavaImg);
  lava53.addImage(lavaImg);
  lava54.addImage(lavaImg);
  lava55.addImage(lavaImg);
  lava56.addImage(lavaImg);
  lava57.addImage(lavaImg);
  lava58.addImage(lavaImg);
  lava59.addImage(lavaImg);
  lava60.addImage(lavaImg);
  lava61.addImage(lavaImg);
  lava62.addImage(lavaImg);
  lava63.addImage(lavaImg);
  lava64.addImage(lavaImg);
  lava65.addImage(lavaImg);
  lava66.addImage(lavaImg);
  lava67.addImage(lavaImg);
  lava68.addImage(lavaImg);
  lava69.addImage(lavaImg);
  lava70.addImage(lavaImg);
  lava71.addImage(lavaImg);
  lava72.addImage(lavaImg);
  lava73.addImage(lavaImg);
  lava74.addImage(lavaImg);
  lava75.addImage(lavaImg);
  lava76.addImage(lavaImg);
  lava77.addImage(lavaImg);
  lava78.addImage(lavaImg);
  lava79.addImage(lavaImg);
  lava80.addImage(lavaImg);
  lava81.addImage(lavaImg);
  lava82.addImage(lavaImg);
  lava83.addImage(lavaImg);
  lava84.addImage(lavaImg);
  lava85.addImage(lavaImg);
  lava86.addImage(lavaImg);
  lava87.addImage(lavaImg);
  lava88.addImage(lavaImg);
  lava89.addImage(lavaImg);
  lava90.addImage(lavaImg);
  lava91.addImage(lavaImg);
  lava92.addImage(lavaImg);
  lava93.addImage(lavaImg);
  lava94.addImage(lavaImg);
  lava95.addImage(lavaImg);
  lava96.addImage(lavaImg);
  lava97.addImage(lavaImg);
  lava98.addImage(lavaImg);
  lava99.addImage(lavaImg);
  lava100.addImage(lavaImg);
  lava101.addImage(lavaImg);
  lava102.addImage(lavaImg);
  lava103.addImage(lavaImg);
  lava104.addImage(lavaImg);
  lava105.addImage(lavaImg);
  lava106.addImage(lavaImg);
  lava107.addImage(lavaImg);
  lava108.addImage(lavaImg);
  lava109.addImage(lavaImg);
  lava110.addImage(lavaImg);
  lava111.addImage(lavaImg);
  
  
  char1 = createSprite(50,windowHeight-100,25,25);
  char1.addImage(charImg);
  dirt = createSprite(windowWidth/2, windowHeight-55, windowWidth, 20)
  for (var i=0; i<windowWidth; i=i+40){
    img = createSprite(i,windowHeight-45,25,25);
    img.addImage(imgImg);
    img.scale=0.150;
  }
  char1.scale=0.150;
  lava1.scale=0.150;
  lava2.scale=0.150;
  lava3.scale=0.150;
  lava4.scale=0.150;
  lava5.scale=0.150;
  lava6.scale=0.150;
  lava7.scale=0.150;
  lava8.scale=0.150;
  lava9.scale=0.150;
  lava10.scale=0.150;
  lava11.scale=0.150;
  lava12.scale=0.150;
  lava13.scale=0.150;
  lava14.scale=0.150;
  lava15.scale=0.150;
  lava16.scale=0.150;
  lava17.scale=0.150;
  lava18.scale=0.150;
  lava19.scale=0.150;
  lava20.scale=0.150;
  lava21.scale=0.150;
  lava22.scale=0.150;
  lava23.scale=0.150;
  lava24.scale=0.150;
  lava25.scale=0.150;
  lava26.scale=0.150;
  lava27.scale=0.150;
  lava28.scale=0.150;
  lava29.scale=0.150;
  lava30.scale=0.150;
  lava31.scale=0.150;
  lava32.scale=0.150;
  lava33.scale=0.150;
  lava34.scale=0.150;
  lava35.scale=0.150;
  lava36.scale=0.150;
  lava37.scale=0.150;
  lava38.scale=0.150;
  lava39.scale=0.150;
  lava40.scale=0.150;
  lava41.scale=0.150;
  lava42.scale=0.150;
  lava43.scale=0.150;
  lava44.scale=0.150;
  lava45.scale=0.150;
  lava46.scale=0.150;
  lava47.scale=0.150;
  lava48.scale=0.150;
  lava49.scale=0.150;
  lava50.scale=0.150;
  lava51.scale=0.150;
  lava52.scale=0.150;
  lava53.scale=0.150;
  lava54.scale=0.150;
  lava55.scale=0.150;
  lava56.scale=0.150;
  lava57.scale=0.150;
  lava58.scale=0.150;
  lava59.scale=0.150;
  lava60.scale=0.150;
  lava61.scale=0.150;
  lava62.scale=0.150;
  lava63.scale=0.150;
  lava64.scale=0.150;
  lava65.scale=0.150;
  lava66.scale=0.150;
  lava67.scale=0.150;
  lava68.scale=0.150;
  lava69.scale=0.150;
  lava70.scale=0.150;
  lava71.scale=0.150;
  lava72.scale=0.150;
  lava73.scale=0.150;
  lava74.scale=0.150;
  lava75.scale=0.150;
  lava76.scale=0.150;
  lava77.scale=0.150;
  lava78.scale=0.150;
  lava79.scale=0.150;
  lava80.scale=0.150;
  lava81.scale=0.150;
  lava82.scale=0.150;
  lava83.scale=0.150;
  lava84.scale=0.150;
  lava85.scale=0.150;
  lava86.scale=0.150;
  lava87.scale=0.150;
  lava88.scale=0.150;
  lava89.scale=0.150;
  lava90.scale=0.150;
  lava91.scale=0.150;
  lava92.scale=0.150;
  lava93.scale=0.150;
  lava94.scale=0.150;
  lava95.scale=0.150;
  lava96.scale=0.150;
  lava97.scale=0.150;
  lava98.scale=0.150;
  lava99.scale=0.150;
  lava100.scale=0.150;
  lava101.scale=0.150;
  lava102.scale=0.150;
  lava103.scale=0.150;
  lava104.scale=0.150;
  lava105.scale=0.150;
  lava106.scale=0.150;
  lava107.scale=0.150;
  lava108.scale=0.150;
  lava109.scale=0.150;
  lava110.scale=0.150;
  lava111.scale=0.150;
  
  
  dirt.visible = false;
  
}

function draw() {
  background(255,0,255);  
  
  char1.collide(dirt)

  

  if(char1.isTouching(lava1||lava2||lava3||lava4||lava5||lava6||lava7||lava8||lava9||lava10||lava11||lava12||lava13||lava14||lava15||lava16||lava17||lava18||lava19||lava20||lava21||lava22||lava23||lava24||lava25||lava26||lava27||lava28||lava29||lava30||lava31||lava32||lava33||lava34||lava35||lava36||lava37||lava38||lava39||lava40||lava41||lava42||lava43||lava44||lava45||lava46||lava47||lava48||lava49||lava50||lava51||lava52||lava53||lava54||lava55||lava56||lava57||lava58||lava59||lava60||lava61||lava62||lava63||lava64||lava65||lava66||lava67||lava68||lava69||lava70||lava71||lava72||lava73||lava74||lava75||lava76||lava77||lava78||lava79||lava80||lava81||lava82||lava83||lava84||lava85||lava86||lava87||lava88||lava89||lava90||lava91||lava92||lava93||lava94||lava95||lava96||lava97||lava98||lava99||lava100||lava101||lava102||lava103||lava104||lava105||lava106||lava107||lava108||lava109||lava110||lava111)){
    char1.x= 50;
    char1.y= windowHeight-100;
  }
  
  
  if(keyDown(RIGHT_ARROW)) {
    char1.x +=15;
  }

  if(keyDown(LEFT_ARROW)) {
    char1.x -=15;
  }

  if(keyDown("space")) {
    char1.y-=50;

  }
  
  char1.velocityY=char1.velocityY+0.5;
  
  drawSprites();

}

