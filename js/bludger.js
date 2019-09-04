class BludgerTop {
  constructor(ctx, xParam, yParam) {
    this.ctx = gameCanvasDOMEl.getContext("2d");
    this.w = 50;
    this.h = 50;
    this.x = randomInt(0, windowWidth);
    this.y = 0;
    this.velocity = 10;
    this.colosionHarry = true;
    this.img = new Image();
    this.img.src = "images/bludger.png";

    if (counter > 2000){
      this.velocity = 20;
    }
  }

  drawBludgerTop() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  moveBludgerTop() {
    this.y += this.velocity;
  }


}

class BludgerDown {
  constructor(ctx, xParam, yParam) {
    this.ctx = gameCanvasDOMEl.getContext("2d");
    this.w = 50;
    this.h = 50;
    this.x = randomInt(0, windowWidth);
    this.y = windowHeight;
    this.colosionHarry = true;
    this.velocity = 10;
    this.img = new Image();
    this.img.src = "images/bludger.png";

    // Aumentar dificultad
    if (counter > 2000){
      this.velocity = 20;
    }

    if (counter > 3000){
      this.velocity = 25;
    }
  }

  drawBludgerDown() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }

  moveBludgerDown() {
    this.y -= this.velocity;
  }


}