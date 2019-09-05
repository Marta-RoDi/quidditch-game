class Background {
  constructor(w, h, ctx) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "images/bg.png";
    this.h = h;
    this.w = w;
    this.x = 0;
    this.y = 0;

    this.velocity = 7;
  }

  drawBackground() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.ctx.drawImage(
      this.img,
      this.x + this.w,
      this.y,
      this.w,
      this.h
    );
  }

  moveBackground() {
    this.x -= this.velocity;
    if (this.x < -this.w) this.x = 0;
  }

  moreDificultBackground() {
    //Aumentar dificultad
   
    if (counter > 2000) {
      this.velocity = 10;
    }
    if (counter > 4000) {
      this.velocity = 15;
    }
  }
}