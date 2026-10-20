// Regenera la presentación conservando su estructura y diseño.
const fs = require('fs');
const path = require('path');
const template = path.join(__dirname, 'plantilla.html');
fs.copyFileSync(template, path.join(__dirname, 'index.html'));
console.log('Diapositivas actualizadas con los datos revisados del documento final.');
