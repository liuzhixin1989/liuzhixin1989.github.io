function Sky(info){
    //水平位置
    this.x=info.x;
    //图片
    this.image=info.image;
    //画布
    this.canvas=info.canvas;
    this.ctx=info.ctx;
    //位移速度
    this.speed=-2;
}

Sky.prototype={
    constructor:Sky,
    draw:function(){
       //每一帧都去改变sky的位置
       this.x+=this.speed;
       
       //判断是否越界
       if(this.x<=-this.canvas.width){
           this.x=this.canvas.width;
       }

       //绘制
       this.ctx.drawImage(this.image,this.x,0,this.canvas.width,this.canvas.height);
    }
}