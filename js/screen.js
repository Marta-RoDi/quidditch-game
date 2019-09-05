class Screens {
  constructor(w, h, ctx){
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = "images/game-over.jpg";
    this.h = h;
    this.w = w;
    this.x = 0;
    this.y = 0;
  }

  drawGameover() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }
}