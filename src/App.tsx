import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchAllUsers } from "./api";
import Search from "./components/search/Search.components";
import { User } from "./constants/interface";
import UserPage from "./page/User.page";
import PostPage from "./page/Posts.page";
import AlbumPage from "./page/Albums.page";
import CommentPage from "./page/Comments.page";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredData, setFilteredData] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchAllUsers();
      setUsers(data);
      setFilteredData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (text: string) => {
    let newArr = [...users];
    newArr = newArr.filter((el) => {
      return (
        el.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
        el.username.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    });
    setFilteredData(newArr);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <div className="wrapper">
              <Search handleInputChange={handleInputChange} />
              <UserPage users={filteredData} />
            </div>
          }
        />
        <Route path="/post/:userId" element={<PostPage />} />

        <Route path="/album/:userId" element={<AlbumPage />} />
        <Route path="comment/:postId" element={<CommentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
