/**
 * Created by Administrator on 2017/8/13.
 */
function Bird(info){
    this.x=info.x;
    this.y=info.y;
    this.image=info.image;
    this.speed=0;
    this.aspeed=0.0004;
    this.ctx=info.ctx;
    //最大角度和最大速度
    this.maxAngle=45;
    this.maxSpeed=0.6;

    //小鸟的状态的图片的index
    this.index=0;
    //上一帧的时间
    this.lastTime=new Date();
}

Bird.prototype={
    constructor:Bird,
    draw:function(){
        // 1、获取时间差
        var currentTime=new Date();
        var deltaTime=currentTime-this.lastTime;
        this.lastTime=currentTime;
        //2、计算出小鸟的垂直方向的移动距离
        this.y+=this.speed*deltaTime+this.aspeed*deltaTime*deltaTime/2;
        //3、算出小鸟当前帧的速度（下一帧起始速度）
        this.speed+=this.aspeed*deltaTime;

        //4、小鸟拍打翅膀
        this.index+=1;
        //5、小鸟的旋转
        var birdWith=this.image.width/3;
        var birdHeight=this.image.height;

        //保存ctx的状态
        this.ctx.save();
        //平移坐标系
        this.ctx.translate(this.x+birdWith/2,this.y+birdHeight/2);
        //判断小鸟的速度
        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        //计算出小鸟的角度
        var angle=this.speed/this.maxSpeed*this.maxAngle;
        //弧度
        var radian=angle/180*Math.PI;
        //旋转坐标系
        this.ctx.rotate(radian);

        //6、画小鸟
        this.ctx.drawImage(this.image,this.index%3*birdWith,0,birdWith,birdHeight,-birdWith/2,-birdHeight/2,birdWith,birdHeight);

        this.ctx.restore();
    }
}