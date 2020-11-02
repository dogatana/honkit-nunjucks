const nunjucks = require('nunjucks')

console.log(nunjucks);

const text = nunjucks.render('README.html', { 'edition': 'admin' });
console.log(text);
