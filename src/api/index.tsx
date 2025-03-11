import axios from "axios";
import { Album, Post, User } from "../constants/interface";

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

export const fetchAllUserPosts = async (userId: string): Promise<Post[]> => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    console.log(res.data);
    return res.data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchUserAlbums = async (userId: string): Promise<Album[]> => {
  //https://jsonplaceholder.typicode.com/albums?userId=1
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
    );
    console.log(res.data);
    return res.data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
