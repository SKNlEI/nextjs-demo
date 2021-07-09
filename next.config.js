const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phash, { defaultConfig  }) => {
  return {
    reactStrictMode: true,
    env: {
      isDev: phash === PHASE_DEVELOPMENT_SERVER
    }
  }
}
