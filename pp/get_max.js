function getMax(arr) {
  return process(arr, 0, arr.length - 1);
}

function process(arr, l, r) {
  if (l === r) return arr[l];

  let mid = l + ((r - l) >> 1);
  let left = process(arr, l, mid);
  let right = process(arr, mid + 1, r);
  return Math.max(left, right);
}

let array = [2, 4, 1, 6, 9, 10, 111];
console.log(getMax(array));
