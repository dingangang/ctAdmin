/* eslint-disable */

// 工具
import UtilIce from '@/libs/util-ice.js'
// 页面和布局
import Index from './pages/Index'
import Login from './pages/Login'
import Error404 from './pages/Error404'
import WarehousingDetails from './pages/WarehousingDetails'
import WarehousingStatistics from './pages/WarehousingStatistics'
import DeliveringDetails from './pages/DeliveringDetails'
import DeliveringStatistics from './pages/DeliveringStatistics'
import DeliveringErp from './pages/DeliveringErp'
import DeliveringOrders from './pages/DeliveringOrders'
import DeliveringDismantling from './pages/DeliveringDismantling'
import DeliveringAbnormal from './pages/DeliveringAbnormal'
import DeliveringManual from './pages/DeliveringManual'
import StockDetails from './pages/StockDetails'
import StockStatistics from './pages/StockStatistics'
import StockData from './pages/StockData'
import StockMaintain from './pages/StockMaintain'
import DisplayCargo from './pages/DisplayCargo'
import DisplayTunnel from './pages/DisplayTunnel'
import DisplayTask from './pages/DisplayTask'
import DisplayCurrent from './pages/DisplayCurrent'
import LockTunnel from './pages/LockTunnel'
import LockCargo from './pages/LockCargo'
import SettingUsers from './pages/SettingUsers'
import SettingService from './pages/SettingService'
import Performance1 from './pages/Performance1'
import Performance2 from './pages/Performance2'
import Performance3 from './pages/Performance3'
import Performance4 from './pages/Performance4'
import Performance5 from './pages/Performance5'
import Performance6 from './pages/Performance6'
import Performance7 from './pages/Performance7'
import Performance8 from './pages/Performance8'
import Performance9 from './pages/Performance9'
import Performance10 from './pages/Performance10'
import Performance11 from './pages/Performance11'
import HeaderAside from './layouts/HeaderAside'

// 变量名 routerConfig 为 iceworks 检测关键字
// ice 会自动在这个变量下添加路由数据
// 请不要修改名称
// 备注 ice 自动添加的路由记录是以下格式
// {
//   path: '/page4',
//   layout: d2LayoutMain,
//   component: 4
// }

// 如果不指定 name 字段，会根据 path 生成 name = page-demo1
// 转换规则见 UtilIce.recursiveRouterConfig 中 path2name 方法
// meta 字段会和默认值使用 Object.assign 合并
// 如果不指定 meta.name 的话，name 字段会使用和上面路由 name 一样的取值逻辑
// 下面两个页面就是对比 你可以分别观察两个页面上显示的路由数据差异

const routerConfig = [
  {
    path: '/',
    name: 'index',
    layout: HeaderAside,
    component: Index
  },
  {
    path: '/WarehousingDetails',
    name: 'WarehousingDetails',
    layout: HeaderAside,
    component: WarehousingDetails,
    meta: {
      requiresAuth: true,
      title: '入库记录明细'
    }
  },
  {
    path: '/WarehousingSatistics',
    name: 'WarehousingStatistics',
    layout: HeaderAside,
    component: WarehousingStatistics,
    meta: {
      requiresAuth: true,
      title: '入库记录统计'
    }
  },
  {
    path: '/DeliveringDetails',
    name: 'DeliveringDetails',
    layout: HeaderAside,
    component: DeliveringDetails,
    meta: {
      requiresAuth: true,
      title: '出库记录明细'
    }
  },
  {
    path: '/DeliveringStatistics',
    name: 'DeliveringStatistics',
    layout: HeaderAside,
    component: DeliveringStatistics,
    meta: {
      requiresAuth: true,
      title: '出库记录统计'
    }
  },
  {
    path: '/DeliveringErp',
    name: 'DeliveringErp',
    layout: HeaderAside,
    component: DeliveringErp,
    meta: {
      requiresAuth: true,
      title: 'ERP出库订单'
    }
  },
  {
    path: '/DeliveringOrders',
    name: 'DeliveringOrders',
    layout: HeaderAside,
    component: DeliveringOrders,
    meta: {
      requiresAuth: true,
      title: '出库订单管理'
    }
  },
  {
    path: '/DeliveringDismantling',
    name: 'DeliveringDismantling',
    layout: HeaderAside,
    component: DeliveringDismantling,
    meta: {
      requiresAuth: true,
      title: '订单拆解列表'
    }
  },
  {
    path: '/DeliveringAbnormal',
    name: 'DeliveringAbnormal',
    layout: HeaderAside,
    component: DeliveringAbnormal,
    meta: {
      requiresAuth: true,
      title: '异常出库'
    }
  },
  {
    path: '/DeliveringManual',
    name: 'DeliveringManual',
    layout: HeaderAside,
    component: DeliveringManual,
    meta: {
      requiresAuth: true,
      title: '异常出库'
    }
  },
  {
    path: '/StockDetails',
    name: 'StockDetails',
    layout: HeaderAside,
    component: StockDetails,
    meta: {
      requiresAuth: true,
      title: '库存明细'
    }
  },
  {
    path: '/StockStatistics',
    name: 'StockStatistics',
    layout: HeaderAside,
    component: StockStatistics,
    meta: {
      requiresAuth: true,
      title: '库存统计'
    }
  },
  {
    path: '/StockData',
    name: 'StockData',
    layout: HeaderAside,
    component: StockData,
    meta: {
      requiresAuth: true,
      title: '库存数据更新'
    }
  },
  {
    path: '/StockMaintain',
    name: 'StockMaintain',
    layout: HeaderAside,
    component: StockMaintain,
    meta: {
      requiresAuth: true,
      title: '货位数据维护'
    }
  },
  {
    path: '/DisplayCargo',
    name: 'DisplayCargo',
    layout: HeaderAside,
    component: DisplayCargo,
    meta: {
      requiresAuth: true,
      title: '货位显示'
    }
  },
  {
    path: '/DisplayTunnel',
    name: 'DisplayTunnel',
    layout: HeaderAside,
    component: DisplayTunnel,
    meta: {
      requiresAuth: true,
      title: '巷道状态'
    }
  },
  {
    path: '/DisplayTask',
    name: 'DisplayTask',
    layout: HeaderAside,
    component: DisplayTask,
    meta: {
      requiresAuth: true,
      title: '堆垛机任务'
    }
  },
  {
    path: '/DisplayCurrent',
    name: 'DisplayCurrent',
    layout: HeaderAside,
    component: DisplayCurrent,
    meta: {
      requiresAuth: true,
      title: '当前任务产品'
    }
  },
  {
    path: '/LockTunnel',
    name: 'LockTunnel',
    layout: HeaderAside,
    component: LockTunnel,
    meta: {
      requiresAuth: true,
      title: '巷道锁定'
    }
  },
  {
    path: '/LockCargo',
    name: 'LockCargo',
    layout: HeaderAside,
    component: LockCargo,
    meta: {
      requiresAuth: true,
      title: '货位锁定'
    }
  },
  {
    path: '/SettingUsers',
    name: 'SettingUsers',
    layout: HeaderAside,
    component: SettingUsers,
    meta: {
      requiresAuth: true,
      title: '用户管理'
    }
  },
  {
    path: '/SettingService',
    name: 'SettingService',
    layout: HeaderAside,
    component: SettingService,
    meta: {
      requiresAuth: true,
      title: '服务管理'
    }
  },
  {
    path: '/Performance1',
    name: 'Performance1',
    layout: HeaderAside,
    component: Performance1,
    meta: {
      requiresAuth: true,
      title: '出库缓存区域产品信息'
    }
  },
  {
    path: '/Performance2',
    name: 'Performance2',
    layout: HeaderAside,
    component: Performance2,
    meta: {
      requiresAuth: true,
      title: '出库搜索记录'
    }
  },
  {
    path: '/Performance3',
    name: 'Performance3',
    layout: HeaderAside,
    component: Performance3,
    meta: {
      requiresAuth: true,
      title: '入库搜索记录'
    }
  },
  {
    path: '/Performance4',
    name: 'Performance4',
    layout: HeaderAside,
    component: Performance4,
    meta: {
      requiresAuth: true,
      title: '系统日志'
    }
  },
  {
    path: '/Performance5',
    name: 'Performance5',
    layout: HeaderAside,
    component: Performance5,
    meta: {
      requiresAuth: true,
      title: '产品分配记录'
    }
  },
  {
    path: '/Performance6',
    name: 'Performance6',
    layout: HeaderAside,
    component: Performance6,
    meta: {
      requiresAuth: true,
      title: '历史货位出入分析'
    }
  },
  {
    path: '/Performance7',
    name: 'Performance7',
    layout: HeaderAside,
    component: Performance7,
    meta: {
      requiresAuth: true,
      title: '出库订单拆解记录'
    }
  },
  {
    path: '/Performance8',
    name: 'Performance8',
    layout: HeaderAside,
    component: Performance8,
    meta: {
      requiresAuth: true,
      title: '历史出库订单明细分析'
    }
  },
  {
    path: '/Performance9',
    name: 'Performance9',
    layout: HeaderAside,
    component: Performance9,
    meta: {
      requiresAuth: true,
      title: '历史出库订单统计分析'
    }
  },
  {
    path: '/Performance10',
    name: 'Performance10',
    layout: HeaderAside,
    component: Performance10,
    meta: {
      requiresAuth: true,
      title: '历史堆垛机性能分析'
    }
  },
  {
    path: '/Performance11',
    name: 'Performance11',
    layout: HeaderAside,
    component: Performance11,
    meta: {
      requiresAuth: true,
      title: '历史立体库性能分析'
    }
  }
];

// 不参与菜单显示的
// ice 不会处理这部分
// 但是这部分路由也会被注册
// 处理规则同 routerConfig

const routerConfigMenuOut = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '*',
    component: Error404
  }
]

// 导出全部路由设置
// 这个数据会在 router.js 中被扁平处理

export default UtilIce.recursiveRouterConfig([
  ...routerConfig,
  ...routerConfigMenuOut
])

// 导出参与多标签页处理的路由设置
// 这个数据会在 mian.js 中使用

export const frameInRoutes = UtilIce.recursiveRouterConfig(routerConfig).map(e => {
  const route = e.children ? e.children[0] : e
  return {
    path: e.path,
    name: route.name,
    meta: route.meta
  }
})
