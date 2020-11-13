class Paper 
{
    constructor(x,y)
    {
        var options= 
        { 
            isStatic : false,
            friction : 0.5,
            density : 1.2
        }
        this.radius = 30;
        this.body = Bodies.circle(x,y, 15, options);
        
        World.add(world, this.body);
    }

    display()
    {
       ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,15 )
    }
}


