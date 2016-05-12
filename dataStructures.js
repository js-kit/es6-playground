// Spread
let a = [2,3,4];
let b = [1, ...a, 5];
console.log(b); // [1,2,3,4,5]

// ... in func
function f(a, b, ...c) {
	console.log(a, b, c); // 1 2 [3,4,5]
}
f(1,2,3,4,5);

// args in func = real array
function g(...args) {
	args.shift();
}

// default value of args in func
function h(a = 1, b = 2) {
	console.log(a, b);
}
