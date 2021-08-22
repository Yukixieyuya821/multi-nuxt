const path = require('path');
const fs = require('fs');
const dirNames = ['multi-nuxt', 'multi-nuxt-child1', 'multi-nuxt-child2']
module.exports = () => {
    let routes = [];
    // if(fs.existsSync(path.resolve(process.cwd(), 'routes.js'))) {
    //     routes = require(path.resolve(process.cwd(), 'routes.js'))
    // }
    dirNames.forEach(dirName => {
        routes.push(...require(path.resolve(process.cwd(), '..', dirName, 'routes.js')))
    })
    return routes
};