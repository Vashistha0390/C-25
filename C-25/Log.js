class Log extends Main {
    constructor(x, y, height, angle) {
      
      super(x, y, 20, height);
      this.width = 20;
      this.image = loadImage("sprites/wood2.png") 
      Matter.Body.setAngle(this.body, angle);
     
    }
  
  }