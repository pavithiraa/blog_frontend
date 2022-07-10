import  './single.css'
import Sidebar from "../../components/sidebar/Sidebar"
import SinglePost from '../../components/singlePost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
      <div className='single_left'>  <SinglePost /></div>
   <div className='single_right'><Sidebar /></div>
      
    </div>
  )
}
