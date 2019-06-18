import {
  HTTP
} from "../util/http.js"

export class LikeModel extends HTTP {
  like(behaver, id, catergory, sCallBack) {
    let url = behaver == "like" ? "like" : "like/cancel"
    this.request({
      url: url,
      method: "POST",
      data: {
        art_id: id,
        type: catergory
      },
      success: (response)=>{
        sCallBack(response)
      }
    })
  }

  getLikeStatus(id, catergory, sCallBack) {
    let url = 'classic/likestatus'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: id,
        type: catergory
      },
      success: (response) => {
        sCallBack(response)
      }
    })
  }
}