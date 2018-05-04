function Perceptron(inputLength) {
  this.weights = [];
  this.learningRate = 0.01;
  for (var i = 0; i <= inputLength; i++) {
    this.weights.push(random(-1, 1));
  }
}

Perceptron.prototype.predict = function(inputs) {
  // y = sum of all inputs[i] * weights[i]
  var prediction = 0;
  for (var i = 0; i < inputs.length; i++) {
    prediction += inputs[i] * this.weights[i];
  }
  prediction += this.weights[inputs.length];
  return this.activation(prediction);
};

Perceptron.prototype.predictY = function(x) {
  return -1 * ((this.weights[2] / this.weights[1]) + (this.weights[0] / this.weights[1]) * x);
};



// Activation function
Perceptron.prototype.activation = function(input) {
  if (input >= 0) {
    return 1;
  } else {
    return -1;
  }
};


Perceptron.prototype.train = function(inputs, output) {
  var prediction = this.predict(inputs);
  var error = output - prediction;
  for (var i = 0; i < this.weights.length - 1; i++) {
    this.weights[i] += error * inputs[i] * this.learningRate;
  }
  this.weights[this.weights.length - 1] += error * this.learningRate;
};

Perceptron.prototype.batchTrain = function(inputOutputBatch) {
  for (var i = 0; i < inputOutputBatch.length; i++) {
    this.train(inputOutputBatch[i].inputs, inputOutputBatch[i].label);
  }
};