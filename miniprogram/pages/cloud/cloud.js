// pages/cloud/cloud.js
const db =wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  insert:function(){
    db.collection('user').add(
      //回掉处理数据
    //   {
    //     data:{ name:'jerry ',
    //     age:20
    //     },
    //     success: res => {
    //       console.log(res)
    //     },
    //     fail: err => {
    //       console.log(err)
    //     }
    //   },
        //then方法处理
        {
          data: {
            name:'lisan',
            age:100
            }
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
          
      
      
  },
  update:function(){
    db.collection('user').doc().update({
      data:{
        age:21
      }
    }).then(res => {
      console.log(res)
    }).catch( err => {
      console.log(err)
    })
  },
  search:function(){
    db.collection('user').where({
      name:"jerry"
    }).get().then( res=> {
      console.log(res)
    }).catch( err => {
      console.log(err)
    });
  },
  delete:function(){
    db.collection('user').doc().remove({
      data:{

      }
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