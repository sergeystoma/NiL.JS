function test(x) {
	var result = (a,b) => this.value;
	return result;
}

console.log(test.call({ value: 'hello' })());