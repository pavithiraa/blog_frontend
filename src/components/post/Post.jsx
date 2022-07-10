import "./post.css";
import { Link } from "react-router-dom";
//  import { useContext } from "react";
//  import { Context } from "../../context/Context";

export default function Post({ post }) {
 //const {user} = useContext(Context);
  const PF = "https://mernpb-1.herokuapp.com/images/";
  return (
    <div className="post">
      {/* {post.profilePic &&
     <img className="postUser_Image" src={PF + user.profilePic} alt="" />} */}
      <div className="postInfo">       
       <Link to={`/post/${post._id}`} className="link">
       <span className="postTitle">{post.title}</span>
           {post.photo && 
      <img className="postImg" src={PF + post.photo} alt="" />}
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        </Link>
       
    
       
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span> 
        <p className="postDesc">{post.desc}</p>
      </div>
     
    </div>
  );
}