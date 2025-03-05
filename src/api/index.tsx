import axios from "axios";
import { User } from "../constants/interface";

export const fetchAllUsers = async (): Promise<User[]> => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    console.log(res.data);
    return res.data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
