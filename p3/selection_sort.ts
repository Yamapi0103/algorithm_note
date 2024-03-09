function selectionSort(arr: number[]) {
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] > arr[minIndex] ? j : minIndex;
    }
    if (minIndex !== i) {
      swap(arr, minIndex, i);
    }
  }
}

function swap(arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let array = [1, 3, 0, 4, 2, 9, 10, 8];
selectionSort(array);
console.log('array = ', array);
