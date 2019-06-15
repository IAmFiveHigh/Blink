import {
  config
} from "../config.js"

export class HTTP {
  request(params) {
    if (!params.method) {
      params.method = "GET"
    }
    wx.request({
      url: config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (response) => {
        let code = response.statusCode.toString()
        if (code.startsWith("2")) {
          if (params.success) {
            params.success(response.data)
          }
        } else {
          wx.showToast({
            title: response.data,
            icon: 'none',
            duration: 2000
          })
          if (params.fail) {
            params.fail(response)
          }

        }

      },
      fail: (error) => {

      }
    })
  }
}