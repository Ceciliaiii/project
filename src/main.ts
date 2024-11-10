import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import axios from 'axios'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入模板全局样式
import '@/styles/index.scss'

const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn  //  element-plus国际化
})
// svg插件需要的配置代码
import 'virtual:svg-icons-register'
// 引入自定义插件对象：注册整个项目全局组件
import globalComponent from '@/components'

// 安装自定义插件
app.use(globalComponent)



app.mount('#app')
