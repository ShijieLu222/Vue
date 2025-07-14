<template>
    <a-layout style="min-height: 100vh">
      <a-layout-sider>
        <Sidebar v-model:selectedKey="activeKey" />
      </a-layout-sider>
      <a-layout-content style="padding: 24px">
        <component :is="contentMap[activeKey]" />
      </a-layout-content>
    </a-layout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Sidebar from '@/components/Sidebar.vue';
  
  const activeKey = ref('dashboard');
  
  // 这里可以用组件，也可以直接用对象
  const contentMap = {
    dashboard: {
      template: '<div><h2>仪表盘内容</h2></div>'
    },
    venue: {
      template: '<div><h2>场地管理内容</h2></div>'
    },
    booking: {
      template: '<div><h2>场地预定内容</h2></div>'
    },
    activity: {
      template: '<div><h2>活动管理内容</h2></div>'
    },
    user: {
      template: '<div><h2>用户管理内容</h2></div>'
    },
    profile: {
      template: '<div><h2>个人信息内容</h2></div>'
    },
    settings: {
      template: '<div><h2>系统设置内容</h2></div>'
    },
    logs: {
      template: '<div><h2>操作日志内容</h2></div>'
    }
  };
  </script>