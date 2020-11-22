class Log{

    constructor(x,y,width,height,angle){
    
        var option={
            restitution : 0.8,
            friction:1,
            density:1
    
        }
        this.width= width;
        this.height=height;
        this.body = Bodies.rectangle(x, y, width, height, option)
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
        
    }
    
    
    display(){
    
        var pos= this.body.position;
        var angle= this.body.angle;
    
        push();
        translate(pos.x,pos.y);
        rotate(angle);
    
        fill("white")
        stroke("green");
        strokeWeight(5);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    
        pop();
    
        }
            
    }