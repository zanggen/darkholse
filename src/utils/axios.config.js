// 处理axios 拦截器     请求拦截器   响应拦截器
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn'  //把基础地址给赋值 那以后写的时候就可以省略基础地址

// 请求拦截器
axios.interceptors.request.use(function (config) {
    // config是 axios的默认请求配置 和 传入的配置( axios里面 url:xxxx headers{} 等等 ) 结合出来的 
    // 必须将config return   不return 加载不了数据(url:xxx 这些不执行 加载不了)  
    //  return config = 加载数据之前 我们可以对config 进行一些操作
    let token = window.localStorage.getItem('user-token')
    config.headers['Authorization'] = `Bearer ${token}` //统一注入token
    return config
}, function () { });

//响应拦截器
axios.interceptors.response.use(function (response) {
    return response.data ? response.data : {}
}, function () { })






export default {
    install(Vue) {
        Vue.prototype.$axios = axios  //给Vue对象的原型属性 赋值 那么所有的vue实例都拥有了$axios
    }
}






