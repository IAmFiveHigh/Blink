import {HTTP} from '../util/http.js'



export class ClassicModel extends HTTP {
  getLatest (sCallBack){
    this.request({
      url: 'classic/latest',
      success: (response) => {
        sCallBack(response)
        this._saveLatestIndex(response.index)
        wx.setStorageSync(this._getKey(response.index), response)
      },
      fail: (statusData) => { //因为没有appk 请求不到数据 只好写假数据测试
        
      }
    })
  }

  getClassic(index, nextOrPrevious, sCallBack) {
    let classic_storage = nextOrPrevious == 'next' ? wx.getStorageSync(this._getKey(index+1)) : wx.getStorageSync(this._getKey(index-1))
    if (classic_storage) {
      sCallBack(classic_storage)
    }else {
      this.request({
        url: 'classic/' + index + '/' + nextOrPrevious,
        success: (response) => {
          sCallBack(response)
          wx.setStorageSync(this._getKey(response.index), response)
        },
        fail: (error) => {
          
        }
      })
    }
    
  }


  isFirst(index) {
    return index == 1 
  }

  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return index == latestIndex 
  }

  _saveLatestIndex(index) {
    wx.setStorageSync('latest', index)
  }

  _getLatestIndex() {
    return wx.getStorageSync('latest')
  }

  _getKey(key) {
    let newKey = 'key_classic_' + key
    return newKey
  }
}

