function bubbleSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

function swap(arr, i, j) {
  // [arr[i], arr[j]] = [arr[j], arr[i]];
  // or
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}

let array = [1, 3, 0, 4, 2, 9, 10, 8];
bubbleSort(array);
console.log('array = ', array);
