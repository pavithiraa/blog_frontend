import './settings.css'
//import Sidebar from "../../components/sidebar/Sidebar"
import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
//import axios from 'axios';
import { axiosInstance } from '../../config';


export default function Settings() {
  const [file,setFile] = useState(null);
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [success, setSuccess] = useState(false)

 const {user,dispatch} = useContext(Context);
  const PF= "https://mernpb-1.herokuapp.com/images/"

  const handleSubmit=async (e)=>{
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updatedUser = {
      userId:user._id,
      username,email,password
    };
    if(file){
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      updatedUser.profilePic = filename;
      try{
           await axiosInstance.post("/upload",data);
      }catch(err){
        console.log(err)
      }
    }
    try{
     const res = await axiosInstance.put("/users/" + user._id, updatedUser);
           setSuccess(true);
           dispatch({type:"UPDATE_SUCCESS",payload:res.data})
    }
   catch(err){
    dispatch({type:"UPDATE_FAILURE"})
   }
   }
   
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update your Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
        <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://us.123rf.com/450wm/yupiramos/yupiramos1607/yupiramos160706381/60044828-young-business-woman-with-elegant-suit-cartoon-vector-illustration-graphic-.jpg?ver=6"
              alt=""
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} name="name" className='settingsPPInput' onChange={e=>setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="email" placeholder={user.email} name="email"  className='settingsPPInput' onChange={e=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password"  name="password"  className='settingsPPInput' onChange={e=>setPassword(e.target.value)}/>
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success && <span style={{color: "green", textAlign:"center",margin:"20px"}}>Profile has been updated...</span>}
        </form>
      </div>
      {/* <Sidebar /> */}
    </div>
  )
}
