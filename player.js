class Player{
    constructor(){
        this.sprite = createSprite(80,displayHeight/2);
        this.playerImg = loadImage("image/playerImg.png");
        this.sprite.addImage(this.playerImg);
        

    }
    control(){
       
        this.sprite.collide(edges[2]);
        this.sprite.collide(edges[3]);
        
        if(keyIsDown(UP_ARROW)){
            this.sprite.y = this.sprite.y-5;
        }
        if(keyIsDown(DOWN_ARROW)){
            this.sprite.y = this.sprite.y+5;
       
    }
    }
}