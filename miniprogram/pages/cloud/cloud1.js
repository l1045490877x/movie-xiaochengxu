const db = wx.cloud.database();

Page({
  insert(){
    db.collection('user').add({
      data:{
        name:'wangwu',
        age:29,
        sex:'m'
      }
    }).then( res => {
      console.log(res)
    }).catch( err => {
      console.log(err)
    })
  },
  update(){
    db.collection('user').doc('cbdb4c165cfe3aa8031c8b6952a6293c').update({
      sex:'F'
    }).then( res => {
      console.log(res)
    }).catch( err => {
      console.log(err)
    })
  },
  search(){
    db.collection('user').where({
      sex:'F'
    }).get().then( res => {
      console.log(res)
    }).catch( err => {
      console.log(err)
    })
  },
  delete(){
    db.collection('user').doc('cbdb4c165cfe3aa8031c8b6952a6293c').remove().then( res => {
      console.log(res)
    }).catch( err => {
      console.log(err)
    })
  },





  /**
   * 页面的初始数据
   */
  data: {
    
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