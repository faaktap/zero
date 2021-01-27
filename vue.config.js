module.exports = {
  devServer: {
    disableHostCheck: true,
  },
  transpileDependencies: [
    'vuetify',
  ],
  chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "KuiliesOnline Resources";
              return args;
          })
  }  
}
