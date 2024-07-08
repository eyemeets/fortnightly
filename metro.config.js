
/* eslint-disable @typescript-eslint/no-var-requires */
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

const defaultConfig = getDefaultConfig(__dirname)

const config = {
  ...defaultConfig,
  // Additional custom configuration:
  resolver: {
    ...defaultConfig.resolver
  }
}

module.exports = config

