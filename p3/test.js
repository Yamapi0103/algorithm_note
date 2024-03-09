function generatedRandomArray(maxSize, maxValue) {
  let arr = new Array(Math.floor(Math.random() * (maxSize + 1)));
  for (let i = 0; i < arr.length; i++) {
    arr[i] =
      Math.floor(Math.random() * (maxValue + 1)) -
      Math.floor(Math.random() * maxValue);
  }
  return arr;
}

function comparator(arr) {
  arr.sort();
}

function copy(arr) {
  return arr.slice();
}

function isEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

let testTime = 500000;
let maxSize = 100;
let maxValue = 100;
let succeed = true;

for (let i = 0; i < testTime; i++) {
  let arr1 = generatedRandomArray(maxSize, maxValue);
  let arr2 = copy(arr1);
  insertionSort(arr1);
  comparator(arr2);
  if (!isEqual(arr1, arr2)) {
    succeed = false;
    break;
  }
}

console.log(succeed? 'Nice!': 'Failed!')
