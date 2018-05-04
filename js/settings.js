function label(x, y) {
  var lineY = f(x);
  if (y >= lineY) {
    return 1;
  } else {
    return -1;
  }
};


function f(x) {
  return 0.3 * x + 0.3;
}