const {resolve} = require('path');

module.exports = [
    {
        name: 'index',
        path: '/a',
        component: resolve(__dirname, 'src/pages/index.vue')
    }
]