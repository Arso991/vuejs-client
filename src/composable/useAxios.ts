import axios from "axios";

const clientHttp = axios.create({
  baseURL: "http://localhost:8800",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const useAxios = () =>{
  const get = async (url:string)=>{
    return await clientHttp.get(url)
  }
  const post = async (url:string, data:any)=>{
    return await clientHttp.post(url, data)
  }
  const put = async (url:string)=>{
    return await clientHttp.put(url)
  }
  

  return {get, post, put}
}