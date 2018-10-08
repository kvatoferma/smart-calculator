class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue;
    this.priority = [];
    this.values = [];
    this.operators = [];
    this.secondaryPriority = [];
    this.secondaryValues = [];
    this.secondaryOperators = [];
    this.values.push(initialValue);
    this.result = 'hello';
  }

  calculate(count = 0) {
    if (values.length === 1) {
      this.result = values[0];
    }
    const newValues = [];
    const newOperators = [];
    const newPriority = [];
    newValues.push(this.values.unshift());
    this.priority.forEach((item, i) =>{
      if (item !== count) {
        newPriority.push(item);
        newOperators.push(this.operators[i]);
      } else {

        newValues[i] = this.operators[i](newValues[i], this.values[i]);
        newValues;
      }
    });


    return this.result;
  }


// идея:
// каждый метод операций возвращает обект вида {значения, анонимная функция - оператор, приоритет}
// функция calculate() получает этот объект и кладет её в стек
// и если приоритет получаемой операции выше, то она сдигается в очереди к началу



  addOperation(number, operation, priority) {
    this.values.push(number);
    this.operators.push(operation);
    this.priority.push(priority);
  }

  add(number) {
    this.addOperation(number, (a, b) => { return a + b }, 2);
    // например:
    // calculate({number, (a, b) => { return a + b}, 2});
    return this.calculate();
  }

  subtract(number) {
    this.addOperation(number, (a, b) => { return a - b }, 2);
    return this.calculate();
  }

  multiply(number) {
    this.addOperation(number, (a, b) => { return a * b }, 1);
    return this.calculate();
  }

  devide(number) {
    this.addOperation(number, (a, b) => { return a / b }, 1);
    return this.calculate();
  }

  pow(number) {
    this.addOperation(number, (a, b) => { return a ** b }, 0);
    return this.calculate();
  }
}

const calc = new SmartCalculator(20);
console.log(calc.add(3));
console.log(calc.subtract(5));
calc.multiply(10);
calc.devide(11);
calc.pow(7);
console.log(calc.values, calc.operators, calc.priority);





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
