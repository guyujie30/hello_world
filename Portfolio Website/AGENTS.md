# AGENTS.md

## Skills
- 当前项目内置 GitHub 版 Superpowers：`.agents/skills/superpowers`。
- 工作前先检查是否有适用的 Superpowers / Codex skill；如果适用，先阅读并遵循该 skill。
- Superpowers 中 Claude Code 风格的工具名，需要按 `.agents/skills/superpowers/using-superpowers/references/codex-tools.md` 映射到 Codex 工作方式。
- 不要为了“看起来有用”随意安装外部 skills；除非用户明确要求，或任务确实需要。

## 沟通方式
- 默认中文回复；代码、命令、变量名、文件路径保持英文。
- 结论先行，简洁直接，不先铺垫背景。
- 不自动承诺不确定结果；发现方案有风险要直接说明。

## 项目概况
- 这是一个个人网站项目，当前技术栈是 `Next.js App Router + React + TypeScript + Prisma + Supabase PostgreSQL`。
- 旧的 `Vite` / `react-router-dom` 架构已经移除，不要再新增 Vite 入口或 React Router 路由。
- 页面路由位于 `src/app`。
- 复用页面视图位于 `src/views`。
- 共享组件位于 `src/components`。
- 数据读取入口位于 `src/services/content.ts`。
- Prisma 客户端位于 `src/lib/prisma.ts`。
- Prisma schema 位于 `prisma/schema.prisma`。

## 常用命令
- 安装依赖：`pnpm install`
- 开发启动：`pnpm dev`
- 生产构建：`pnpm build`
- 启动生产服务：`pnpm start`
- 生成 Prisma Client：`pnpm prisma:generate`
- 执行迁移：`pnpm prisma:migrate --name <migration-name>`
- 写入种子数据：`pnpm prisma:seed`
- 打开 Prisma Studio：`pnpm prisma:studio`

## 数据库约定
- 数据库使用 Supabase PostgreSQL。
- `DATABASE_URL` 使用 Supabase pooler 连接串，供应用运行时使用。
- `DIRECT_URL` 使用 Supabase direct connection，供 Prisma migration 使用。
- 不要把数据库连接串、密码、token 写进提交记录或公开文档。
- 修改 `prisma/schema.prisma` 后，需要运行迁移并重新生成 Prisma Client。
- 页面应通过 `src/services/content.ts` 访问数据，不要在页面组件里直接散落 Prisma 查询。

## 内容模型
- `Profile`：个人资料。
- `Project`：项目展示。
- `Note`：笔记与文章。
- 没有数据库环境变量时，页面会使用 `src/data/fallback.ts` 中的备用内容。

## 设计系统
- 网站视觉风格是 Neo-brutalism。
- 保持厚黑边、硬阴影、高饱和红黄紫、奶油背景、机械式点击反馈。
- 不使用玻璃拟态、柔和渐变、灰色弱文本、中等圆角卡片。
- 全局样式集中在 `src/styles.css`，优先复用已有类名，不要随意堆一次性样式。

## 开发规则
- 优先保持当前 Next.js App Router 架构。
- 新页面放在 `src/app/<route>/page.tsx`。
- 可复用 UI 放在 `src/components`。
- 页面级展示组件放在 `src/views`。
- 数据访问逻辑放在 `src/services`。
- 复杂数据库逻辑不要写在 React client component 中。
- 需要浏览器交互的组件才加 `"use client"`。

## Git 与红线
- 不自动 `git commit` 或 `git push`，除非用户明确要求。
- 提交前先展示将要提交的变更摘要。
- commit message 使用简洁英文。
- 删除文件、目录或 git 历史前必须先问用户，除非用户在当前上下文已明确允许。
- 修改 `.env`、密钥、token、证书、CI/CD 配置前必须先问用户。
- 不执行 `git push`、`git rebase`、`git reset --hard`、强制推送或公开发布，除非用户明确要求。

## 验证要求
- 代码变更后优先运行 `pnpm build`。
- 数据库 schema 变更后运行 Prisma migrate / generate。
- UI 变更要检查移动端与桌面端布局，避免文本溢出和元素重叠。
- 如果命令因为本地权限、网络或环境限制失败，要明确说明失败点，不要假装已验证。
