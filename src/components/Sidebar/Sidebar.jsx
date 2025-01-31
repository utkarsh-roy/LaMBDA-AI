import React, { useContext, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { CiMenuFries } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlineHistory } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Context } from '../../context/Context';



const Sidebar = () => {
    const[extended,setExtended] = useState(false)
    const {onSent,prevPrompts,setRecentPrompts,newChat} = useContext(Context)

    const loadPrompt = async(prompt) => {
        setRecentPrompts(prompt)
        await onSent(prompt)
    }
   



  return (
    <div className='sidebar'>
        <div className="top">
            <div className="menu">
                <CiMenuFries onClick={()=>setExtended(prev=>!prev)} color="White" size={25}/></div>
        
            <div onClick={()=>newChat()} className='new-chat'>
            <IoMdAdd color="Black" size={25}/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className='recent'>
                <p className='recent-title'>Recent</p>
                {prevPrompts.map((item,index)=>{
                    return(
                    <div onClick = {()=>loadPrompt(item)}className='recent-entry'>
                <FaRegMessage  color="White" size={15}/>
                    <p>{item.slice(0,18)} ...</p>
                </div>
                    )
                })}
            </div>
            :null
        } 
        </div>
        <div className="bottom">
        <div className="bottom-item recent-entry">
        <IoIosHelpCircleOutline  color="White" size={25} />
        {extended?<p>Help</p>:null}
        </div>
        <div className="bottom-item recent-entry">
        <MdOutlineHistory  color="White" size={25} />
        {extended?<p>Activity</p>:null}
        </div>
        <div className="bottom-item recent-entry">
        <IoSettingsOutline  color="White" size={25} />
        {extended?<p>Setting</p>:null}
        </div>
        </div>
        


    </div>
  )
}

export default Sidebar
