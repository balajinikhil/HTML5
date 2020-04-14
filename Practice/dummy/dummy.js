function convertToFarhaneit(cel) {
  let far = (cel * 9) / 5 + 32;
  return far;
}

console.log(`convert to farhaneit :`, convertToFarhaneit(20));

// factorize a number

function factorize(num) {
  if (num == 0 || num == 1) {
    return 1;
  } else {
    for (let i = num - 1; i > 0; i--) {
      num = num * i;
    }
    return num;
  }
}

console.log(`factorize :`, factorize(5));

// return largest numbers in array

function largestNumbersInArray(arr) {
  let garr = arr;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > garr[i][j]) {
        garr[i][j] == arr[i][j];
      }
    }
  }
  return garr;
}

console.log(
  `largest array :`,
  largestNumbersInArray([[3, 4, 5], [5, 6, 7], [4, 5, 6], [45, 65, 78]])
);
