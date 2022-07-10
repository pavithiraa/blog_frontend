import { useContext, useEffect, useState } from 'react'
import  './sidebar.css'
//import { Link } from 'react-router-dom';
//import axios from "axios"
import { Context } from "../../context/Context";
import { axiosInstance } from '../../config';


export default function Sidebar() {
  const {user} = useContext(Context);
  const PF= "https://mernpb-1.herokuapp.com/images/"
  const [cats,setCats] = useState([]);

  useEffect(()=>{
      const getCats = async()=>{
        const res = await axiosInstance.get("/categories")
        setCats(res.data)
      }
      getCats();
  },[])
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sideImage"
          src= "https://us.123rf.com/450wm/yupiramos/yupiramos1607/yupiramos160706381/60044828-young-business-woman-with-elegant-suit-cartoon-vector-illustration-graphic-.jpg?ver=6"
          alt="userPic"
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
      {/* <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        {cats.map(c =>(
          <Link to={`/?cat=${c.name}`} className="link" key={c._id}>
        <li className="sidebarListItem" >{c.name} </li>
      </Link>  ))}
      </ul> */}
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW-US ON</span>
      <div className="sidebarSocial">
       <i className="sidebarIcons fab fa-facebook-square"></i>
        <i className="sidebarIcons fab fa-twitter-square"></i>
        <i className="sidebarIcons fab fa-pinterest-square"></i>
      </div>
      </div>
    </div>
  )
}
