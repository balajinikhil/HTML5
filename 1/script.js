function alg(a, b, sqr) {
  if (sqr == 1) {
    return a, b;
  } else if (sqr == 2) {
    ans = a * a + b * b + 2 * a * b;
    return ans;
  } else {
    return `return a valid sequence`;
  }
}
let ques = alg(1, 1, 2);
console.log(ques);
