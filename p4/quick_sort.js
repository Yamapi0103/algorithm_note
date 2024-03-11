function quickSort(arr) {
  if (arr.length < 2) {
    return;
  }
  process(arr, 0, arr.length - 1);
}

function process(arr, L, R) {
  if (L < R) {
    let randomIndex = L + Math.floor(Math.random() * (R - L + 1));
    swap(arr, randomIndex, R);

    let [left, right] = partition(arr, L, R);
    process(arr, L, left - 1); // < 區
    process(arr, right + 1, R); // > 區
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 使用荷蘭國旗分三個區域解
// 以arr[R] 做劃分，arr[R] -> p =>  < p   ==p   >p
// 返回等於區的左邊界和右邊界 => [left, right]
function partition(arr, L, R) {
  let less = L - 1; // <區右邊界
  let more = R; // >區左邊界
  while (L < more) {
    // L 為當前數的位置
    if (arr[L] < arr[R]) {
      // 當前數小於劃分值
      swap(arr, ++less, L++);
    } else if (arr[L] > arr[R]) {
      swap(arr, --more, L);
    } else {
      L++;
    }
  }
  swap(arr, more, R);
  return [less + 1, more];
}

let array = [1, 3, 0, 4, 2, 9, 10, 8];
quickSort(array);
console.log('sorted array = ', array);
