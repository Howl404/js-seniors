const user = {};

user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.surname;

function isEmpty(obj) {
  for (const key in obj) {
    return false;
  }
  return true;
}

const schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (const key in salaries) {
  sum += salaries[key];
}

console.log(sum);

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

const menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };

console.log(menu);

const calculator = {
  read() {
    this.a = +prompt("a");
    this.b = +prompt("b");
  },

  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },
};

const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};
