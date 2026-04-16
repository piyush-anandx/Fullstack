const userBalance = document.getElementById("balance-amount");
const userMonthlyExpense = document.getElementById("expense-amount");
const progressPer = document.getElementById("progress-figure");
const progressFill = document.querySelector(".progress__fill");
const userTransactions = document.getElementById("transactions-amount");
const overlay = document.getElementById("loading-overlay");
const transactionsContainer = document.getElementById("transactions-container");
const search = document.getElementById("search");

const accountData = {
  balance: 125000,
  monthlyExpense: 45000,
  savingsTarget: 100000,
  currentSavings: 85000,
};

let transactions = [
  { id: 1, type: "income", amount: 50000, category: "salary" },
  { id: 2, type: "expense", amount: 7000, category: "rent" },
  { id: 3, type: "expense", amount: 5000, category: "grocery" },
  { id: 4, type: "expense", amount: 500, category: "electricity" },
  { id: 5, type: "expense", amount: 500, category: "recharge" },
];

const income = transactions.filter((t) => t.type === "income");
const expense = transactions.filter((t) => t.type === "expense");

function updateDashboard(userData) {
  userBalance.textContent = `₹${userData.balance}`;
  userMonthlyExpense.textContent = `₹${userData.monthlyExpense}`;
  progressPer.textContent = `${(userData.currentSavings / userData.savingsTarget) * 100}% complete`;
  progressFill.style.width = `${(userData.currentSavings / userData.savingsTarget) * 100}%`;
  userTransactions.innerHTML = `<span class="income">Income: ₹${income.reduce((sum, t) => sum + t.amount, 0)} </span>|<span class="expense"> Expense: ₹${expense.reduce((sum, t) => sum + t.amount, 0)}</span>`;
}

function renderTransactions(lists) {
  let html = "";
  lists.map((list) => {
    const colorText = list.type === "expense" ? "red" : "green";
    html += `<div class="card ${colorText}"><p class="card_heading">${list.category}</p><p class="card_figure">₹${list.amount}</p></div>`;
  });
  transactionsContainer.innerHTML = html;
}

search.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filter = transactions.filter((transaction) => {
    return transaction.category.toLocaleLowerCase().includes(value);
  });
  renderTransactions(filter);
});

setTimeout(() => {
  updateDashboard(accountData);
  overlay.classList.add("hidden");
  renderTransactions(transactions);
}, 2000);
