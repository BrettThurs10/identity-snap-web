// This script copies the CNAME file to the docs directory after each build.
// Usage: node copy-cname.cjs

const fs = require('fs');
const path = require('path');

const cnameSource = path.join(__dirname, 'CNAME');
const cnameDest = path.join(__dirname, 'docs', 'CNAME');

if (!fs.existsSync(cnameSource)) {
  console.error('CNAME file not found in project root.');
  process.exit(1);
}

fs.copyFileSync(cnameSource, cnameDest);
console.log('CNAME file copied to /docs.');
