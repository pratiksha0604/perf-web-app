import './style.css';
import { debounce } from './utils.js';

// --- Code splitting: heavy.js loads only on click, with error handling ---
const loadBtn = document.getElementById('loadBtn');
if (loadBtn) {
  loadBtn.addEventListener('click', async () => {
    try {
      const { showHeavy } = await import('./components/heavy.js');
      showHeavy();
    } catch (e) {
      console.error(e);
      const output = document.getElementById('output');
      if (output) output.textContent = 'Failed to load the feature. Please try again later.';
    }
  });
}

// --- Efficient list rendering with DocumentFragment ---
const items = Array.from({ length: 500 }, (_, i) => `Item ${i + 1}`);
const list = document.getElementById('list');

function renderList(filter = '') {
  if (!list) return;
  const fragment = document.createDocumentFragment();
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

// --- Debounced search ---
const search = document.getElementById('search');
if (search) {
  search.addEventListener(
    'input',
    debounce((e) => renderList(e.target.value))
  );
}