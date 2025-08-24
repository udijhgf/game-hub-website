// money.js – simple virtual currency system shared across all pages

// Return current balance from localStorage (default to 0)
function getBalance() {
  const bal = parseInt(localStorage.getItem('balance'), 10);
  return isNaN(bal) ? 0 : bal;
}

// Set the balance in localStorage
function setBalance(amount) {
  localStorage.setItem('balance', String(amount));
}

// Initialize the balance if it doesn't exist. Called on first page load.
function initBalance() {
  if (localStorage.getItem('balance') === null) {
    // Start users off with $10,000 virtual dollars
    setBalance(10000);
  }
}

// Update any on‑page element showing the current balance
function updateBalanceDisplay() {
  const displaySpan = document.getElementById('balance-display');
  if (displaySpan) {
    displaySpan.textContent = getBalance().toLocaleString();
  }
}

// Deduct a cost from the player's balance. Returns true if successful.
function spend(cost) {
  const current = getBalance();
  if (current >= cost) {
    setBalance(current - cost);
    updateBalanceDisplay();
    return true;
  }
  return false;
}