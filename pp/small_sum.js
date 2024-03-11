function smallSum(arr) {
  if (arr.length <= 1) {
    return 0;
  }
  return process(arr, 0, arr.length - 1);
}

// arr[L..R] 既要排序，也要求小和
function process(arr, L, R) {
  if (L === R) {
    return 0; // Return 0 for the base case
  }
  let mid = L + ((R - L) >> 1);
  return (
    process(arr, L, mid) + process(arr, mid + 1, R) + merge(arr, L, mid, R)
  );
}

function merge(arr, L, M, R) {
  let help = new Array(R - L + 1);
  let i = 0;
  let p1 = L;
  let p2 = M + 1;
  let sum = 0;
  while (p1 <= M && p2 <= R) {
    sum += arr[p1] < arr[p2] ? arr[p1] * (R - p2 + 1) : 0;
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= M) {
    help[i++] = arr[p1++];
  }
  while (p2 <= R) {
    help[i++] = arr[p2++];
  }
  for (i = 0; i < help.length; i++) {
    arr[L + i] = help[i];
  }

  return sum;
}

let array = [1, 3, 4, 2, 5];
console.log('small sum of array = ', smallSum(array));
