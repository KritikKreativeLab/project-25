
class Ground {
    constructor(){
        var options = {
            isStatic : true
        };
        this.body = Bodies.rectangle(5, 600, 1600, 100, options);
        World.add(world, this.body);
    }

    display(){
        
        rect(this.body.position.x, this.body.position.y, 1600, 100);
    }
}