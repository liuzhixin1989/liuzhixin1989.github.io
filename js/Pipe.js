function Pipe(info){
    this.x=info.x;
    this.bottomy=info.y;
    this.topImage=info.topImage;
    this.bottomImage=info.bottomImage;
    //水管之间的间距
    this.gap=info.gap;
    this.topHeight=0;
    this.bottomHeight=0;
    this.speed=-2;
    this.canvas=info.canvas;
    this.ctx=info.ctx;

    //在对象创建时，就计算随机高度
    this.initHeight()
}

Pipe.prototype={
    constructor:Pipe,
    draw:function(){
        //1、每一帧移动
        this.x+=this.speed;
        //2、判断是否移除边界
        if(this.x<=-this.topImage.width){
            this.x=this.canvas.width-this.topImage.width+this.gap;
        }

        //3、绘制管道
        //在玻璃纸上把柱子所在区域的路劲绘制出来，但是不执行stroke,这样的路劲是看不到的；
        ctx.rect(this.x,0,this.topImage.width,this.topHeight);
        ctx.rect(this.x,this.topHeight+100,this.bottomImage.width,this.bottomHeight);


        //绘制上面的管道
        this.ctx.drawImage(this.topImage,this.x,0,this.topImage.width,this.topHeight);
        //绘制下面的管道
        this.ctx.drawImage(this.bottomImage,this.x,this.topHeight+100,this.bottomImage.width,this.bottomHeight);


    },
    initHeight:function(){

        // 计算管道的随机高度
        //上面管道的随机高度
        this.topHeight=Math.random()*150+100;

        //下面管道的随机高度
        this.bottomHeight=this.canvas.height-this.topHeight-100-this.bottomy;
    }
}