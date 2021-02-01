function sum() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const result = sum();
console.log(result());
console.log(result());
console.log(result());
console.log(result());
