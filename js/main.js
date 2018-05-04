var perceptron;
var dataPoints = [];
var x1 = 0;
var y1 = 1 - f(x1);
var x2 = 1;
var y2 = 1 - f(x2);

var p1;
var p2;

var trainingIndex = 0;

function setup() {
  createCanvas(500, 500);
  perceptron = new Perceptron(2);

  for (var i = 0; i < 100; i++) {
    dataPoints[i] = new DataPoint();
  }
}

function draw() {
  background(255);
  rect(0, 0, width - 1, height - 1);

  // Draw prediction line
  p1 = new DataPoint(0, 1);
  p1.x = 0;
  p1.y = perceptron.predictY(p1.x);
  p2 = new DataPoint(1, 1);
  p2.y = perceptron.predictY(p2.x);
  push();
  stroke(255, 0, 255);
  strokeWeight(4);
  line(p1.pixelX(), p1.pixelY(), p2.pixelX(), p2.pixelY());
  pop();

  // Draw line
  push();
  stroke(0);
  line(x1 * width, y1 * height, x2 * width, y2 * height);
  pop();

  for (var i = 0; i < dataPoints.length; i++) {
    dataPoints[i].show();
    var inputs = [dataPoints[i].x, dataPoints[i].y];
    var predictedLabel = perceptron.predict(inputs);
    push();
    noStroke();
    if (predictedLabel == dataPoints[i].label) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    ellipse(dataPoints[i].pixelX(), dataPoints[i].pixelY(), 8, 8);
    pop();
  }
  runSingleTraining();
  // runTraining();
  // noLoop();
}

function runTraining() {
  for (var i = 0; i < dataPoints.length; i++) {
    var inputs = [dataPoints[i].x, dataPoints[i].y];
    perceptron.train(inputs, dataPoints[i].label);
  }
}

function runSingleTraining() {
  // for (var i = 0; i < dataPoints.length; i++) {
  var inputs = [dataPoints[trainingIndex].x, dataPoints[trainingIndex].y];
  perceptron.train(inputs, dataPoints[trainingIndex].label);
  trainingIndex++;
  if (trainingIndex >= dataPoints.length) {
    trainingIndex = 0;
  }
  // }
}