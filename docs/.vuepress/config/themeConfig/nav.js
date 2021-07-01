// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '前端文章',
        items: [
          { text: '新建spring boot项目', link: '/pages/8309a5b876fc95e3/' }
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '新建spring boot项目', link: '/pages/8309a5b876fc95e3/' }
        ],
      },
    ],
  },
  {
    text: '后端',
    link: '/service/',
    items: [
      { text: '新建spring boot项目', link: '/pages/8309a5b876fc95e3/' },
      { text: '集合', link: '/pages/8309a5b876fc95e5/' },
      { text: 'JVM', link: '/pages/8309a5b876fc95e4/' },
      { text: '设计模式', link: '/pages/8309a5b876fc9005/' },
      { text: '注解', link: '/pages/8309a5b876fc9002/' }
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [

    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '新建spring boot项目', link: '/pages/8309a5b876fc95e3/' }
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      { text: '新建spring boot项目', link: '/pages/beb6c0bd8a66cea6/' }
    ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
