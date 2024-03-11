// 逆序對問題

function inversionPairCount(arr) {
  if (arr.length <= 1) {
    return 0;
  }
  return process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
  if (L === R) {
    return 0;
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
  let count = 0;
  while (p1 <= M && p2 <= R) {
    if (arr[p1] > arr[p2]) {
      count += M - p1 + 1;
    }
    help[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++]; // 由大到小排序
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
  return count;
}

let array = [3, 2, 4, 5, 0];
console.log(inversionPairCount(array));
