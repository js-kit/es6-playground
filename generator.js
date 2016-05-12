function *generatorExample() {
	var y = 5 * (yield)
	return y
}

var iterator = generatorExample()
var res = iterator.next()
res = iterator.next(6)
console.log('res: ' + res.value);