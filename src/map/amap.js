let amapFile = require('./amap-wx');
let key = '66495229a3fe838939089f42d44d748f';
let myMap = new amapFile.AMapWX({key});

class Amap {
  /**
   * 获取POI数据
   * @param {string} querykeywords 关键字
   */
  static getPoiAround(
    querykeywords = '',
    iconPath = '',
    iconPathSelected = ''
  ) {
    return new Promise((resolve, reject) =>
      myMap.getPoiAround({
        iconPath,
        iconPathSelected,
        querykeywords,
        success: resolve,
        fail: reject
      })
    );
  }

  /**
   * 获取地理描述数据
   */
  static getRegeo(iconPath = '', iconWidth = '', iconHeight = '') {
    return new Promise((resolve, reject) =>
      myMap.getRegeo({
        iconPath,
        iconWidth,
        iconHeight,
        success: resolve,
        fail: reject
      })
    );
  }

  /**
   * 获取天气数据
   *
   */
  static getWeather() {
    return new Promise((resolve, reject) =>
      myMap.getWeather({ success: resolve, fail: reject })
    );
  }

  /**
   * 获取输入提示词
   * @param {string} keywords
   * @param {string} location
   */
  static getInputtips(keywords = '', city = '', location = '') {
    return new Promise((resolve, reject) =>
      myMap.getInputtips({
        keywords,
        city,
        location,
        citylimit: true,
        success: resolve,
        fail: reject
      })
    );
  }

  /**
   * 获取路线规划
   * type : getDrivingRoute --驾车
   * type : getWalkingRoute --步行
   * type : getTransitRoute --公交
   * type : getRidingRoute --骑行
   * @param {string} origin         出发地坐标
   * @param {string} destination    目的地坐标
   */
  static getRoute(type, origin, destination, city = '杭州') {
    return new Promise((resolve, reject) =>
      myMap[type]({
        origin,
        destination,
        city,
        success: resolve,
        fail: reject
      })
    );
  }
}
module.exports = Amap;


