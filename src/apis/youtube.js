import axios from "axios";

const KEY = "AIzaSyD4AqEAcYokejV6oUbdjFQzwJaj1irYACk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxresult: 5,
    key: KEY
  }
});
