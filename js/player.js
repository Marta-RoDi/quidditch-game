class Player {
  constructor(w, h, ctx, keyState, lifeParam, scoreParam) {
    this.w = 2590 / 10;
    this.h = 166;
    this.ctx = ctx;

    this.x = windowWidth2 - 650;
    this.y = windowHeight2 - 83;

    this.life = lifeParam;
    this.score = scoreParam;

    this.img = new Image();
    this.img.src = "images/harry-sprite.png";

    // número de imágenes diferentes
    this.img.frames = 10;
    this.img.frameIndex = 0;

    //Quaffles
    this.quaffles = [];


    this.keyState = {
      keyUp: false,
      keyDown: false,
      keyRight: false,
      keyLeft: false
    }
  }

  drawPlayer(framesCounter) {
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

    this.quaffles.forEach(function (quaffle) {
      quaffle.drawQuaffle();
      quaffle.moveQuaffle();
    });
  }


  animateImg(framesCounter) {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (framesCounter % 15 === 0) {
      this.img.frameIndex += 1;

      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 9) this.img.frameIndex = 0;
    }
  }

  shootquaffle() {
    var quaffle = new Quaffle(windowWidth, windowHeight, ctx)
    this.quaffles.push(quaffle);

    // this.cleanQuaffle();
  }

  cleanQuaffle() {
    this.quaffles.forEach((quaffle) => {
      if (quaffle.x >= windowWidth) {
        this.quaffles.splice(0, 1);
      }
    });
  }

  movePlayer() {

    //moverse
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.keyCode === 38) {
        this.keyState.keyUp = true;
      }
      if (e.keyCode === 40) {
        this.keyState.keyDown = true;
      }
      if (e.keyCode === 37) {
        this.keyState.keyLeft = true;
      }
      if (e.keyCode === 39) {
        this.keyState.keyRight = true;
      }
    })
    document.addEventListener('keyup', (e) => {
      e.preventDefault();
      if (e.keyCode === 38) {
        this.keyState.keyUp = false;
      }
      if (e.keyCode === 40) {
        this.keyState.keyDown = false;
      }
      if (e.keyCode === 37) {
        this.keyState.keyLeft = false;
      }
      if (e.keyCode === 39) {
        this.keyState.keyRight = false;
      }

    })


    if (this.keyState.keyUp && this.y > 130) {
      this.y -= speed
    }
    if (this.keyState.keyDown && this.y < windowHeight - 180) {
      this.y += speed
    }
    if(this.keyState.keyLeft && this.x > 10){
      this.x-= speed
    }
    if(this.keyState.keyRight && this.x < windowWidth2){
      this.x += speed
    }

    //Disparar
    document.onkeydown = function (event) {
      switch (event.keyCode) {
        case 32:
          this.shootquaffle();
          break;
      }
    }.bind(this)
  }

}