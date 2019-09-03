class Hoops {
  constructor(ctx){
    this.ctx = ctx;
    this.w = 167;
    this.h = 202;
    this.x = windowWidth - 200;
    this.y = randomInt(100, windowHeight - 300);
    this.scoring = true;
 
    this.img = new Image();
    this.img.src = "images/hoop.png";
    this.velocity = 2;
  }

  drawHoop(){
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );

    /*do {
      this.y2
    } while (this.y2 >= this.y - this.h && this.y2 <= this.y + this.h)*/
  }

  moveHoop() {
    this.x -= this.velocity;
  }


  createHoop(){
    hoops.forEach(function(hoop) {
      hoop.drawHoop();
      hoop.moveHoop();
    });
  }
}