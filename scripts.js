function setup() {
    createCanvas(800, 600);
    input = createInput();
    input.position(20, 20);
    input.size(50);
    button = createButton('Sort');
  button.position(80, 20);
}

function draw() {
    background(240);
    strokeWeight(5); 
  stroke('red'); 
  var x = 5;
  var y =600;
  for (var i = 0; i < values.length; i++) {
    line(x, y, x, height - values[i]);
    x += 10
    ;
  }

}