import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const pathnameRE = new RegExp('(/wuziqi/wzq02/)', 'i')
// 个人仓信息
const isGithub = pathnameRE.test(window.location.pathname)

Vue.use(VueRouter)
export default new VueRouter({
  mode: isGithub ? 'hash' : 'history',
  base: isGithub ? window.location.pathname.replace(pathnameRE, '$1') : '/',
  routes
})
