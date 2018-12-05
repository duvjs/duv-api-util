// 蓝牙、iBeacon、NFC、WIFI、设置窗口背景、设置置顶信息相关、节点布局相关状态、获取手机号、客服、卡券、微信运动、生物认证 swan暂无
// ai相关wx暂无
const duvApiList = {
  // 发起请求
  'request': true,
  // 上传下载
  'uploadFile': true,
  'downloadFile': true,
  // WebSocket
  'connectSocket': true,
  'onSocketOpen': true,
  'onSocketError': true,
  'sendSocketMessage': true,
  'onSocketMessage': true,
  'closeSocket': true,
  'onSocketClose': true,
  // 媒体
  'chooseImage': true,
  'previewImage': true,
  'getImageInfo': true,
  'saveImageToPhotosAlbum': true,
  'getRecorderManager': true, // 参数有差异
  'getBackgroundAudioManager': true, // 参数有差异
  'createInnerAudioContext': true,
  'getAvailableAudioSources': false,
  'chooseVideo': true,
  'saveVideoToPhotosAlbum': false, // 返回值不同
  'createVideoContext': true,
  'createCameraContext': true,
  'createLivePlayerContext': true,
  'createLivePusherContext': false,
  // 动态加载字体，wx独有
  'loadFontFace': false,
  // 文件
  'saveFile': true,
  'getFileInfo': true,
  'getSavedFileList': true,
  'getSavedFileInfo': true,
  'removeSavedFile': true,
  'openDocument': true,
  // 数据缓存
  'setStorage': true,
  'setStorageSync': true,
  'getStorage': true,
  'getStorageSync': true,
  'getStorageInfo': true,
  'getStorageInfoSync': true,
  'removeStorage': true,
  'removeStorageSync': true,
  'clearStorage': true,
  'clearStorageSync': true,
  // 位置
  'getLocation': true,
  'chooseLocation': true,
  'openLocation': true,
  'createMapContext': true,
  // 系统信息
  'getSystemInfo': true,
  'getSystemInfoSync': true,
  'canIUse': true,
  // 内存报警
  'onMemoryWarning': false,
  // 网络
  'getNetworkType': true,
  'onNetworkStatusChange': true,
  // 加速度计
  'onAccelerometerChange': true,
  'startAccelerometer': true,
  'stopAccelerometer': true,
  // 罗盘
  'onCompassChange': true,
  'startCompass': true,
  'stopCompass': true,
  // 电话
  'makePhoneCall': true,
  // 扫码
  'scanCode': true,
  // 剪贴板
  'setClipboardData': true,
  'getClipboardData': true,
  // 屏幕亮度
  'setScreenBrightness': true,
  'getScreenBrightness': true,
  'setKeepScreenOn': true,
  // 截屏事件
  'onUserCaptureScreen': true,
  // 振动
  'vibrateLong': true,
  'vibrateShort': true,
  // 手机联系人
  'addPhoneContact': true,
  // 交互反馈
  'showToast': true, // 参数有区别
  'showLoading': true,
  'hideToast': true,
  'hideLoading': true,
  'showModal': true,
  'showActionSheet': true,
  // 设置导航条
  'setNavigationBarTitle': true,
  'showNavigationBarLoading': true,
  'hideNavigationBarLoading': true,
  'setNavigationBarColor': true,
  // 设置tabBar
  'setTabBarBadge': true,
  'removeTabBarBadge': true,
  'showTabBarRedDot': true,
  'hideTabBarRedDot': true,
  'setTabBarStyle': true,
  'setTabBarItem': true,
  'showTabBar': true, // 参数有区别
  'hideTabBar': true, // 参数有区别
  // 导航
  'navigator': true,
  'navigateTo': true,
  'redirectTo': true,
  'switchTab': true,
  'navigateBack': true,
  'reLaunch': true,
  // 动画
  'createAnimation': true,
  // 位置
  'pageScrollTo': true,
  // 绘图
  'createCanvasContext': true, // 待定，还没有确认细节
  // 下拉刷新
  'startPullDownRefresh': true,
  'stopPullDownRefresh': true,
  // 节点
  'createSelectorQuery': true,
  // 第三方平台
  'getExtConfig': true,
  'getExtConfigSync': true,
  // 登录
  'login': true,
  'checkSession': true,
  // 授权
  'authorize': true,
  // 用户信息
  'getUserInfo': true,
  // 支付，百度小程序暂无文档，待确认
  'requestPayment': true,
  // 转发有区别，百度小程序文档不全，待确认
  // 收货地址
  'chooseAddress': true,
  // 设置
  'openSetting': true,
  'getSetting': true,
  // 获取发票抬头
  'chooseInvoiceTitle': true
  // 'getUserInfo': false
  // 'getUserInfo': {
  //   'wx': 'getUser',
  //   'bd': 'getUserInfo'
  // }
}
// let duvApiMap = {
//
// }
module.exports = {
  // duvApiMap,
  duvApiList
}
