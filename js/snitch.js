class Snitch{
  constructor(){
    this.ctx = gameCanvasDOMEl.getContext("2d");
    this.w = 60;
    this.h = 23;
    this.x = randomInt(0, windowWidth);
    this.y = randomInt(0, windowHeight);
    this.velocity = 2;
    this.colosionHarry = true;
    this.img = new Image();
    this.img.src = "images/snitch.png";
  }

  drawSnitch() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  moveSnitch(){
    this.x -= this.velocity;
  }
}