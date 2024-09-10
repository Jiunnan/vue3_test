const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: './' //npm run build之後在dist/開啟index網頁時只會出現空白，必須將路徑轉到./
  publicPath: '/vue3_test/' //npm run build之後在dist/開啟index網頁時只會出現空白，必須將路徑轉到./，若要部署到github，則替換成'/專案名稱/'，如果還是空白，則修改回上方的./
})
