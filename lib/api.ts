import axios from "axios";
import { config } from "process";
import { useAppSelector } from "../hooks/hooks";



export const BASE_URL = `https://conduit.productionready.io/api`;

export const getTags = async () => {
  const response = await axios.get(`${BASE_URL}/tags`);
  return response.data;
};


export const getRecentArticles = async (tag:string) => {
  if (tag.length === 0) {

    const response = await axios.get(`${BASE_URL}/articles/?offset=0`)
    return response.data;

  } else {
  const response = await axios.get(`${BASE_URL}/articles/?tag=${tag}`) 
  return response.data;
}
};

export const getRecentFavoriteArticles = async (username : string | string[] | undefined)  => {

  if (username) {

  const response = await axios.get(`${BASE_URL}/ARTICLES/?favorited=${username}`);
  return response.data;
  }

}

interface LoginType {
  email : string ;
  password : string;
}

export const login = async ({email , password } : LoginType)  => {
  

  const response = await  axios.post(`${BASE_URL}/users/login` , {"user":{email:email, password:password}});
  return response.data;

}

export const getCurrentUser = async (token : string | null | undefined) => {


    const response = await axios.get(`${BASE_URL}/user` , {headers : {
      'Authorization' : `Token ${token}`
    }})

    return response.data
}


