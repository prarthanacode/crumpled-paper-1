class Circle {
    constructor(x,y,radius) {
      var options = {
          restitution:0.2,
          friction:0.4,
          density:0.6

      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("purple");
      ellipse(pos.x, pos.y, this.radius);
    }
  };