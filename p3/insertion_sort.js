function insertionSort(arr) {
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1);
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let array = [1, 3, 0, 4, 2, 9, 10, 8];
insertionSort(array);
console.log('array = ', array);
