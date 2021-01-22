function add(a, b){
	let sum = a + b;
	return sum;
}

let num1 = parseInt(prompt("첫 번째 값을 입력하시오 : "));
let num2 = parseInt(prompt("두 번째 값을 입력하시오 : "));

let result = add(num1, num2);
document.write(result);