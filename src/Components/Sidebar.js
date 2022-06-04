import React from 'react';
import "../App.css";
import {SidebarData} from "./SidebarData"
import { Link } from react-router-dom

function Sidebar() {
  return (
    <div className='sidebar'>
        <ul className='sidebarlist'>
        {SidebarData.map((item,key) => {
              return (
                <li 
                key = {id}
                > 
                <Link to = {item.link} >
                    {item.icon}
                    <span>{item.title}</span>
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

export default Sidebar