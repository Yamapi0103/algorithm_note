function heapsort(arr) {
  if (arr.length < 2) {
    return;
  }
  // for (let i = 0; i < arr.length; i++) {
  //   // O(N)
  //   heapInsert(arr, i); // O(logN)
  // }
  for (let i = arr.length - 1; i >= 0; i--) {
    // 一樣O(N)，但比上面稍快一些
    heapify(arr, i, arr.length);
  }
  let heapSize = arr.length;
  swap(arr, 0, --heapSize);
  while (heapSize > 0) {
    // O(N)
    heapify(arr, 0, heapSize); // O(logN)
    swap(arr, 0, --heapSize); // O(1)
  }
}
