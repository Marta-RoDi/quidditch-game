class Hoops {
  constructor(ctx) {
    this.ctx = ctx;
    this.w = 167;
    this.h = 202;
    this.x = windowWidth - 200;
    this.y = randomInt(120, windowHeight - 200);
    this.scoring = true;
    this.colosionHarry = true;

    this.img = new Image();
    this.img.src = "images/hoop.png";
    this.velocity = 5;


    if (counter > 2000) {
      this.velocity = 10;
    }
    if (counter > 4000) {
      this.velocity = 15;
    }
  }

  drawHoop() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  moveHoop() {
    this.x -= this.velocity;
  }





}