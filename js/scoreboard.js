class Scoreboard {
  constructor(x, y, w, h, ctx) {
    this.x = windowWidth2 - 150;
    this.y = 0;
    this.w = 300;
    this.h = 120;
    this.img = new Image();
    this.img.src = "images/scoreboard.png";
    this.ctx = gameCanvasDOMEl.getContext("2d");
  }


  drawScoreBg(){
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    );
  }


  drawScoreTime() {
    ctx.font = "24px harry_pregular";
    ctx.fillStyle = "#3c2e1f";
    ctx.fillText("Tiempo" + ":" + " " + Math.floor(time), windowWidth2 - 50, 55);
  }

  drawScorePoints() {
    ctx.font = "24px harry_pregular";
    ctx.fillStyle = "#3c2e1f";
    ctx.fillText("Puntos" + ":" + " " + Math.floor(points), windowWidth2 - 100, 95);
  }

  drawScoreLife() {
    ctx.font = "24px harry_pregular";
    ctx.fillStyle = "#3c2e1f";
    ctx.fillText("Vida" + ":" + " " + Math.floor(life), windowWidth2 + 20, 95);
  }
}