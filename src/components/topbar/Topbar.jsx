import { useContext } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./topbar.css"


export default function Topbar() {
  const {user,dispatch} = useContext(Context);
  const PF= "https://mernpb-1.herokuapp.com/images/"
  const handleLogout=()=>{
      dispatch({type: "LOGOUT"});
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>  <div className="topIcons">
      <Link className="link" to='/'> PB</Link>
        
         </div></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          
        </Nav>
        <Nav>
          <Nav.Link> <Link className="topListItem link" to='/'>HOME</Link></Nav.Link>
          <Nav.Link> <Link className="topListItem link" to='/'>ABOUT</Link></Nav.Link>
          <Nav.Link> <Link className="topListItem link" to='/write'>CREATE-POST</Link></Nav.Link>
          <div className="topListItem" onClick={handleLogout}>
            {user &&  "LOGOUT"}
         </div>
          <Nav.Link>      {user ? (
      <Link to="/settings">
      <img
          className="topImage"
          src="https://us.123rf.com/450wm/yupiramos/yupiramos1607/yupiramos160706381/60044828-young-business-woman-with-elegant-suit-cartoon-vector-illustration-graphic-.jpg?ver=6"
          alt=""
          
        />
        </Link> 
        ): (
          <ul className="topList">
              <li className="topListItem">
            <Link to="/login" className="link">
              LOGIN
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/register" className="link">
              REGISTER
            </Link>
            </li>
             </ul>
             )}</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    
  )
}
