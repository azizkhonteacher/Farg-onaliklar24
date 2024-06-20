import axios from "axios";
const baseURL = "https://evr.bjst.uz/api";

export default {
  getBannerNews() {
    return axios.get(`${baseURL}/corusel/index`);
  },
  getLatestNews() {
    return axios.get(`${baseURL}/news/last-news`);
  },
  getNewsDetail(slug){
    return axios.get(`${baseURL}/news/news-detail/`, {
        slug,
    })
  },
  getCategory(){
    return axios.get(`${baseURL}/category/index/`)
  },
  getCategoryDetail(slug){
    return axios.get(`${baseURL}/news/list/?tag=${slug}`)
  }
};
