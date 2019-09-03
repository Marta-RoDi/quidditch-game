class Quaffle {
  constructor(w, h, ctx){
    this.w = 70;
    this.h = 70;
    this.ctx = ctx;
    this.velocity = 10;
    this.x = player.x + 240;
    this.y = player.y + 70;


    this.img = new Image();
    this.img.src = "images/quaffle.png";
  }

  drawQuaffle(){
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h,
    );
  }

  moveQuaffle(){
    this.x += this.velocity;
  }
}