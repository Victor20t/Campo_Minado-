
let boardSIze = 10;
let cells = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let y = 0; y < boardSIze; y++ ){
    let line = []; 
    cells.push(line);
    for (let x = 0; x <boardSIze; x++){
      let cell = {};
      line.push(cell);
  }
}
}

function draw() {
  background(20);
  strokeWeight(10); 
  stroke(0, 0, 255);
  noFill();
  rect(0,0,windowWidth, windowHeight)
}
