// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      like: {
        type: Boolean
      },
      count: {
        type: Number,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      
      like_image_src: 'images/喜欢@2x.png',
      dislike_image_src: 'images/喜欢dis@2x.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onLike: function(event){
        let like = this.properties.like
        let count = this.properties.count

        count = like ? count - 1 : count + 1

        this.setData({
          count: count,
          like: !like
        })
      }
  }
})
