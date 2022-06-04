import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";




export const SidebarData = [
    {
        id:1,
        title: "Home",
        icon: <BiSearch/>,
        link:"/home"

     } ,
     {
         id:2,
        title: "Favorites",
        icon: <AiOutlineHeart/>,
        link:"/favorites"

     } 
]