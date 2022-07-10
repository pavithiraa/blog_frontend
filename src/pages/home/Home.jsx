import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
//import axios from "axios";
import { useLocation } from "react-router";
import { axiosInstance } from "../../config";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header /> 
      <div className="home">
        <div className="home_left">
          <Sidebar /> 
          </div>
        <div className="home_right">  
          <Posts posts={posts} />
          </div>
      
       
      </div>
    </>
  );
}