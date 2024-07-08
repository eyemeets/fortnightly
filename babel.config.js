module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      ['module:react-native-dotenv', {
        'moduleName': '@env',
        'path': '.env',
        'blacklist': null,
        'whitelist': null,
        'safe': false,
        'allowUndefined': true
      }],
      'react-native-paper/babel'
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel']
      }
    }
  }
}
