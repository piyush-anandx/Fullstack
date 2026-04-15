const account = {
  balance: 1000,
};

function withdraw(withdrawAmount) {
  if (this.balance >= withdrawAmount) {
    return (this.balance = this.balance - withdrawAmount);
  } else {
    console.log(`Insufficient Balance`);
  }
}

account.withdraw = withdraw;

account.withdraw(300);
console.log(account.balance);
