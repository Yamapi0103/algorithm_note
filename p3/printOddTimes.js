function printOddTimesNum1(arr) {
  let eor = 0;
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i];
  }
  return eor;
}

let array = [2, 1, 3, 1, 3, 1, 3, 2, 1];
console.log('odd times number = ', printOddTimesNum1(array));

function printOddTimesNum2(arr) {
  let eor = 0;
  for (let i = 0; i < arr.length; i++) {
    eor ^= arr[i];
  }

  let rightOne = eor & (~eor + 1); // 把某一個不等於0的數最右側的1提取出來
  let onlyOne = 0; // eor'
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & rightOne) === 0) {
      // 0 or 1
      onlyOne ^= arr[i];
    }
  }
  console.log('two odd times number = ', onlyOne, eor ^ onlyOne);
}

array = [2, 1, 3, 1, 3, 1, 3, 2, 1, 4];
printOddTimesNum2(array);
