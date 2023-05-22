import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getData = async (url) => {
  const {data} =await axios.get(`${BASE_URL}${url}`);
  return data;
};

// export const getData=async(url)=>{
//     const api =await fetch(`${BASE_URL}${url}`)
//     const data = await api.json()
//     console.log(data);
// }