// 某數現在處於index位置，往上繼續移動
function heapInsert(arr, index) {
  while (index > 0 && arr[index] > arr[(index - 1) >> 1]) {
    swap(arr, index, (index - 1) >> 1);
    index = (index - 1) >> 1;
  }
}

// in java, 可直接使用下列寫法，因為除法會取整數: 2.5=> 2, -0.5 => 0
// 此時到達根的兩樹必不相等
// while(arr[index] > arr[(index-1/2)])