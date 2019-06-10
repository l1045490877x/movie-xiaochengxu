// pages/cloud/cloud.js
const db =wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  sum(){
    wx.cloud.callFunction({
      name:'sum',//云函数名字
      data:{
        a:2,
        b:3,
      },
    }).then( res => {
      console.log(res.result.sum);
    }).catch( err => {
      console.log( err )
    })
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
            name:'jerry',
            age:25
            }
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
        })
          
      
      
  },
  // update:function(){
  //   db.collection('user').doc('dec80a9e5cfdfd2a02f969ee299112b8').update({
  //     data:{
  //       age:112
  //     }
  //   }).then(res => {
  //     console.log(res)
  //   }).catch( err => {
  //     console.log(err)
  //   })
  // },

  update: function () {
    db.collection('user').doc().update({
      data: {
        name: 'kangbazi'
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
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

  delete() {
    db.collection('user').doc('cbdb4c165cfe3aa8031c8b6952a6293c').remove().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
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