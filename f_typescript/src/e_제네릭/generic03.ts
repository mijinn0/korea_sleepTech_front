export const tmp = '';

//! 유니온 타입과 제네릭

// 유니온 타입(OR, |)
// : 여러 타입 중 하나가 될 수 있는 값을 의미

//? 유니온 타입을 제네릭 타입 변수에 활용
// : extends 키워드를 사용하여 확장

type StringOrNumber = string | number;

function unionGeneric<T extends StringOrNumber>(value: T) {
  // T 타입 변수에 문자열 또는 숫자형 자료형을 사용

  if (typeof value === 'string') {
    return value.toLowerCase();
  }

  return value; // 숫자 데이터 반환
}

const result1 = unionGeneric('sTrInG');
const result2 = unionGeneric(1000);

console.log(result1, result2); // string 1000

//# 제네릭 유틸리티 타입
// - TS에 내장된 제네릭의 기존 타입을 변환하거나 조작하는데 사용

//! 1) Partial(부분적인, 선택적인)
// : 모든 속성을 옵셔널로 만들어줌
// - Partial<T>

interface User {
  name: string;
  age: number;
}

type ObjectSigniture = {
  [key: number]: User // 인덱스 시그니처(서명): 키를 숫자로 가지면 값을 User타입으로 가지는 속성 정의 가능
}

const users: ObjectSigniture = {
  1: {
    name: '류민석',
    age: 24
  },
  2: {
    name: '이상혁',
    age: 30
  }
}

// 사용자 데이터를 업데이트 하는 함수 구현
// : id값을 상용하여 해당 데이터의 name 또는 age 값을 수정
function updateUser(id: number, changes: Partial<User>) {
  const user = users[id]; // User 타입의 객체: 객체의 속성값이 number이기 때문에 id값으로 지정

  if (!user) {
    console.log('해당 id의 사용자는 없습니다.');
  }

  // change 매개변수: name과 age 속성이 모두 선택적 프로퍼티
  // [경우의 수]
  // 1) name만 있는 경우: { name, age, name } >> changes의 name으로 값이 수정
  // 2) age만 있는 경우: { name, age, age } >> changes의 age로 값이 수정
  // 3) name과 age 둘 다 있는 경우: { name, age, name, age } >> 모든 값이 change로 수정
  // 4) name과 age 둘 다 없는 경우: 수정 X

  users[id] = { ...user, ...changes };
}

updateUser(1, { name: '이민형' });
console.log(users[1]); // { name: '이민형', age: 24 }
updateUser(2, { age: 29 });
console.log(users[2]); // { name: '이상혁', age: 29 }

updateUser(3, { name: '문현준' }); // 해당 id의 사용자는 없습니다.

updateUser(1, { name: '최현준', age: 26 });
console.log(users[1]); // { name: '최현준', age: 26 }

updateUser(2, {});
console.log(users[2]); // { name: '이상혁', age: 29 }

//! 2) Readonly
// : 모든 속성을 읽기 전용 속성으로 변경 (상수)
// - Readonly<T>

interface Person {
  name: string;
  age: number;
}

let user: Readonly<Person> = {
  // 값의 변경이 불가능한 속성
  name: '최우제',
  age: 22
}

// user.name = '한왕호'; // 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
// user.age = 28;

//! 3) Omit (생략하다)
// : 특정 속성을 제거한 타입을 반환
// - Omit<T, K>
//    >> T 타입에서 K 속성을 제거

interface Employee {
  id: number; // 사(원)번(호)
  name: string;
  age: number;

  position: string; // 직급
}

// interface EmployeeNotPositon {
//   id: number;
//   name: string;
//   age: number;
// }

// >> Employee 인터페이스에서 position을 빠뜨린 구조를 복사

type EmployeeWithoutPosition = Omit<Employee, 'position'>;

const newEmployee: EmployeeWithoutPosition = {
  id: 1,
  name: '류민석',
  age: 24
}

const employee: Employee = {
  id: 2,
  name: '이상혁',
  age: 30,
  position: '신'
}