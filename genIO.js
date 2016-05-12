/**
 * Generator with IO
 */

function *genIO() {
	var y = 5 * (yield Number)
	return y
}

var iterator = genIO()
var res = iterator.next()
console.log('res: ' + res.value);
if (res.value == Number) {
	res = iterator.next(6)
	console.log('res: ' + res.value);
} else {
	console.log('dont know how to respond')
}
