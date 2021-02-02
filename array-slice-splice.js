const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const slice = nums.slice(2, 6,77,78);
console.log(slice);

const splice = nums.splice(2, 4, 77, 78, 79, 80);//also can add element when you cut element from arry
console.log(splice);
console.log(nums);

const add = nums.join(',');
console.log(add);