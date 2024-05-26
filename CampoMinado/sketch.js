let game = new CampoMinado();

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  game.update();
  game.render();
}
