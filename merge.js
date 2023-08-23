function merge(arr1, arr2) {
  let res = [];
  let a = 0;
  let b = 0;

  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] <= arr2[b]) {
      res.push(arr1[a]);
      a++;
    } else {
      res.push(arr2[b]);
      b++;
    }
  }
  while (a < arr1.length) {
    res.push(arr1[a]);
    a++;
  }

  while (b < arr2.length) {
    res.push(arr2[b]);
    b++;
  }
  return res;
}

function mergeSort(arr, low = 0, high = arr.length) {
  let mid = Math.floor((low + high) / 2);

  let left = arr.splice(0, mid);
  let right = arr;

  if (left.length <= 1 && right.length <= 1) return merge(left, right);

  if (left.length) {
    left = mergeSort(left);
  }
  if (right.length) {
    right = mergeSort(right);
  }

  return merge(left, right);
}

module.exports = { merge, mergeSort };
