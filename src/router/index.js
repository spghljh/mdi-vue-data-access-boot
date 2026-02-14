// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import PstmtIndex from '../views/Pstmt/PstmtIndex.vue'
import PstmtCsrCpuTotal from '../views/Pstmt/PstmtCsrCpuTotal.vue'
import PstmtCsrDeviceTotal from '../views/Pstmt/PstmtCsrDeviceTotal.vue'
import PstmtCsrMemberTotal from '../views/Pstmt/PstmtCsrMemberTotal.vue'

const routes = [
  { path: '/', component: HomeView },

  { path: '/pstmt', component: PstmtIndex },

  { path: '/pstmt/csr/cpus', component: PstmtCsrCpuTotal },
  { path: '/pstmt/csr/devices', component: PstmtCsrDeviceTotal },
  { path: '/pstmt/csr/members', component: PstmtCsrMemberTotal },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

