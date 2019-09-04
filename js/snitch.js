class Snitch{
  constructor(){
    this.ctx = gameCanvasDOMEl.getContext("2d");
    this.w = 480 / 8;
    this.h = 23;
    this.x = randomInt(0, windowWidth);
    this.y = randomInt(0, windowHeight);
    this.velocity = 2;
    this.colosionHarry = true;
    this.img = new Image();
    this.img.src = "images/snitch-sprite.png";

      // número de imágenes diferentes
      this.img.frames = 8;
      this.img.frameIndex = 0;
  }

  drawSnitch(framesCounter) {
    this.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );

    this.animateImg(framesCounter);
  }

  animateImg(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 1 === 0) {
      this.img.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 7) this.img.frameIndex = 0;
    }
  }

  moveSnitch(){
    this.x -= this.velocity;
  }
}