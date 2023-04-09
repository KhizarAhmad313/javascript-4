{
  console.log(`--------------------------------`);
  console.log(`JavaScript 5 Regular Functions`);
  console.log(`--------------------------------`);

  function hello() {
    console.log(`Hello World!!!`);
  }

  function addNum(num1, num2) {
    console.log(num1 + num2);
  }

  function conditionCheck(age) {
    if (age >= 18) {
      console.log(`Eligible to Vote`);
    } else {
      console.log(`Not Eligible to Vote`);
    }
  }

  function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
      const result = i * num;
      console.log(`${num} * ${i} = ${result}`);
    }
  }

  function whileLoop(number) {
    while (number <= 5) {
      console.log(number);
      number += 1;
    }
  }

  console.log(`----------------01----------------`);
  hello();
  console.log(`----------------02----------------`);
  addNum(5, 5);
  console.log(`----------------03----------------`);
  conditionCheck(15);
  console.log(`----------------04----------------`);
  multiplicationTable(4);
  console.log(`----------------05----------------`);
  whileLoop(1);
}
{
  console.log(`--------------------------------`);
  console.log(`JavaScript 5 Arrow Functions`);
  console.log(`--------------------------------`);

  const sayHello = () => console.log(`Hello World`);

  const add = (num1, num2) => {
    console.log(num1 + num2);
  };

  const conditionCheck = (age) => {
    age >= 18
      ? console.log("Eligible for Voting")
      : console.log("not Eligible for Voting");
  };

  const multiplicationTable = (number) => {
    for (let i = 1; i <= 10; i++) {
      result = number * i;
      console.log(`${number} * ${i} = ` + result);
    }
  };

  const whileArrow = (number) => {
    while (number <= 5) {
      console.log(number);
      number += 1;
    }
  };

  console.log(`----------------01----------------`);
  sayHello();
  console.log(`----------------02----------------`);
  add(19, 3);
  console.log(`----------------03----------------`);
  conditionCheck(18);
  console.log(`----------------04----------------`);
  multiplicationTable(5);
  console.log(`----------------05----------------`);
  whileArrow(2);
}

{
  console.log(`--------------------------------`);
  console.log(`JavaScript 5 Anonymous Functions`);
  console.log(`--------------------------------`);

  const sayHello = () => {
    console.log(`Hello World!!!`);
  };

  const addNum = function (num1, num2) {
    console.log(num1 + num2);
  };

  const conditionCheck = function (age) {
    if (age >= 18) {
      console.log(`Eligible to Vote`);
    } else {
      console.log(`Not Eligible to Vote`);
    }
  };

  const multiplicationTable = function (num) {
    for (let i = 1; i <= 10; i++) {
      const result = i * num;
      console.log(`${num} * ${i} = ${result}`);
    }
  };

  const whileLoop = function (number) {
    while (number <= 5) {
      console.log(number);
      number += 1;
    }
  };

  console.log(`----------------01----------------`);
  sayHello();
  console.log(`----------------02----------------`);
  addNum(300, 13);
  console.log(`----------------03----------------`);
  conditionCheck(23);
  console.log(`----------------04----------------`);
  multiplicationTable(9);
  console.log(`----------------05----------------`);
  whileLoop(3);
}

{
  console.log(`--------------------------------`);
  console.log(`JavaScript 5 IIFE`);
  console.log(`--------------------------------`);

  (() => {
    console.log(`----------------01----------------`);
    console.log(`Hello World!!!`);
  })();

  ((num1, num2) => {
    console.log(`----------------02----------------`);
    console.log(num1 + num2);
  })(10, 60);

  ((age) => {
    console.log(`----------------03----------------`);

    if (age >= 18) {
      console.log(`Eligible to Vote`);
    } else {
      console.log(`Not Eligible to Vote`);
    }
  })(15);

  ((num) => {
    console.log(`----------------04----------------`);

    for (let i = 1; i <= 10; i++) {
      const result = i * num;
      console.log(`${num} * ${i} = ${result}`);
    }
  })(7);

  ((number) => {
    console.log(`----------------05----------------`);

    while (number <= 5) {
      console.log(number);
      number += 1;
    }
  })(4);
}

console.log(`--------------------------------`);
console.log(`Array Methods`);
console.log(`--------------------------------`);

let array = ["Khizar", "Ahmad", "Amravati", "Maharashtra", "India"];

array.push(23); //adding element to the last index of the array
console.log(array);

array.pop(); //removing the element from the last index of the array
console.log(array);

array.unshift(23); //adding element to the first index of the array
console.log(array);

array.shift(); //removing element from the first index of the array
console.log(array);
