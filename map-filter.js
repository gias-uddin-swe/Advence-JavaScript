const numbers = [12, 5, 54, 54, 2, 3, 5];
const squar = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
  squar.push(result);
}

console.log(squar);

// USeing Map

function element(element) {
  return element * element;
}
const result = numbers.map(element);
console.log(result);

const result = numbers.map((x) => x * x);
console.log(result);

// now talking about filter

const result = numbers.filter((x) => x > 5);
console.log(result);
//filter give an arry as a result
const result = numbers.find((x) => x < 5);
console.log(result);

// find  arry er modde theke aktai number k show korbe kono arry diby nah
// find kase j ta k pabe shei akta kei diby 


/ map and filter and find hosse arry er moddhe loop chaliya  j kono kaj korte pare 
