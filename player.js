class Player{
    constructor(){
        this.sprite = createSprite(80,displayHeight/2);
        this.playerImg = loadImage("image/playerImg.png");
        this.sprite.addImage(this.playerImg);
        

    }
    control(){
       
        this.sprite.collide(edges[2]);
        this.sprite.collide(edges[3]);
        
        if(keyWentDown(UP_ARROW)){
            this.sprite.y = this.sprite.y-20;
        }
        if(keyWentDown(DOWN_ARROW)){
            this.sprite.y = this.sprite.y+20;
       
    }
    }
}