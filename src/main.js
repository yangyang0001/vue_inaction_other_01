// 导入 vue
import Vue from 'vue'

// 导入组件
// import App from './App.vue'
import Test from './Test.vue'

Vue.config.productionTip = false

new Vue({
  // render 函数, 将指定的组件渲染到 html 页面中, 替换 id="app" 的DOM元素!
  // render: h => h(App),
  render: h => h(Test),
}).$mount('#app')
