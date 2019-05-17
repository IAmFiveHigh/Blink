import {HTTP} from '../util/http.js'



export class ClassicModel extends HTTP {
  getLatest (sCallBack){
    this.request({
      url: 'classic/latest',
      success: (response) => {
        sCallBack(response)
      },
      fail: (statusData) => { //因为没有appk 请求不到数据 只好写假数据测试
        sCallBack({
          content: '人生不能象做菜，把所有料准备好再下锅',
          fav_num: 11,
          id: 1,
          image: 'http://bl.7yue.pro/images/movie.8.png',
          index: 8,
          like_status: 0,
          pubdate: '2018-06-22',
          title: '李安《饮食男女》',
          type: 100
        })
      }
    })
  }

  getPrevious(index, sCallBack) {
    this.request({
      url: 'classic/' + index + '/previous',
      success: (response) => {
        sCallBack(response)
      },
      fail: (error) => {
        sCallBack({
          content: '谁念过 千字文章 秋收冬已藏',
          fav_num: 10,
          id: 1,
          image: 'http://bl.7yue.pro/images/music.7.png',
          index: 7,
          like_status: 0,
          pubdate: '2018-06-22',
          title: '不才《参商》',
          type: 100
        })
      }
    })
  }
}

