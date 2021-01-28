import axios from "axios";
const KEY = "AIzaSyDgBWf_F6eDqfWt_6XJPwpk6AK3OqRreXQ";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResult: 15,
    key: KEY,
  },
});