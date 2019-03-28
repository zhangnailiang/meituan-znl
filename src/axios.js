import axios from 'axios'


//表示全局的基础域名
axios.defaults.baseURL = 'http://api.duyiedu.com';
axios.interceptors.request.use(function (config) {
    console.log (config);
    config.params = {
        ...config.params, 
        appkey: "znlxuexi_1553155994401"
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//     // 对响应数据做点什么
//     return response;
//   }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   });


export default axios;
