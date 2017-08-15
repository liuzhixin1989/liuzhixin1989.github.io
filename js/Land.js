function Land(info){
    this.x=info.x;
    this.y=info.y;
    this.ctx=info.ctx;
    this.image=info.image;
    this.speed=-2;
    this.canvas=info.canvas;
}

Land.prototype={
    constructor:Land,
    draw:function(){
        //每一贞 水平方向移动
        this.x+=this.speed;
        //判断是否yuejie
        if(this.x<=-this.canvas.width/4){
            this.x=this.canvas.width;
        }

        //绘制
        this.ctx.drawImage(this.image,this.x,this.y,this.canvas.width/4,this.canvas.height-this.y);
    }
}