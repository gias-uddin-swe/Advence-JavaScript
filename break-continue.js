const nums = [1, 2, 3, 1, 5, 6, -55, -48, -78];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= 3) {
    break; // loop is stop for break ;
  } else if (nums[i] < 0) {
    continue; // ignore the element but loop is working goimg on
  }
  console.log(nums[i]);
}
