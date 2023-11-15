//4
let n = 11;
let is_prime = true;

if(n == 1) {
    is_prime = false;
}
for (let i = 2; i < n; i++) {
    if(n % i == 0) {
        is_prime = false;
    }           
}
console.log('입력한 숫자 : ', n, '은 소수이다.', is_prime);

//5
// while 반복문 작성시 변수 초기화를 염두에 두자.

//6
for(let i = 2; i < 10; i += 2) {
    for(let j = 1; j < 10; j++) {
        console.log(i, 'x', j, '=', i*j);
        if(i <= j) {
            break;
        }
    }
}

//3
// 1부터 50까지 369의 결과를 출력
for(let i = 1; i <= 50; i++) {
    let string_v = i.toString()
    let result = "";
    for(let j = 0; j < string_v.length; j++) {
        if(string_v[j] == '3' || string_v[j] == '6' || string_v[j] == '9') {
            result += '짝';
        }
    }
    console.log(result.length > 0 ? result : i);
}