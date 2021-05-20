import axios from "axios";
const APIURL = "https://randomuser.me/api/?page=3&results=10&seed=abc";

const search =()=> {
  return axios.get(APIURL);
}

export default search;
