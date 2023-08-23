function insertionSort(arr) {
  let i = 1;

  while (i < arr.length) {
    if (arr[i] < arr[i - 1]) {
      for (let j = 0; j < i; j++) {
        if (arr[j] > arr[i]) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
        }
      }
    }
    i++;
  }
  return arr;
}
module.exports = insertionSort;
