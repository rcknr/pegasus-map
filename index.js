const fetch = require('node-fetch');
const fs = require('fs');

fetch('https://tle.ivanstanojevic.me/api/tle/42784')
  .then(response => response.json())
  .then(({ name, line1, line2 }) => {
    const tle = [name, line1, line2].join('\\n');
    fs.writeFile('dist/pegasus.js', `window._tle = "${tle}";\n`, e => console.error(e));
  });
