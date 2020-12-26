
class Box {
    constructor (x, y, w, h) {
        var options = {
            isStatic : true
        };
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        //this.box1, box2, box3 = loadImage("dustbingreen.png");
        World.add(world, this.body);
    }

    display() {
        rectMode(CENTER);
        strokeWeight(1);
        stroke(255);
        fill(127);
        rect(this.x, this.y, this.w, this.h);
    }
}