
import axios from "axios";


export const clientHttp = axios.create({
      baseURL: "http://localhost:8800",
      headers:{
        Accept: "application/json",
        "Content-Type":"application/json",
        /* Authorization:`Bearer ${token.value}` */
      }
    });

