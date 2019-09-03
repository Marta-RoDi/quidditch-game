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


let counter = 0;
const speed = 10;

//Comienzo del juego
startGame();

function startGame() {
  resetGame();
 
}

function resetGame() {
  background = new Background(windowWidth, windowHeight, ctx);
  player = new Player(windowWidth, windowHeight, ctx);
  //quaffle = new Quaffle(windowWidth, windowHeight, ctx);
}




// Set interval
let intervalID = setInterval(() => {
  ctx.clearRect(0, 0, windowWidth, windowHeight);
  counter++

  drawAll()
  moveAll()
}, 1000 / 60);



// Función pintar todo
function drawAll() {
  background.drawBackground()
  player.drawPlayer(counter)
  quaffle.drawQuaffle()
}


// Función mover todo
function moveAll() {
background.moveBackground();
player.movePlayer()
quaffle.moveQuaffle()
}