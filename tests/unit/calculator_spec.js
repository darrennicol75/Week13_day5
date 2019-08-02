var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  //Test for calculator add

  it('calculator.add()', function(){
    calculator.previousTotal = 1
    calculator.add(4);
    const expectedOutcome = 5;
    assert.equal(expectedOutcome, calculator.runningTotal);
  })

  //Test for calculator subtract

  it('calculator.subtract()', function(){
    calculator.previousTotal = 7
    calculator.subtract(4);
    const expectedOutcome = 3;
    assert.equal(expectedOutcome, calculator.runningTotal);
  })

  // Test for calculator multiple

  it('calculator.multiply()', function(){
    calculator.previousTotal = 3
    calculator.multiply(5);
    const expectedOutcome = 15;
    assert.equal(expectedOutcome, calculator.runningTotal);
  })

  //Test for calc divide

  it('calculator.divide()', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const expectedOutcome = 3;
    assert.equal(expectedOutcome, calculator.runningTotal);
  })

  //Test for number click

  it('calculator.numberclick()', function(){
    calculator.numberClick(2)
    calculator.numberClick(4)
    const expectedOutcome = 24;
    assert.equal(expectedOutcome, calculator.runningTotal);
  })

  //Test for operator click

  it('calculator.operatorclick()', function(){
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('*')
    calculator.numberClick(10)
    calculator.operatorClick('/')
    calculator.numberClick(10)
    calculator.operatorClick('=')
    const expectedOutcome = 3;
    assert.equal(expectedOutcome, calculator.runningTotal);
  })

  //Clear Click

  it('calculator.clearclick()', function(){
    calculator.clearClick();
    calculator.numberClick(2)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    const expectedOutcome = 4;
    assert.equal(expectedOutcome, calculator.runningTotal);
  })
});
