const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const source = path.join(root, 'src');
const output = path.join(root, 'docs');
for (const file of ['index.html', 'main.css', 'career.html', 'career.css']) {
  if (!fs.existsSync(path.join(source, file))) throw new Error(`Missing source: ${file}`);
}
fs.mkdirSync(output, { recursive: true });
fs.cpSync(source, output, { recursive: true });
console.log('Built resume and career pages in docs/');
