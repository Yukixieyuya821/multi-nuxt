const path = require('path');
const fs = require('fs');
let config = {};
if(fs.existsSync(path.resolve(process.cwd(), 'serve.config.js'))) {
  config = require(path.resolve(process.cwd(), 'serve.config.js'))
}
console.log(1111)
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    extendRoutes(routes, resolve) {
      console.log(2222)
      if(process.env.isMulti) {
        const getRoute = require(resolve(process.cwd(), 'tools/getRoutes.js'))
        getRoute().forEach(c => {
          routes.push(c)
        })
      } else {
        routes.push(...require(path.resolve(process.cwd(), 'routes.js')))
      }
      // let getRoutePath = resolve(process.cwd(), 'tools/getRoutes.js')
      // if (fs.existsSync(resolve(process.cwd(), 'node_modules', 'yuki-multi-nuxt', 'tools/getRoutes.js'))) {
      //   getRoutePath = resolve(process.cwd(), 'node_modules', 'yuki-multi-nuxt', 'tools/getRoutes.js')
      // }
      // const getRoute = require(getRoutePath)
     
    }
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],
  server: {
    port: 3001
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
        proxy: true, //开启axios跨域
        // prefix: '/api', // baseURL
        credentials: true,
    },
  proxy: {
      '/api': {
          target: 'http://172.16.16.45', // 代理地址
          changeOrigin: true
      }
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'yuki-nuxt-axios-api'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel:{
      plugins: [
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
    } 
  },

  ...config
}
