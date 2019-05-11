import {
  HTTP
} from "../util/http.js"

export class LikeModel extends HTTP {
  like(behaver, id, catergory) {
    let url = behaver == "like" ? "/like" : "/like/cancel"
    this.request({
      url: url,
      method: "POST",
      data: {
        art_id: id,
        type: catergory
      }
    })
  }
}