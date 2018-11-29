var Promise = require('./promise')
var error = require('./error.js')
var app = getApp()
function wxPromisify(fn) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        //成功
        resolve(res.data)
      }
      obj.fail = function (res) {
        //失败
        reject(res)
      }
      fn(obj)
    })
  }
}
//无论promise对象最后状态如何都会执行
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => {
      throw reason
    })
  );
};
/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest(url, data) {
  var getRequest = wxPromisify(wx.request)
  return getRequest({
    url: url,
    method: 'GET',
    data: data,
    header: app.globalData.header,
  })
}
/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postRequest(url, data) {
  var postRequest = wxPromisify(wx.request)
  return postRequest({
    url: url,
    method: 'POST',
    data: data,
    header: app.globalData.header
  })
}
module.exports = {
  postRequest: postRequest,
  getRequest: getRequest,
  wxPromisify: wxPromisify
}
module.exports.POST = function (url, data, callback) {
  request('POST', url, data, callback);
}
module.exports.GET = function (url, data, callback) {
  request('GET', url, null, callback);
}
function request(method, url, data, callback) {
  console.log(method + ":" + url);
  if (method == 'POST')
    wx.request({
      url: url,
      data: data,
      method: method,
      header: app.globalData.header,
      success: function (res) {
        if (!error.checkRes(res)){
          return;
        }
        if (callback)
          callback(res.data)
      },
      fail: error.hanldFail
    })
  else if (method == 'GET')
    wx.request({
      url: url,
      method: method,
      header: app.globalData.header,
      success: function (res) {
        if (!error.checkRes(res)) {
          return;
        }
        if (callback)
          callback(res.data)
      },
      fail: error.hanldFail
    })
}