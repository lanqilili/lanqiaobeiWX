var $ = require('../../../utils/wxRequest.js')

module.exports = {
  //查询购买记录中礼品卡的信息
  getGiftcard: function (params) {
    return $.postRequest(getApp().apiUrl + '/giftcardservice/cardaccounts', params);
  },
  getMock: function (latitude, longitude, border) {
    return $.getRequest(getApp().apiUrl + '/mock', null)
  }
};