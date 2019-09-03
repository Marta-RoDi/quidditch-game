//Función nº Random
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let posY = 200
let boxHeight = 50
let posY2
let tries = 0

do {
  tries++
  posY2 = randomInt(100, 300)
  console.log("tries: " + tries)
  console.log("trying in: " + posY2)
} while (posY2 >= posY - boxHeight && posY2 <= posY + boxHeight)

console.log("first position of box is: " + posY)
console.log("new position not touching previous box is: " + posY2)