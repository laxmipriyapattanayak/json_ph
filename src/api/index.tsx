import axios from "axios";
import { Album, Post, User, Comment } from "../constants/interface";

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

export const fetchPostComments = async (postId: string): Promise<Comment[]> => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
    console.log(res.data);
    return res.data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchUserAlbums = async (userId: string): Promise<Album[]> => {
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
