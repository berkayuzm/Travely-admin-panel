import React from 'react'
import { useNavigate } from 'react-router-dom';

function SideBarItem(props) {
    const navigate=useNavigate();
    const navigateTo=()=>{
      navigate(props.name.toLowerCase());
    }
  return (
    <li className='side-bar-item ' onClick={navigateTo}>{props.name}</li>
  )
}

export default SideBarItem