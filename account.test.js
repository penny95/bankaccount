const BankAccount = require('./account');
myaccount=new BankAccount("PenelopeNinsiima", 9080000326001, 3000, "open");
test('It should return the correct balance', ()=>{
    expect(myaccount.getBalance()).toBe(3000);
});
test('It should add deposited amount from the bank amount', ()=>{
    expect(myaccount.deposit(400)).toBe("Your new balance "+3400);
});
test('It It should deduct withdrawn amount from the bank amount', ()=>{
    expect(myaccount.withdraw(400)).toBe("You have withdrawn " + 400+ " your remaining balance is "+2600);
});

test('It should not accept user to withdraw more money than in account', ()=>{
    expect(myaccount.withdraw(3400)).toBe('Insufficient funds');
});
test('It should not accept deposit of zero or below', ()=>{
    expect(myaccount.deposit(0)).toBe('Invalid input:Amount should be greater than zero');
});

test('It should return the correct account details', ()=>{
    expect(myaccount.open()).toStrictEqual({'name':'PenelopeNinsiima','accNo':9080000326001,'status':'open','balance':3000});
});
