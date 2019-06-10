// pages/base/base.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"Offer",
    arr:['a','f','h','s','d','f','c','v'], 
    stu:[
      {
        name:"张三",
        age:15,
        sex:'M'
      },
      {
        name:"李四",
        age:28,
        sex:'M'
      },
      {
        name:"Sunday",
        age:30,
        sex:'F'
      },
      
    ],
    a:false,
    number:1

  },

  tap:function(event){
    // this.data.number++;
    console.log(event.target.dataset.id)
    this.setData({
      number: this.data.number + 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})