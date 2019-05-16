// components/navi/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    },
    la: {
      type: Boolean
    },
    first: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    disLeftSrc: '/components/navi/images/triangle.dis@left.png',
    leftSrc: '/components/navi/images/triangle@left.png',
    disRightSrc: '/components/navi/images/triangle.dis@right.png',
    rightSrc: '/components/navi/images/triangle@right.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(event){
      this.triggerEvent('left', {}, {})
    },
    onRight:function(event){
      this.triggerEvent('right', {}, {})
    }
  }
})
