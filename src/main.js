import './style.css';

// --- Technique 1: Code splitting (dynamic import) ---
// heavy.js is NOT in the first bundle. It downloads only on click.
document.getElementById('loadBtn').addEventListener('click', async () => {
  const { showHeavy } = await import('./components/heavy.js');
  showHeavy();
});

// --- Technique 2: Debouncing ---
function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// --- Technique 3: Efficient DOM rendering ---
const items = Array.from({ length: 500 }, (_, i) => `Item ${i + 1}`);
const list = document.getElementById('list');

function renderList(filter = '') {
  const fragment = document.createDocumentFragment(); // one DOM update instead of 500
  items
    .filter((item) => item.toLowerCase().includes(filter.toLowerCase()))
    .slice(0, 50)
    .forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      fragment.appendChild(li);
    });
  list.replaceChildren(fragment);
}

renderList();

document.getElementById('search').addEventListener(
  'input',
  debounce((e) => renderList(e.target.value))
);