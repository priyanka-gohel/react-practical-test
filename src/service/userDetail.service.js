import axios from "axios";

export const  userDetail = (page) =>  {
    return axios.get(`https://dummyjson.com/users?limit=10&skip=${page}&select=firstName,lastName,email,image`);
}