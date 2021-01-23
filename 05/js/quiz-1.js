function sumMulti(a, b){
	if (a === b){
		return a * b;
	}
	else {
		return a + b;
	}
}

var num01 = parseInt(prompt("첫 번째 수를 입력하세요."));
var num02 = parseInt(prompt("두 번째 수를 입력하세요."));
var result = console.log(sumMulti(num01, num02));