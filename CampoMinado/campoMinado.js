class CampoMinado{
    constructor(){
        this.boardSIze = 10; 
        this.cells = []; 
        for(let y = 0; y < this.boardSIze; y++ ){
            let line = []; 
            this.cells.push(line);
            for (let x = 0; x <this.boardSIze; x++){
              let cell = {};
              line.push(cell);
          }
        }

    }
    update(){

    }
    render(){
        background(20);
        strokeWeight(10); 
        stroke(0, 0, 255);
        noFill();
        rect(0,0,windowWidth, windowHeight)
    }
}