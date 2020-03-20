let person1 = { name: "홍길동", age: 16 };
let person2 = { name: "홍길동", age: 16 };

function equals(person1, person2) {
  return person1.name == person2.name &&
         person1.age == person2.age;
}

console.log(equals(person1, person2));
