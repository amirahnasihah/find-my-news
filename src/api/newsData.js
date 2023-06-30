import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_KEYWORD = process.env.REACT_APP_KEYWORD;
const API_PAGE_SIZE = process.env.REACT_APP_PAGE_SIZE;
const API_PAGE_NO = process.env.REACT_APP_PAGE_NO;

const api = axios.create({
  baseURL: "https://newsapi.org/v2/everything",
  headers: {
    "X-Api-Key": API_KEY,
  },
  params: {
    q: API_KEYWORD,
    pageSize: API_PAGE_SIZE,
    page: API_PAGE_NO,
  },
});

export default api;
