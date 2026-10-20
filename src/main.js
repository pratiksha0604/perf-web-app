import { debounce } from './utils.js';

const app = document.querySelector('#app');

app.innerHTML = Array.from({ length: 6 }, (_, i) => `
  <div class="card">
    <h2>Item ${i + 1}</h2>
    <img src="/images/sample.jpg" alt="Sample ${i + 1}"
         width="600" height="400" loading="lazy" decoding="async" />
  </div>
`).join('');

const btn = document.createElement('button');
btn.textContent = 'Load extra feature';
btn.onclick = async () => {
  const { showMessage } = await import('./components/extra.js');
  showMessage();
};
app.appendChild(btn);

window.addEventListener('scroll', debounce(() => {
  console.log('scrolled');
}, 300));