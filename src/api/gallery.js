import { api } from "./api"

export const getAllImages = async({key,page,per_page}) => {
    const {data} = await api({
     params: {
      q: key,
      key: "11644375-e9c2f2fccdc526658b5d6a867",
      page,
      per_page,
      orientation: "horizontal",
      image_type: "photo",

    }
    })
    return data;
}