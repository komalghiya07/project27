class Bob{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.2
        }
        this.body=Bodies.circle(x,y,20,options);
        this.r=20;
        World.add(world,this.body); 
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill("purple");
        //rotate(angle);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
            
    }
    
}