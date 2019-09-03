// Variables Básicas
const gameCanvasDOMEl = document.querySelector("#canvas");
const ctx = gameCanvasDOMEl.getContext("2d");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;
const windowWidth2 = windowWidth / 2;
const windowHeight2 = windowHeight / 2;

function setCanvasDimensions() {
  // x axis
  gameCanvasDOMEl.setAttribute("width", `${windowWidth}px`);
  // y axis
  gameCanvasDOMEl.setAttribute("height", `${windowHeight}px`);
}
setCanvasDimensions();

//Función nº Random
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Variable Aros
let hoops = [];

//Variable contador
let counter = 0;

//Constante velocidad
const speed = 10;


//Comienzo del juego
startGame();

function startGame() {
  resetGame();
}

function resetGame() {
  background = new Background(windowWidth, windowHeight, ctx);
  player = new Player(windowWidth, windowHeight, ctx);
  //hoop = new Hoops(windowWidth, windowHeight, ctx)
}

// Set interval
let intervalID = setInterval(() => {
  ctx.clearRect(0, 0, windowWidth, windowHeight);
  counter++

  if (counter % 300 === 0) {
    generateHoops();
  }

  //pintar y mover
  drawAll()
  moveAll()

  //colisiones
  checkColisionHoops()

  //clear
  clearHoops()
  player.cleanQuaffle();


}, 1000 / 60);

//Función generar aros
function generateHoops() {
  hoops.push(new Hoops(ctx));
}

//Funcion colosión aros
function checkColisionHoops() {
  for (var i = 0; i < player.quaffles.length; i++) {
    for(var j = 0; j < hoops.length; j++){
      if (
        player.quaffles[i].x < hoops[j].x + hoops[j].w &&
        player.quaffles[i].x + player.quaffles[i].w > hoops[j].x &&
        player.quaffles[i].y < hoops[j].y + hoops[j].h &&
        player.quaffles[i].y + player.quaffles[i].h > hoops[j].y) {
     
        if(hoops[j].scoring){
          console.log("Has sumado un punto");
        }
        hoops[j].scoring = false;
      }
    }
  }
}

//Función generar aros
function clearHoops() {
  hoops.forEach((hoop) => {
    if (hoop.x == 200) {
      hoops.splice(0, 1);
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
}


// Función mover todo
function moveAll() {
  background.moveBackground();
  player.movePlayer();
  hoops.forEach(function (hoop) {
    hoop.moveHoop();
  });
}