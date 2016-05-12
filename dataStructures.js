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
h();

// default value as a func
function i(a = 2, b = a + 3) {
	console.log(a, b);
}
i(5);

// Destructuring array
function j() {
	return [1, 2, 3];
}
let [j1, j2] = j();
console.log(a, b);

// Destructuring object
function k() {
	return {
		k1: 1,
		k2: 2,
		k3: 3
	};
}
let {k1: k1, k2: k2} = k()
console.log(k1, k2);