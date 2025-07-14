# 学习进度

目前仅涉及前端页面设计和语法使用，未涉及状态管理（如 Pinia、Vuex）等内容。

# 场地管理系统前端学习进度

## 1. Vue 单文件组件结构
- 使用 `<template>`, `<script setup>`, `<style scoped>` 组织页面。
- 组件数据用 `reactive` 创建响应式对象。

## 2. 路由配置
- 使用 `vue-router` 实现页面跳转。
- 在 `src/router/index.js` 配置路由：
  - `/login` 登录页
  - `/register` 注册页
  - `/dashboard` 主页面
- 默认访问 `/` 自动重定向到 `/login`
- 在 `App.vue` 里用 `<router-view />` 显示当前路由页面。

## 3. Ant Design Vue 表单与组件
- 安装并全局引入 Ant Design Vue。
- 使用 `<a-form>`, `<a-form-item>`, `<a-input>`, `<a-input-password>`, `<a-button>` 等组件快速搭建表单。
- 通过 `v-model:value` 实现输入框与数据的双向绑定。

## 4. 表单校验与事件
- 在 `<a-form-item>` 上用 `:rules` 添加必填、长度等校验规则。
- 用 `@finish` 事件处理表单提交，校验通过后跳转页面。
- 例：密码不少于6位

## 5. 页面跳转
- 使用 `useRouter` 获取路由实例，在方法中用 `router.push('/dashboard')` 跳转页面。

## 6. 样式美化
- 使用 flex 布局让表单居中：`display: flex; align-items: center; justify-content: center; min-height: 100vh;`
- 用卡片样式（白色背景、圆角、阴影、边框）包裹表单。
- 通过 `label-col` 和 `wrapper-col` 控制 label 和输入框的对齐比例。
- 按钮宽度、对齐方式可通过 class 或 style 单独控制。
- 可用深度选择器 `:deep()` 单独调整 label 位置。

## 7. 进度总结
- 已完成：
  - 登录、注册、主页面的基本结构和路由
  - 登录页表单的美化、校验、跳转
  - Ant Design Vue 基础用法
  - 页面整体布局与样式调整
- 未涉及：
  - 状态管理（如 Pinia、Vuex）
  - 后端接口对接
  - 复杂交互与数据流

---

如需继续学习注册页、dashboard 设计、表单校验、页面跳转等内容，可在此基础上扩展。
