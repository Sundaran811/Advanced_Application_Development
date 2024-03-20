import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { VscLayoutSidebarRight } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import './Sidebar.css'
function Sidebar() {
    {/*const handleLogout = () => {
        removeEmail()
        removeToken()
        removeRole()
        window.location.href = "/"
      }*/}
  return (
   <>
    <aside id="sidebar" className={ "sidebar-responsive"} style={{marginTop:'50px'}}>
        

        <ul className='sidebar-list'>

        <li className='sidebar-list-item'>
                     <Link to = "/" ><strong>Home</strong></Link>
            </li>

            <li className='sidebar-list-item'>
                    <Link to = "/admin"><strong> Dashboard</strong></Link>
            </li>

            <li className='sidebar-list-item'>
                    <Link to = "/as"><strong> Services</strong></Link>
            </li>

            <li className='sidebar-list-item'>
                    <Link to = "/booking"><strong> Booking</strong></Link>
            </li>
            
            <li className='sidebar-list-item'>
                    <Link to = "/en"><strong> Queries</strong></Link>
            </li>
            
            <li className='sidebar-list-item'>
                    <Link to = "/login" ><strong>Log Out</strong></Link>
            </li>
        </ul>
    </aside>
 
    </>
  )
}

export default Sidebar