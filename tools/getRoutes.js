const path = require('path');
const fs = require('fs');

module.exports = () => {
    let routes = [];
    if(fs.existsSync(path.resolve(process.cwd(), 'routes.js'))) {
        routes = require(path.resolve(process.cwd(), 'routes.js'))
    }
    return routes
};