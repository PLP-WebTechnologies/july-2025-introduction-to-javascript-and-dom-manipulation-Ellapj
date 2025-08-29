// =======================
// Part 1: Variables & Conditionals
// =======================
let isDarkMode = false;

// =======================
// Part 2: Custom Functions
// =======================
function greetUser(name) {
  return `Hello, ${name || "Guest"}! Here's your list:`;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  isDarkMode = !isDarkMode;
}

// =======================
// Part 3: Loops
// =======================
// For loop to generate list items
function generateList(name) {
  const list = document.getElementById("output-list");
  list.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i} - ${greetUser(name)}`;
    list.appendChild(li);
  }
}

// While loop for a simple countdown in console
let countdown = 3;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// =======================
// Part 4: DOM Interactions
// =======================

// 1. Change text content
document.getElementById("main-title").textContent = "JS Project Activated";

// 2. Add event listener for list generation
document.getElementById("action-btn").addEventListener("click", () => {
  const name = document.getElementById("name-input").value;
  generateList(name);
});

// 3. Add event listener for theme toggle
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);