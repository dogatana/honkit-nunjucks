const nunjucks = require('nunjucks')

console.log(nunjucks);

const config = { 'edition': 'admin' };
const text = nunjucks.render('README.html', { 'config': config });
console.log(text);
