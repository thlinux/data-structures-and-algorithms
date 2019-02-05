function sumZero(array) {
  var map = new Map();

  for (let i = array.length - 1; i > 0; i--) {
    if (array[i] < 0) {
      if (map.get(Math.abs(array[i]))) {
        return [Math.abs(array[i]), array[i]];
      }
    } else {
      map.set(i, i);
    }
  }
  return undefined;
}

console.log(sumZero([-7, -3, -1, 0, 4, 5, 6, 7]));