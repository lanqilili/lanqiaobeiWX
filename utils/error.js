var checkRes = function(res){
    if (res.statusCode != 200 || (res && res.data && !res.data.success)) {
      var msg = res.data.message;
      if (msg == null || msg == '') {
        msg = '服务异常，请稍候重试';
      }
      wx.showModal({
        title: '提示',
        content: msg,
        showCancel: false,
        success: function (res) {
        }
      })
      return false;
    }
    return true;
}

var hanldFail = function(res){
  wx.showModal({
    title: '提示',
    content: JSON.stringify(res),
    showCancel: false,
    success: function (res) {
    }
  })
}

module.exports = { 
  checkRes: checkRes,
  hanldFail: hanldFail
}