export function showHeavy() {
  const output = document.getElementById('output');
  if (output) output.textContent = 'Heavy component loaded on demand!';
}