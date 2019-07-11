var fantasygoldjs = require('bitcoinjs-lib')

Object.assign(fantasygoldjs.networks, require('./networks'))

fantasygoldjs.utils = require('./utils')

module.exports = fantasygoldjs