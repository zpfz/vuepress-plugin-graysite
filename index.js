const { path } = require('@vuepress/shared-utils')

module.exports = (options) => ({
  define: {
    startDate: options.startDate,
    endDate: options.endDate
  },
  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js')
})