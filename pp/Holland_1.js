function Holand_1(arr, num) {
  if (arr.length < 2) {
    return arr;
  }
  let l = -1;
  let r = arr.length - 1;
  let index = 0;
  while (index < r) {
    if (arr[index] <= num) {
      swap(arr, ++l, index++);
    } else {
      index++;
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
let array = [3, 5, 6, 74, 3, 5, 8];
let pivot = 5
Holand_1(array, pivot)
console.log(array);
