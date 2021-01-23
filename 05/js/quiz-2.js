function compareNum(a, b){
	if (a > b){
		alert(`${a}(이)가 ${b}보다 큽니다.`);
	}
	else if(a < b) {
		alert(`${b}(이)가 ${a}보다 큽니다.`);
	}
	else {
		alert(`${a}와 ${b}가 같습니다.`);
	}
}

var num01 = parseInt(prompt("비교할 첫 번째 수를 입력하세요."));
var num02 = parseInt(prompt("비교할 두 번째 수를 입력하세요."));
compareNum(num01, num02);