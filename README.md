# 企业级 Vue3 管理系统项目结构说明

本项目采用 Vue3 + Pinia + vue-router，适合企业级管理系统开发。

## 目录结构

```
src/
├── api/           # 统一管理接口请求
│   └── index.js
├── assets/        # 静态资源（图片、样式等）
├── components/    # 公共组件
├── router/        # 路由配置（已初始化）
│   └── index.js
├── store/         # Pinia 状态管理（已初始化）
│   └── index.js
├── utils/         # 工具函数
│   └── README.md
├── views/         # 页面级组件
│   └── README.md
├── App.vue        # 根组件
└── main.js        # 项目入口，已注册 Pinia 和 vue-router
```

## 说明
- `api/`：统一管理所有与后端交互的接口请求。
- `assets/`：存放图片、全局样式等静态资源。
- `components/`：存放可复用的公共组件。
- `router/`：项目的路由配置，集中管理页面跳转。
- `store/`：Pinia 状态管理，集中管理全局状态。
- `utils/`：存放工具函数，便于全局调用。
- `views/`：页面级组件，每个页面一个文件或文件夹。
- `App.vue`：项目的根组件。
- `main.js`：项目入口文件，初始化并挂载 Vue 应用。

## 快速开始
1. 安装依赖：`npm install`
2. 启动项目：`npm run dev`
3. 访问本地地址（如 http://localhost:5173）

## 推荐开发流程
1. 在 `views/` 里新建页面（如场地管理页面）。
2. 在 `components/` 里新建可复用组件。
3. 在 `api/` 里统一管理接口请求。
4. 在 `store/` 里管理全局状态。
5. 在 `router/` 里配置页面路由。

如需进一步帮助，请随时联系开发助手！
