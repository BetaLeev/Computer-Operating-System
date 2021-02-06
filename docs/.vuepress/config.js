module.exports = {
  title: '计算机操作原理',
  description: 'Just playing around',
  themeConfig: {
    // displayAllHeaders: true 
    sidebar: [
      {
        title: '操作系统概论',   // 必要的
        path: '/operata-system-desc/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '进程管理',   // 必要的
        path: '/process-manage/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1

      },
      {
        title: '进程调度与死锁',   // 必要的
        path: '/process-scheduling-deadlock/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1

      }, {
        title: '内存管理',   // 必要的
        path: '/memory-manage/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1

      },
      {
        title: '文件系统',   // 必要的
        path: '/file-system/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1

      },
      {
        title: 'I/O设备管理',   // 必要的
        path: '/io-device-manage/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1

      },

    ]
  }
}