import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdLogout } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { GrUserAdmin } from "react-icons/gr";
import "./header.css";
import instance from '../aixosConfig';

function Header() {
const navigate = useNavigate();


  async function handleLogout() {
   let respons=await instance.post("user/logout")
 
   console.log(respons.data.message);
   
   
    navigate("/login")
  }


  return (
    <div className='header'>
      <div className="logo">
     <Link to="/"><h1>E-Commerce</h1></Link>

      </div>

      <div className='list'>
       
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>

        <Link to="/cart">
         
          Cart
      <IoCartOutline />
        </Link>

        <Link to="/AdminLogin">
    
        Admin
            <GrUserAdmin /></Link>
       <span onClick={handleLogout}> <MdLogout /></span>
      </div>
    </div>
  );
}

export default Header;
