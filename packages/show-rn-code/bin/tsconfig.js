
var tsconfig = require('../tsconfig.build.js');
var fs = require('fs');
var path = require('path')

fs.writeFileSync(
    path.resolve(process.cwd(), './tsconfig.json'),
    JSON.stringify(tsconfig)
)