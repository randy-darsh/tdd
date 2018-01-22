var array = [0, 10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

bubbleSort(array);
console.log(array);
