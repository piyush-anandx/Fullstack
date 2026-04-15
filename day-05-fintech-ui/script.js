const userBalance = document.getElementById("balance-amount");
const userMonthlyExpense = document.getElementById("expense-amount");
const progressPer = document.getElementById("progress-figure");
const progressFill = document.querySelector(".progress__fill");
const userTransactions = document.getElementById("transactions-amount");

const accountData = {
  balance: 125000,
  monthlyExpense: 45000,
  savingsTarget: 100000,
  currentSavings: 85000,
};

let transactions = [
  { id: 1, type: "income", amount: 50000, category: "Salary" },
  { id: 2, type: "expense", amount: 7000, category: "Rent" },
  { id: 3, type: "expense", amount: 5000, category: "Grocery" },
  { id: 4, type: "expense", amount: 500, category: "Electricity" },
  { id: 5, type: "expense", amount: 500, category: "Recharge" },
];

function updateDashboard(userData) {
  userBalance.textContent = `₹${userData.balance}`;
  userMonthlyExpense.textContent = `₹${userData.monthlyExpense}`;
  progressPer.textContent = `${(userData.currentSavings / userData.savingsTarget) * 100}% complete`;
  progressFill.style.width = `${(userData.currentSavings / userData.savingsTarget) * 100}%`;
  userTransactions.innerHTML = `<span class="income">Income: ₹${income.reduce((sum, t) => sum + t.amount, 0)} </span>|<span class="expense"> Expense: ₹${expense.reduce((sum, t) => sum + t.amount, 0)}</span>`;
}

const income = transactions.filter((t) => t.type === "income");
const expense = transactions.filter((t) => t.type === "expense");
updateDashboard(accountData);
