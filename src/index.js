class SmartCalculator {
  constructor(initialValue) {
    this.stack = initialValue;
    this.previousOperation = {value: null, func: null, priority: null};
    this.currentOperation = {value: null, func: null, priority: null};
  }

  previousIsEmpty() {
    const isNull = value => {
      return (value === null) || false;
    }
      let values = Object.values(this.previousOperation);
      return values.reduce((acc, item) => {
        return acc && isNull(item);
      }, true);
    }


  calculate() {
    return this.currentOperation.func(this.stack,this.currentOperation.value);
  }

  calculateWithPriority() {
    return checkPriority() ? calculate() : swapOperations();
  }

  swapOperations() {}

  checkPriority() {
    return this.currentOperation.priority < this.previousOperation.priority || false;
  }

  setOperation(number, func, priority) {
    this.currentOperation.value = number;
    this.currentOperation.func = func;
    this.currentOperation.priority = priority;
  }

  add(number) {
    this.setOperation(number, (a, b) => { return a + b }, 2);
    return (this.previousIsEmpty()) ? this.calculate() : this.calculateWithPriority();
  }

  subtract(number) {
    this.setOperation(number, (a, b) => { return a - b }, 2);
    this.calculate();
  }

  multiply(number) {
    this.setOperation(number, (a, b) => { return a * b }, 1);
    this.calculate();
  }

  devide(number) {
    this.setOperation(number, (a, b) => { return a / b }, 1);
    this.calculate();
  }

  pow(number) {
    this.setOperation(number, (a, b) => { return a ** b }, 0);
    this.calculate();
  }
}

const calc = new SmartCalculator(20);
console.log(calc.stack);
console.log(calc.add(3));
console.log(calc.currentOperation);
console.log(calc.subtract(5));
calc.multiply(10);
calc.devide(11);
calc.pow(7);






// this.operations = {
//   add: function(a, b) { return a + b },
//   subtract: function(a, b) { return a - b },
//   multiply: function(a, b)  { return a * b },
//   divide: function(a, b) { return a / b },
//   power: function(a, b) { return a ** b }
// }
//
// function stackFactory() {
//   values = [];
//   operators = [];
//   const addValue = value => {
//     values.push(value);
//   }
//   const addOperator = operator => {
//     operators.push(operator);
//   }
//   return {values, operators, addValue, addOperator}
// }





// const operators = {
//   add: function(a, b) { return a + b },
//   subtract: function(a, b) { return a - b },
//   multiply: function(a, b)  { return a * b },
//   divide: function(a, b) { return a / b },
//   power: function(a, b) { return a ** b }
// }
//
// let c = 10;
// let d = 2;
// const ops = Object.values(operators);
// let res = ops.map(item => {
//   return item(c, d);
// });





// module.exports = SmartCalculator;
