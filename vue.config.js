// vue.config.js
const path = require('path');

module.exports = {
    //资源路径
    publicPath: '',

    //打包时去除config.log()
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        }
    },

    //打包map文件
    productionSourceMap: false,
    
    // //配置全局less，不用每个vue文件都引入
    // css: {
    //     loaderOptions: {
    //       sass: {
    //         data: `
    //           @import "@/assets/sass/common/_index.scss";
    //         `
    //       }
    //     }
    //   },
    
}

