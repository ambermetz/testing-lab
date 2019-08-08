let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
  // Set up a test below...
  test("The ChangeHandler class is defined.", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });
  test("The amountDue is equal to 100", function() {
    const changeHandler = new ChangeHandler(100);
    expect(changeHandler.amountDue).toBe(100);
  });
  test("cashTendered is set to 0", function() {
    const changeHandler = new ChangeHandler(100);
    expect(changeHandler.cashTendered).toBe(0);
  });
  test("Insert a penny adds 1 to cash tendered", function() {
    const vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("penny");
    expect(vendingMachine.cashTendered).toBe(1);
  });
  test("Insert a nickle adds 5 to cash tendered", function() {
    const vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("nickel");
    expect(vendingMachine.cashTendered).toBe(5);
  });
  test("Insert a dime adds 5 to cash tendered", function() {
    const vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("dime");
    expect(vendingMachine.cashTendered).toBe(10);
  });
  test("Insert a quarter adds 5 to cash tendered", function() {
    const vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.cashTendered).toBe(25);
  });
  test("Calling function multiple times continues to add on to the amount.", function() {
    const vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("dime");
    expect(vendingMachine.cashTendered).toBe(40);
  });
  test("Calling function multiple times continues to add on to the amount.", function() {
    const vendingMachine = new ChangeHandler(105);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("penny");
    expect(vendingMachine.cashTendered).toBe(61);
  });
  //   test("Returns true if cashTendered more than amountDue.", function() {
  //     const vendingMachine = new ChangeHandler(105);
  //     vendingMachine.giveChange(true);
  //     expect(vendingMachine.cashTendered).toBe(true);
  //   });
  test("Returns false if cashTendered less than amountDue.", function() {
    const vendingMachine = new ChangeHandler(130);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.isPaymentSufficient()).toBe(false);
  });
  test("Returns true if cashTendered more than amountDue", function() {
    const vendingMachine = new ChangeHandler(130);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.isPaymentSufficient()).toBe(true);
  });
  test("Returns true if cashTendered more than amountDue", function() {
    const vendingMachine = new ChangeHandler(130);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("nickel");
    expect(vendingMachine.isPaymentSufficient()).toBe(true);
  });
  test("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", function() {
    const vendingMachine = new ChangeHandler(50);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    expect(vendingMachine.giveChange()).toEqual({
      Quarters: 1,
      Dimes: 0,
      Nickels: 1,
      Pennies: 2
    });
  });
  test("10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", function() {
    const vendingMachine = new ChangeHandler(20);
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("dime");
    expect(vendingMachine.giveChange()).toEqual({
      Quarters: 0,
      Dimes: 1,
      Nickels: 0,
      Pennies: 0
    });
  });
  test("27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.", function() {
    const vendingMachine = new ChangeHandler(30);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    expect(vendingMachine.giveChange()).toEqual({
      Quarters: 1,
      Dimes: 0,
      Nickels: 0,
      Pennies: 2
    });
  });
  test("68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.", function() {
    const vendingMachine = new ChangeHandler(32);
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    expect(vendingMachine.giveChange()).toEqual({
      Quarters: 2,
      Dimes: 1,
      Nickels: 1,
      Pennies: 3
    });
  });
});
