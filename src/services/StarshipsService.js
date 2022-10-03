import axios from "axios";
const base_url = process.env.REACT_APP_BASE_URL;
export default class StarshipService {
  getAllStarshipsByPage(url) {
    return axios.get(url);
  }
  getStarshipDetail(name) {
    return axios.get(`${base_url}/starships`, {
      params: {
        search: name.split("_").join(" "),
      },
    });
  }
}
