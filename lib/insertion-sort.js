var array = [0, 10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(insertionSort(array));
