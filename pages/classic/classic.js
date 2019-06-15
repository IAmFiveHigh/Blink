// pages/classic/classic.js
import { ClassicModel} from '../../models/Classic.js'
import { LikeModel} from '../../models/like.js'
let likeModel = new LikeModel
let classicModel = new ClassicModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classicData: null,
    latest: true,
    first: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
    classicModel.getLatest((response) => {
      this.setData({
        classicData: response
      })
      this.classicData = response
    }) 
  },

  onlike: function(event) {
    let behavior = event.detail.behavior
    likeModel.like(behavior, this.classicData.id, this.classicData.type)
  },

  onNext: function(event) {
    this._updateClassic('next')
  },

  
  onPrevious: function(event) {    
    this._updateClassic('previous')
  },

  _updateClassic: function (nextOrPrevious) {
    let index = this.classicData.index
    classicModel.getClassic(index, nextOrPrevious, (response) => {
      this.classicData = response
      this.setData({
        classicData: response,
        latest: classicModel.isLatest(response.index),
        first: classicModel.isFirst(response.index)
      })

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})