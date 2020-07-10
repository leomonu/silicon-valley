class Game{
    constructor(){
        this.playButton = createSprite(width/2+50,height-200);
        this.playImage = loadImage("image/play.png");
        this.playButton.addImage(this.playImage);
        this.playButton.scale = 0.5;

        this.gameOver = createSprite(width/2,height/2);
        this.gameOverImg = loadImage("image/gameOver.png");
        this.gameOver.addImage(this.gameOverImg);
        this.gameOver.visible = false;

        this.win1 = createSprite(width/2,height/2);
        this.winImg = loadImage("image/download.jpg");
        this.win1.addImage(this.winImg);
        this.win1.visible = false;

        this.bulletImg = loadImage("image/bullet.png");

        this.invisibleBorder = createSprite(20,height/2,20,height);
        this.invisibleBorder.visible = false;

        this.upKey = createSprite(width/2+300,height-300)
        this.upKeyImg = loadImage("image/upkey.png");
        this.upKey.addImage(this.upKeyImg);
        this.upKey.scale = 0.5

        this.downKey = createSprite(width/2+300,height-200)
        this.downKeyImg = loadImage("image/downkey.png");
        this.downKey.addImage(this.downKeyImg);
        this.downKey.scale = 0.5

        this.spaceKey = createSprite(width/2-400,height-200)
        this.spaceKeyImg = loadImage("image/space.png");
        this.spaceKey.addImage(this.spaceKeyImg);
        

        this.enemy1Img = loadImage("image/enemyImg.png");
        
        this.enemy2Img = loadImage("image/enemy2Img.png");

        this.enemy3Img = loadImage("image/tank.png");

        this.wave1Group = new Group()
        this.wave2Group = new Group();
        this.wave3Group = new Group();

        this.wave1Count = 0;
        this.wave2Count = 0;
        this.wave3Count = 0;
        this.bulletGroup = new Group();

        this.shootSound = loadSound("shoot.mp3");

        this.flag1 = 0;
        this.flag2 = 0;

        this.enemyCount = 0;


    }

    start(){
        player.sprite.visible = false;
        textSize(25);
        fill("red");
        
        text("ONE MAN ARMY",width/2-100,height/2-100);
        textSize(20);
        fill("blue");
        text("VIKRAM WAS THE COMMANDER OF THE NORTH WING OF HIS COUNTRY . ONE NIGHT THE ENEMIES AMBUSHED HIS UNIT AT MIDNIGHT...",width/2-750,height/2-70);
        text(" HE WAS THE ONLY SURVIVOR BECAUSE HE WAS IN THE UNDREGROUND TUNNEL... AFTER COIMNG UP HE REALIZES THAT HIS COUNTRY IS UNDER ATTACK...",width/2-750,height/2-35);
        text("WHAT WILL HAPPEN NEXT  IS IN YOUR HANDS.....",width/2-400,height/2) 
        
        textSize(20);
        text("- TO MOVE UP", width/2+350,height-300)
        text("- TO MOVE DOWN", width/2+350,height-200)
        text("TO SHOOT",width/2-450,height-260)
        
        if(mousePressedOver(this.playButton)){
            gameState = 1;
        }
    }
    play(){
        player.control();
        player.sprite.visible = true;
        this.playButton.visible = false;
        this.upKey.visible = false;
        this.downKey.visible = false;
        this.spaceKey.visible = false;
        
        if(this.wave1Count < 5){ 
        this.spawnWave1();
        

        }
       if(this.wave1Count === 5) this.flag1 = 1;

        if(this.flag1 === 1 && this.wave2Count<=5){
            this.spawnWave2();
        }
        if(this.wave2Count === 6) this.flag2 = 1;

        if(this.flag2 === 1 && this.wave3Count<5 ){
            this.spawnWave3();
        }

        
        if(keyWentDown(32)){
        this.createBullet();
        this.shootSound.play();

        }
        for(var i = 0;i < 5;i ++){ 
        if(this.bulletGroup.isTouching(this.wave1Group)){
            this.bulletGroup.get(i).destroy();
            this.wave1Group.get(i).destroy();
            this.enemyCount = this.enemyCount+1;
        }
    }

    for(var i = 0;i < 5;i ++){ 
        if(this.bulletGroup.isTouching(this.wave2Group)){
            this.bulletGroup.get(i).destroy();
            this.wave2Group.get(i).destroy();
            this.enemyCount = this.enemyCount+1;
        }
    }

    for(var i = 0;i < 5;i ++){ 
        if(this.bulletGroup.isTouching(this.wave3Group)){
            this.bulletGroup.get(i).destroy();
            this.wave3Group.get(i).destroy();
            this.enemyCount = this.enemyCount+1;
        }
    }
    if(this.enemyCount === 16){
        gameState = 3;
    }
    console.log(this.enemyCount);

    
        if(player.sprite.isTouching(this.wave1Group) || player.sprite.isTouching(this.wave2Group) || player.sprite.isTouching(this.wave3Group)){
            gameState = 2;
        }
        if(this.wave1Group.isTouching(this.invisibleBorder) || this.wave2Group.isTouching(this.invisibleBorder) || this.wave3Group.isTouching(this.invisibleBorder)){
            gameState = 2;
        }


    }

    createBullet(){
        var bullet = createSprite(player.sprite.x+110,player.sprite.y-7,10,10);
        bullet.addImage(this.bulletImg);
        bullet.scale = 0.1;
        bullet.velocityX = 30;
        bullet.depth = player.sprite.depth;
        player.sprite.depth += 1;
        bullet.lifeTime = floor(width/30);

        this.bulletGroup.add(bullet);

        

    }
    spawnWave1(){
        if(frameCount%50 === 0){
            var enemy1 = createSprite(width+100,height/2,10,10);
            enemy1.addImage(this.enemy1Img);
            enemy1.y = random(100,height-100);
            enemy1.velocityX = -5;
            this.wave1Count +=1;
            this.wave1Group.add(enemy1);



        }
    }



    spawnWave2(){
        if(frameCount%70 === 0){
            var enemy2 = createSprite(width+100,height/2,10,10);
            enemy2.addImage(this.enemy2Img);
            enemy2.scale = 0.5
            enemy2.y = random(100,height-100);
            enemy2.velocityX = -5;
            this.wave2Count +=1;
            this.wave2Group.add(enemy2);



        }
    }


    spawnWave3(){
        if(frameCount%100 === 0){
            var enemy3 = createSprite(width+100,height/2,10,10);
            enemy3.addImage(this.enemy3Img);
            enemy3.scale = 0.5
            enemy3.y = random(100,height-100);
            enemy3.velocityX = -5;
            this.wave3Count +=1;
            this.wave3Group.add(enemy3);



        }
    }

    end(){
        this.wave1Group.destroyEach();
        this.wave2Group.destroyEach();
        this.wave3Group.destroyEach();
        player.sprite.destroy();
        this.gameOver.visible = true;


        
    }
    win(){
        this.wave1Group.destroyEach();
        this.wave2Group.destroyEach();
        this.wave3Group.destroyEach();
        player.sprite.destroy();
        this.win1.visible = true;

    }


}