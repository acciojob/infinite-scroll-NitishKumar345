//your code here!
const list = document.getElementById("infi-list");
let itemCount = 1;

// Function to add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount++}`;
    list.appendChild(li);
  }
}

// Initial 10 items
addItems(10);

// Scroll detection on window
window.addEventListener("scroll", () => {
  const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

  if (scrollBottom) {
    addItems(2); // Add 2 more items when reaching the bottom
  }
});
