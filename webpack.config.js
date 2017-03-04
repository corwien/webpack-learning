module.exports = {
  devtool:"sourcemap",
  entry:"./js/entry.js",
  output:{
    filename:"bundle.js"
  },
  module: {
    loaders:[
      {
        test: /\.css$/,
      //  loader: 'style!css'//添加对样式表的处理
        loader: 'style-loader!css-loader'//添加对样式表的处理
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/    // 将这个目录忽略掉，将加快加载速度

      },
      {
        test:/\.vue$/,
        loader:'vue'
      }
   ]
 },
 resolve:{
   alias:{
     'vue$':'vue/dist/vue.js'
   }
 }
};
