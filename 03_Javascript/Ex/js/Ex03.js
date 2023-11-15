//1
let number = -7;
if(number < 0) {
    console.log('음수입니다.');
} else if(number == 0) {
    console.log('0입니다.');
} else {
    console.log('양수입니다.');
};

//2
let score = 930;
let grade = '';

if (90 <= score && score <= 100) {
    grade = 'A';
} else if(80 <= score && score <= 89) {
    grade = 'B';
} else if(70 <= score && score <= 79) {
    grade = 'C';
} else if(60 <= score && score <= 69) {
    grade= 'D'; 
} else if(0 <= score && score <= 59) {
    grade = 'F';
} else {
    console.log('잘못된 범위의 점수.');
}

console.log('등급은', grade);

//3
let skills = ['HTML', 'CSS', 'Javascript']

if (skills.includes('Javascript') && skills.includes('React')) {
    console.log('합격');
} else if(skills.includes('Javascript') || skills.includes('React')) {
    console.log('예비');
} else {
    console.log('탈락');
}