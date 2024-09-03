const arr = [1, 2, [3, 4, 5]];
const x = [...arr];
x[2][0] = 9;
console.log(arr);