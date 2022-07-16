function depositCalculator(input) {
    let amountDeposited = Number(input[0]);
    let termOfTheDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    let sum = amountDeposited + termOfTheDeposit * ((amountDeposited * annualInterestRate / 100) / 12);
    console.log(sum);
}
depositCalculator([200, 3, 5.7]);
depositCalculator([2350, 6, 7]);