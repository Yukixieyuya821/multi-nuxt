const {resolve} = require('path');

module.exports = [
    {
        name: 'index',
        path: '/main',
        component: resolve(__dirname, 'src/pages/index.vue')
    }
]