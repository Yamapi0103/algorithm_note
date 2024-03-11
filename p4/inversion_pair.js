// 打印所有逆序對

function inversionPair(arr) {
  if (arr.length <= 1) {
    return 0;
  }
  return process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
  if (L === R) {
    return [];
  }
  let mid = L + ((R - L) >> 1);

  process(arr, L, mid);
  process(arr, mid + 1, R);
  merge(arr, L, mid, R);
}

function merge(arr, L, M, R) {
  let help = new Array(R - L + 1);
  let i = 0;
  let p1 = L;
  let p2 = M + 1;
  while (p1 <= M && p2 <= R) {
    if (arr[p1] > arr[p2]) {
      // 若arr[p1]比右邊已排序當前元素大，表示arr[p1..M]比所有右邊都大
      for (let j = p1; j <= M; j++) {
        console.log([arr[j], arr[p2]]);
      }
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
}

let array = [3, 2, 4, 5, 0];
console.log(inversionPair(array));
