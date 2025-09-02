# jincheng-campus-admin

🎛️ 金橙校园管理后台 - 基于 Vue Vben Admin

## 📋 项目介绍

金橙校园项目的管理后台系统，基于优秀的 [Vue Vben Admin](https://github.com/vbenjs/vue-vben-admin) 模板构建，提供用户管理、内容审核、数据统计等功能，支持对整个校园服务平台的全面管理。

## 🛠️ 技术栈

- **框架**: Vue 3 + TypeScript
- **UI库**: Ant Design Vue + Element Plus + Naive UI + Shadcn UI
- **路由**: Vue Router 4
- **状态管理**: Pinia
- **构建工具**: Vite
- **单体仓库**: Monorepo (pnpm workspace)
- **工具库**: @vueuse/core, dayjs
- **HTTP客户端**: Axios

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

管理后台将在 http://localhost:5173 启动

### 构建生产版本

```bash
pnpm build
```

## 📁 项目结构 (Monorepo)

```
├── apps/                # 应用目录
│   ├── web-antd/       # Ant Design 版本 (主要开发版本)
│   └── backend-mock/   # Mock API 服务
├── packages/           # 公共包
├── internal/           # 内部工具
├── docs/              # 文档
└── playground/        # 演示
```

## 🌟 主要功能

- 🏠 **仪表盘**: 数据概览和快速操作
- 👥 **用户管理**: 用户信息管理和权限控制
- 📝 **内容管理**: 失物招领、闲置交易等内容审核
- 💬 **评论管理**: 评论审核和管理
- 📊 **数据统计**: 各类数据的图表展示
- ⚙️ **系统设置**: 系统参数配置
- 🎨 **多主题**: 支持明暗主题切换
- 🌍 **国际化**: 多语言支持
- 📱 **响应式**: 完美适配移动端

## 🔧 开发命令

```bash
pnpm dev            # 启动开发服务器
pnpm build          # 构建生产版本
pnpm preview        # 预览构建结果
pnpm lint           # 代码检查
pnpm format         # 代码格式化
pnpm typecheck      # 类型检查
```

## 📱 默认账号

- 用户名: `vben`
- 密码: `123456`

## 🔗 相关链接

- [Vue Vben Admin 官网](https://www.vben.pro)
- [Vue Vben Admin GitHub](https://github.com/vbenjs/vue-vben-admin)
- [金橙校园前端项目](../jincheng-campus)
- [金橙校园后端API](../jincheng-campus-api)

## 📄 许可证

MIT License

---

基于 [Vue Vben Admin](https://github.com/vbenjs/vue-vben-admin) 构建
