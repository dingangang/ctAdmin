/* eslint-disable */

import utilIce from './libs/util-ice'

// 菜单配置

// 侧栏菜单配置
// ice 会在新建页面的时候 push 数据
// ice 自动添加的菜单记录是以下格式：(不会有嵌套)
// {
//   name: 'Nav',
//   path: '/page',
//   icon: 'home',
// },

const asideMenuConfig = [
  {
    name: '入库',
    icon: 'sign-in',
    children: [
      {
        name: '入库记录明细',
        path: '/WarehousingDetails/'
      },
      {
        name: '入库记录统计',
        path: '/WarehousingSatistics/'
      }
    ]
  },
  {
    name: '出库',
    icon: 'sign-out',
    children: [
      {
        name: '出库记录明细',
        path: '/DeliveringDetails/'
      },
      {
        name: '出库记录统计',
        path: '/DeliveringStatistics/'
      },
      {
        name: 'ECP出库订单',
        path: '/DeliveringErp/'
      },
      {
        name: '出库订单管理',
        path: '/DeliveringOrders/'
      },
      {
        name: '订单拆解列表',
        path: '/DeliveringDismantling/'
      },
      {
        name: '异常出库',
        path: '/DeliveringAbnormal/'
      },
      {
        name: '手动出库',
        path: '/DeliveringManual/'
      }
    ]
  },
  {
    name: '库存',
    icon: 'database',
    children: [
      {
        name: '库存明细',
        path: '/StockDetails/'
      },{
        name: '库存详情',
        path: '/StockStatistics/'
      },{
        name: '库存数据更新',
        path: '/StockData/'
      },{
        name: '货位数据维护',
        path: '/StockMaintain/'
      }
    ]
  },
  {
    name: '显示',
    icon: 'window-maximize',
    children: [
      {
        name: '货位显示',
        path: '/DisplayCargo/'
      },
      {
        name: '巷道状态',
        path: '/DisplayTunnel/'
      },
      {
        name: '堆垛机任务',
        path: '/DisplayTask/'
      },
      {
        name: '当前任务产品',
        path: '/DisplayCurrent/'
      }
    ]
  },
  {
    name: '锁定设置',
    icon: 'lock',
    children: [
      {
        name: '巷道锁定',
        path: '/LockTunnel/'
      },
      {
        name: '货位锁定',
        path: '/LockCargo/'
      }
    ]
  },
  {
    name: '系统设定',
    icon: 'cog',
    children: [
      {
        name: '用户管理',
        path: '/SettingUsers/'
      },
      {
        name: '服务管理',
        path: '/SettingService/'
      }
    ]
  },
  {
    name: '性能分析',
    icon: 'server',
    children: [
      {
        name: '出库缓存区域产品信息',
        path: '/Performance1/'
      },
      {
        name: '出库搜索记录',
        path: '/Performance2/'
      },
      {
        name: '入库搜索记录',
        path: '/Performance3/'
      },
      {
        name: '系统日志',
        path: '/Performance4/'
      },
      {
        name: '产品分配记录',
        path: '/Performance5/'
      },
      {
        name: '历史货位出入分析',
        path: '/Performance6/'
      },
      {
        name: '出库订单拆解记录',
        path: '/Performance7/'
      },
      {
        name: '历史出库订单明细分析',
        path: '/Performance8/'
      },
      {
        name: '历史出库订单统计分析',
        path: '/Performance9/'
      },
      {
        name: '历史堆垛机性能分析',
        path: '/Performance10/'
      },
      {
        name: '历史立体库性能分析',
        path: '/Performance11/'
      }
    ]
  }
]

// 顶栏菜单配置
// ice 不会修改 headerMenuConfig
// 如果你需要功能开发之前就配置出菜单原型，可以只设置 name 字段
// D2Admin 会自动添加不重复 id 生成菜单，并在点击时提示这是一个临时菜单
const headerMenuConfig = [
  {
    name: '空菜单',
    icon: 'flask',
    children: [
      {
        name: 'menu 1',
        children: [
          {
            name: 'menu 1-1',
            children: [
              { name: 'menu 1-1-1' },
              { name: 'menu 1-1-2' }
            ]
          },
          { name: 'menu 1-2' }
        ]
      },
      { name: 'menu 2' },
      { name: 'menu 3' }
    ]
  },
  {
    name: '演示页面',
    icon: 'folder-o',
    children: [
      {
        name: '演示 1',
        path: '/demo1/'
      },
      {
        name: '演示 2',
        path: '/demo2/'
      }
    ]
  }
]

// 请根据自身业务逻辑修改导出设置，并在合适的位置赋给对应的菜单

// 参考
// 设置顶栏菜单的方法 (vuex)
// $store.commit('d2adminMenuHeaderSet', menus)
// 设置侧边栏菜单的方法 (vuex)
// $store.commit('d2adminMenuAsideSet', menus)
// 你可以在任何地方使用上述方法修改顶栏和侧边栏菜单

// 导出顶栏菜单
export const menuHeader = utilIce.recursiveMenuConfig(headerMenuConfig)

// 导出侧边栏菜单
export const menuAside = utilIce.recursiveMenuConfig(asideMenuConfig)
