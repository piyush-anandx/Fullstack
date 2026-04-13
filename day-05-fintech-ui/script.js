const userBalance = document.getElementById("balance-amount");
const userMonthlyExpense = document.getElementById("expense-amount");
const progressPer = document.getElementById("progress-figure");
const progressFill = document.querySelector(".progress__fill");

const accountData = {
  balance: 125000,
  monthlyExpense: 45000,
  savingsTarget: 100000,
  currentSavings: 85000,
};

function updateDashboard(userData) {
  userBalance.textContent = `₹${userData.balance}`;
  userMonthlyExpense.textContent = `₹${userData.monthlyExpense}`;
  progressPer.textContent = `${(userData.currentSavings / userData.savingsTarget) * 100}% complete`;
  progressFill.style.width = `${(userData.currentSavings / userData.savingsTarget) * 100}%`;
}

updateDashboard(accountData);
