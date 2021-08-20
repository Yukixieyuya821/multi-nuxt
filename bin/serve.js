#!/usr/bin/env node
const path = require('path')
global.__NUXT_PATHS__ = (global.__NUXT_PATHS__ || []).concat(__dirname)
const packagePath = path.resolve(process.cwd(), 'node_modules', 'test-multi-nuxt', 'package.json')
const suffix = require(packagePath).name.includes('-edge') ? '-edge' : ''
require('yuki-test-cli' + suffix).run()
  .catch((error) => {
    require('consola').fatal(error)
    process.exit(2)
  })
