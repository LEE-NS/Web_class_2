let str = '문자'
let num = 100
console.log(str, num);

/* 나이 계산기 */
let current_year = 2022;
const BIRTH_YEAR = 1993;
let current_age = current_year - BIRTH_YEAR;
console.log('나의 나이 :', current_age); 
console.log('');

/* 칼로리 계산기 */
let espresso = 10;
let milk = 170;
let chocolate_syrup = 50;
let whipped_cream = 60;
let water = 10;

const AMERICANO = espresso + water;
const LATTE = espresso + milk;
const MOCCA = espresso + chocolate_syrup + milk;
const WHIPPED_MOCCA = espresso + chocolate_syrup + milk + whipped_cream;
//제조법은 바뀌지 않으므로 상수로 선언

console.log('아메리카노의 칼로리 :' , AMERICANO, 'kcal');
console.log(LATTE);
console.log(MOCCA);
console.log(WHIPPED_MOCCA);

