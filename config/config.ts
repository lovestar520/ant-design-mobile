import { components } from './components'

const pxToRem = require('postcss-pxtorem')

export default {
  mode: 'site',
  title: 'Ant Design Mobile',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/cadedaff-8c88-4af2-870f-0574d322761c.svg',
  favicon:
    'https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*ShzFT47r_F8AAAAAAAAAAAAAARQnAQ',
  navs: {
    'en': [
      {
        title: 'Guide',
        path: '/guide',
      },
      {
        title: 'Components',
        path: '/components',
      },
      {
        title: 'Discover More',
        children: [
          {
            title: 'Roadmap',
            path: 'https://github.com/ant-design/ant-design-mobile/discussions/3924',
          },
          {
            title: 'Contributing',
            path: 'https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md',
          },
        ],
      },
      {
        title: 'Legacy version',
        children: [
          {
            title: 'v2',
            path: 'https://antd-mobile-v2.surge.sh',
          },
          {
            title: 'v3 alpha',
            path: 'https://antd-mobile-v3.surge.sh',
          },
        ],
      },
      {
        title: 'Playground',
        path: 'https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json',
      },
      {
        title: 'Releases',
        path: 'https://github.com/ant-design/ant-design-mobile/releases',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/ant-design/ant-design-mobile',
      },
    ],
    'zh': [
      {
        title: '指南',
        path: '/zh/guide',
      },
      {
        title: '组件',
        path: '/zh/components',
      },
      {
        title: '了解更多',
        children: [
          {
            title: 'Roadmap',
            path: 'https://github.com/ant-design/ant-design-mobile/discussions/3924',
          },
          {
            title: '参与贡献',
            path: 'https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md',
          },
        ],
      },
      {
        title: '返回旧版',
        children: [
          {
            title: 'v2',
            path: 'https://antd-mobile-v2.surge.sh',
          },
          {
            title: 'v2 国内站点',
            path: 'https://antd-mobile-doc-v2.gitee.io',
          },
          {
            title: 'v3 alpha',
            path: 'https://antd-mobile-v3.surge.sh',
          },
        ],
      },
      {
        title: '在线体验',
        path: 'https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json',
      },
      {
        title: '发布日志',
        path: 'https://github.com/ant-design/ant-design-mobile/releases',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/ant-design/ant-design-mobile',
      },
    ],
  },
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/zh': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: 'Quick Start',
        path: '/guide/quick-start',
      },
      {
        title: 'FAQ',
        path: '/guide/faq',
      },
      {
        title: 'CSS Variables',
        path: '/guide/css-variables',
      },
      {
        title: 'Theme',
        path: '/guide/theme',
      },
      {
        title: 'Load on Demand',
        path: '/guide/import-on-demand',
      },
      {
        title: 'HD (Experimental)',
        path: '/guide/hd',
      },
      {
        title: 'SSR (Experimental)',
        path: '/guide/ssr',
      },
    ],
    '/zh/guide': [
      {
        title: '快速上手',
        path: '/zh/guide/quick-start',
      },
      {
        title: 'FAQ',
        path: '/zh/guide/faq',
      },
      {
        title: 'CSS 变量',
        path: '/zh/guide/css-variables',
      },
      {
        title: '主题',
        path: '/zh/guide/theme',
      },
      {
        title: '按需加载',
        path: '/zh/guide/import-on-demand',
      },
      {
        title: '高清适配（试验性）',
        path: '/zh/guide/hd',
      },
      {
        title: '服务端渲染 / SSR（试验性）',
        path: '/zh/guide/ssr',
      },
    ],
    '/components': [
      {
        title: 'Basic',
        children: components.basic,
      },
      {
        title: 'Data Display',
        children: components.dataDisplay,
      },
      {
        title: 'Data Entry',
        children: components.dataEntry,
      },
      {
        title: 'Feedback',
        children: components.feedback,
      },
      {
        title: 'Navigation & Layout',
        children: components.navigationAndLayout,
      },
      {
        title: 'Other',
        children: components.other,
      },
      {
        title: 'Experimental',
        children: components.experimental,
      },
    ],
    '/zh/components': [
      {
        title: '基础',
        children: components.basic,
      },
      {
        title: '数据展示',
        children: components.dataDisplay,
      },
      {
        title: '数据录入',
        children: components.dataEntry,
      },
      {
        title: '反馈',
        children: components.feedback,
      },
      {
        title: '导航和布局',
        children: components.navigationAndLayout,
      },
      {
        title: '其他',
        children: components.other,
      },
      {
        title: '试验性',
        children: components.experimental,
      },
    ],
  },
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  alias: {
    'antd-mobile/es': process.cwd() + '/src',
    'demos': process.cwd() + '/src/demos/index.ts',
  },
  scripts: [
    `if (location.pathname.startsWith('/~demos/')) {
      document.body.style.background = '#f5f7fa'
    }`,
    'https://s9.cnzz.com/z_stat.php?id=1280306924&web_id=1280306924',
  ],
  locales: [
    ['en', 'English'],
    ['zh', '中文'],
  ],
  styles: [
    `
    #root .__dumi-default-mobile-demo-layout {
      padding: 0;
    }
    a[title='站长统计'] {
      display: none;
    }
    `,
  ],
  // extraPostCSSPlugins: [
  //   pxToRem({
  //     rootValue: 50,
  //     propList: ['*'],
  //   }),
  // ],
  themeConfig: {
    hd: {
      rules: [
        // {mode: 'vw', options: [100, 750]}
      ],
    },
  },
}
