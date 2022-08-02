const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000,
    proxy: {
        //名字可以自定义，这里我用的是test
        '/test': {
            target: 'https://www.qubangkeji.com', // 你请求的第三方接口
            changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
            pathRewrite: {  // 路径重写，
                '^/test': ''  // 替换target中的请求地址，也就是说以后你在请求http://localhost:8081这个地址的时候直接写成/test即可。
            }
        }
    }
}
})
