import { api } from "./api"

export const getAllImages = async({key,page, perPage}) => {
    const {data} = await api({
     params: {
      q: key,
      key: "11644375-e9c2f2fccdc526658b5d6a867",
      page,
      per_page: perPage.current,
      orientation: "horizontal",
      image_type: "photo",

    }
    })
    return data;
}