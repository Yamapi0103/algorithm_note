function heapify(arr, index, heapSize) {
  let left = 2 * index + 1;
  while (left < heapSize) {
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest === index) {
      break;
    }
    swap(arr, largest, index);
    index = largest;
    left = 2 * index + 1;
  }
}
