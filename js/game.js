// Variables Básicas
const gameCanvasDOMEl = document.querySelector("#canvas");
const ctx = gameCanvasDOMEl.getContext("2d");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const windowWidth2 = windowWidth / 2;
const windowHeight2 = windowHeight / 2;

function setCanvasDimensions() {
  gameCanvasDOMEl.setAttribute("width", `${windowWidth}px`);
  gameCanvasDOMEl.setAttribute("height", `${windowHeight}px`);
}
setCanvasDimensions();

//Función nº Random
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Variable Array Aros
let hoops = [];

//Variable Array Bludger
let bludgersTop = [];
let bludgersDown = [];

//Variable Array Snitchs
let snitchs = [];

//Variable contador
let counter = 0;

//Variable tiempo
let time = 0;

//Variable puntos
let points = 0;

//Variable puntos
let life = 50;

//Constante velocidad
const speed = 8;

let intervalID = undefined;


//Sonidos
let soundQuaffle = new Audio("sounds/quaffle.wav");
let soundImpact = new Audio("sounds/impact.wav");
let soundSnitch = new Audio("sounds/snitch.wav");
let soundGame = new Audio("sounds/team-quidditch.wav");

//Comienzo del juego
startGame();


function startGame() {
  resetGame();
  intervalID = setInterval(() => {
    ctx.clearRect(0, 0, windowWidth, windowHeight);
    counter++
    time += 0.01


    //generar aros
    if (counter % 300 === 0) {
      generateHoops();
    }

    //generar bludgers
    if (counter % 350 === 0) {
      generateBludgersTop();
    }
    if (counter % 350 === 0) {
      generateBludgersDown();
    }

    //generar snitchs
    if (counter % 2000 === 0) {
      generateSnitchs();
    }

    


    //pintar y mover
    drawAll()
    moveAll()

    //colisiones
    checkColisionHoopsQuaffle()
    checkColisionHoopsHarry()
    checkColisionBludgerTopHarry()
    checkColisionBludgerDownHarry()
    checkColisionSnitchsHarry()

    //clear
    clearHoops()
    player.cleanQuaffle();
    clearBludgerTop();
    clearBludgerDown();


    //Subir de nivel
    background.moreDificultBackground();
   
    //soundGame.play();
    gameOver();
   

  }, 1000 / 60);

  // gameOver();
}

function stop() {
  clearInterval(intervalID)
}

function gameOver() {

  if (life <= 0) {
    if (confirm("¡Ohh! Hufflepuff ha ganado... ¡No puedes permitir esto! Inténtalo de nuevo :)")) {
      stop();
      startGame();
    }
  }
}

function resetGame() {
  background = new Background(windowWidth, windowHeight, ctx);
  player = new Player(windowWidth, windowHeight, ctx);
  scoreboard = new Scoreboard(windowWidth, windowHeight, ctx);
  snitch = new Snitch(windowWidth, windowHeight, ctx);
  counter = 0;
  time = 0;
  points = 0;
  life = 50;
  hoops = [];
  bludgersTop = [];
  bludgersDown = [];
  snitchs = [];
}

//Función generar Bludger
function generateBludgersTop() {
  bludgersTop.push(new BludgerTop(ctx));
}

function generateBludgersDown() {
  bludgersDown.push(new BludgerDown(ctx));
}

function generateSnitchs() {
  snitchs.push(new Snitch(ctx));
}

//Función generar aros
function generateHoops() {
  hoops.push(new Hoops(ctx));
}

//Funcion colosión aros con quaffle
function checkColisionHoopsQuaffle() {
  for (var i = 0; i < player.quaffles.length; i++) {
    for (var j = 0; j < hoops.length; j++) {
      if (
        player.quaffles[i].x < hoops[j].x + hoops[j].w &&
        player.quaffles[i].x + player.quaffles[i].w > hoops[j].x &&
        player.quaffles[i].y < hoops[j].y + hoops[j].h &&
        player.quaffles[i].y + player.quaffles[i].h > hoops[j].y) {

        if (hoops[j].scoring) {
          points += 10
          soundQuaffle.play();
          //dar mas vida
          if (points % 50 === 0) {
            life += 10;
          }
        }
        hoops[j].scoring = false;
      }
    }
  }
}

//Funcion colosión harry con aros
function checkColisionHoopsHarry() {
  for (var i = 0; i < hoops.length; i++) {
    if (
      hoops[i].x < player.x + player.w &&
      hoops[i].x + hoops[i].w > player.x &&
      hoops[i].y < player.y + player.h &&
      hoops[i].y + hoops[i].h > player.y) {

      if (hoops[i].colosionHarry) {
        life -= 10
        soundImpact.play();
      }
      hoops[i].colosionHarry = false;
    }
  }
}

//Funcion colosión harry con Bludgers
function checkColisionBludgerTopHarry() {
  for (var i = 0; i < bludgersTop.length; i++) {
    if (
      bludgersTop[i].x < player.x + player.w &&
      bludgersTop[i].x + bludgersTop[i].w > player.x &&
      bludgersTop[i].y < player.y + player.h &&
      bludgersTop[i].y + bludgersTop[i].h > player.y) {

      if (bludgersTop[i].colosionHarry) {
        life -= 10
        soundImpact.play();
      }
      bludgersTop[i].colosionHarry = false;
    }
  }
}

function checkColisionBludgerDownHarry() {
  for (var i = 0; i < bludgersDown.length; i++) {
    if (
      bludgersDown[i].x < player.x + player.w &&
      bludgersDown[i].x + bludgersDown[i].w > player.x &&
      bludgersDown[i].y < player.y + player.h &&
      bludgersDown[i].y + bludgersDown[i].h > player.y) {

      if (bludgersDown[i].colosionHarry) {
        life -= 10
        soundImpact.play();
      }
      bludgersDown[i].colosionHarry = false;
    }
  }
}


//Funcion colosión harry con Bludgers
function checkColisionSnitchsHarry() {
  for (var i = 0; i < snitchs.length; i++) {
    if (
      snitchs[i].x < player.x + player.w &&
      snitchs[i].x + snitchs[i].w > player.x &&
      snitchs[i].y < player.y + player.h &&
      snitchs[i].y + snitchs[i].h > player.y) {

      if (snitchs[i].colosionHarry) {
        life += 10
        soundSnitch.play();
      }
      snitchs[i].colosionHarry = false;
      snitchs.splice(i, 1)
    }
  }
}

//Función limpiar aros
function clearHoops() {
  hoops.forEach((hoop) => {
    if (hoop.x <= -200) {
      hoops.splice(0, 1);
    }
  });
}

//Funciones limpiar Bludgers
function clearBludgerTop() {
  bludgersTop.forEach((bludgerTop) => {
    if (bludgerTop.y >= windowHeight) {
      bludgersTop.splice(0, 1);
    }
  });
}

function clearBludgerDown() {
  bludgersDown.forEach((bludgerDown) => {
    if (bludgerDown.y <= 0) {
      bludgersDown.splice(0, 1);
    }
  });
}

// Función pintar todo
function drawAll() {
  background.drawBackground();
  player.drawPlayer(counter);
  hoops.forEach(function (hoop) {
    hoop.drawHoop();
  });
  bludgersTop.forEach(function (bludgerTop) {
    bludgerTop.drawBludgerTop();
  });
  bludgersDown.forEach(function (bludgerDown) {
    bludgerDown.drawBludgerDown();
  });
  snitchs.forEach(function (snitch) {
    snitch.drawSnitch(counter);
  });
  scoreboard.drawScoreBg();
  scoreboard.drawScoreTime();
  scoreboard.drawScorePoints();
  scoreboard.drawScoreLife();
}

// Función mover todo
function moveAll() {
  background.moveBackground();
  player.movePlayer();
  hoops.forEach(function (hoop) {
    hoop.moveHoop();
  });
  bludgersTop.forEach(function (bludgerTop) {
    bludgerTop.moveBludgerTop();
  });
  bludgersDown.forEach(function (bludgerDown) {
    bludgerDown.moveBludgerDown();
  });
  snitchs.forEach(function (snitch) {
    snitch.moveSnitch();
  });
}