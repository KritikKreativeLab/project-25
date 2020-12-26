
class Paper {
    constructor (x, y, r) {
        var options = {
            isStatic : false,
            friction: 0.3,
            restitution: 0.6,
            density : 1.2
        };
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        //this.image = loadImage('image/paper1.png');
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(0);
        stroke(255);
        fill(255);
        ellipse(0, 0, this.r * 2);
        imageMode(CENTER);
        image(paperImg, 0, 0, this.r * 5, this.r * 5);
        pop();
    }

}