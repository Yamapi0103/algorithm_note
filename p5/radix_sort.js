function radixSort(arr) {
  if (arr.length < 2) return;
  process(arr, 0, arr.length - 1, maxBits(arr));
}

function maxBits(arr) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  let res = 0;
  while (max !== 0) {
    res++;
    max = Math.floor(max / 10);
  }
  return res;
}
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i - 1)) % 10;
}
function process(arr, l, r, digits) {
  let radix = 10;
  let i = 0,
    j = 0;
  // 有多少個數準備多少個輔助空間
  let bucket = new Array(r - l + 1);
  for (let d = 1; d <= digits; d++) {
    // 有多少位就進出幾次
    // 10個空間
    // count[0] 當前位(d位)是0的數字有多少個
    // count[1] 當前位(d位)是0和1的數字有多少個
    // count[2] 當前位(d位)是0~2的數字有多少個
    // count[i] 當前位(d位)是0~i的數字有多少個
    let count = new Array(digits).fill(0);
    for (i = l; i <= r; i++) {
      j = getDigit(arr[i], d);
      count[j]++;
    }
    for (i = 1; i < radix; i++) {
      count[i] = count[i] + count[i - 1];
    }
    for (i = r; i >= l; i--) {
      j = getDigit(arr[i], d);
      bucket[count[j] - 1] = arr[i];
      count[j]--;
    }
    for (i = l, j = 0; i <= r; i++, j++) {
      arr[i] = bucket[j];
    }
  }
}

let array = [1, 3, 0, 4, 2, 9, 10, 8];
radixSort(array);
console.log(array);
