class Quaffle {
  constructor(x, y, w, h, ctx){
    this.w = 70;
    this.h = 70;
    this.x = windowWidth2 + 150;
    this.y = player + 50;
    this.ctx = ctx;
    this.velocity = 10;


    this.img = new Image();
    this.img.src = "images/quaffle.png";
  }

  drawQuaffle(){
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  moveQuaffle(){
    this.x += this.velocity;
  }
}