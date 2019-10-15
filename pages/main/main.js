// main.js
const msg = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dlist:{},
    imgs:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      dlist:msg.message[options.jq],
      imgs:'https://youngtest.chinaso.com/app/h5/200_478/static/img/'+ msg.message[options.jq].img
    })
  },
  toindex(){
    wx.navigateBack({
      
    })
  }
})