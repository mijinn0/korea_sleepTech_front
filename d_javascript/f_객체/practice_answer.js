//? 문제 1
console.log('=== 문제 1 ===');
let person = {
  name: '박미진',
  age: 29,
  isStudent: false
}

let fruits = ['apple', 'banana', 'peach', 'orange'];
console.log(fruits[1]);

function add(num1, num2) {
  return num1 + num2;
}

//? 문제 2
console.log('=== 문제 2 ===');

for (let key in person) {
  // (let 변수명 in 객체명)
  // : 객체를 순회하며 객체의 키(key)들을 변수에 할당

  // 객체의 값에 접근: 객체명[키명]
  console.log(`${key}: ${person[key]}`); 
}

let array = [1, 2, 3, 4, 5];
for (let num in array) {
  // (let 변수명 in 배열명)
  // : 배열을 순회하며 각 요소의 인덱스를 변수에 할당

  // 배열의 요소에 접근: 배열명[인덱스값]
  console.log(array[num]);
}

let upperCaseFruits = fruits.map(function(value, index, array) {
  // 반환되는 새로운 배열에는 이전 배열의 요소값을 대문자로 변환하여 저장
  return value.toUpperCase();
});

// cf) 배열 메서드의 콜백 함수는 주로 화살표 함수 형태 사용
fruits.map(value => value.toUpperCase());

console.log(upperCaseFruits); // [ 'APPLE', 'BANANA', 'PEACH', 'ORANGE' ]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function combineArrays(arr1, arr2) {
  // arr1을 전체 순회: 각 요소의 값과 그 요소의 인덱스번호 추출
  // >> 인덱스 번호값을 통해 동일한 인덱스의 arr2 값을 추출

  let result = arr1.map((element, index) => {
    return element + arr2[index];
  });

  return result;
}

console.log(combineArrays(arr1, arr2)); // [ 5, 7, 9 ]

//? 문제 3
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let personCopy = deepCopy(person);

personCopy.name = '홍길동';
console.log(person); // { name: '박미진', age: 29, isStudent: false }

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Doe", age: 18 }
];

// 사용자 리스트에서 성인 사용자 필터링 + 이름값 추출
function adultUserNames(users) {
  return users
    // 배열의 각 요소의 타입: 객체 (user의 타입: 객체)
    .filter(user => user.age >= 18)
    .map(user => user.name);
}

console.log(adultUserNames(users)); // [ 'John', 'Doe' ]