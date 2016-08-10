//  enable runtime transpilation to use ES6/7 in node

const fs = require('fs');

const babelrc = fs.readFileSync('./.babelrc');
const config;

try {
	config = JSON.parse(babelrc);
} catch (err) {
	console.error('==>     ERROR: Error parsing your .babelrc.');
	console.error(err);
}

// One of the ways you can use Babel is through the require hook. 
// The require hook will bind itself to node’s require and 
// automatically compile files on the fly. This is equivalent to
// CoffeeScript’s coffee-script/register.
require('babel-register')(config);
