import React from 'react';
import "./Sidebar.css";
import {SidebarData} from "./SidebarData"
import { Link } from "react-router-dom"

function Sidebar(){
  
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
          <h2 className='sidebar_logodev'>Dev</h2><h2 className='sidebar_logohire'>Hire</h2>  
      </div>
      
        <ul className='sidebarlist'>
        {SidebarData.map((item,id) => {
              return (
                <li 
                key = {id}
                 className = "sidebar_item"
                > 
                <Link to = {item.link} className = "sidebar__link" >
                    <span className='sidebar_icon'>{item.icon}</span>
                    <span className='sidebar__title'>{item.title}</span>
                </Link>
                
                </li>
                )
        }
        )
        }
        </ul>
    </div>
  )
}

export default Sidebar;