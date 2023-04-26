import { useState } from 'react';
import logo from '../assets/logo.png';
import './Sidebar.css'
import MenuItem from './MenuItem';

const menus = [
    {
        icon : "fa fa-house",
        title : "Home"
    },

    {
        icon : "fa fa-hashtag",
        title : "Explore"
    },

    {
        icon : "far fa-bell",
        title : "Notifications"
    },

    {
        icon : "far fa-envelope",
        title : "Messages"
    },
]

export default function Sidebar(){
    const [number, setNumber] = useState(0)

    function handleClick() {
        setNumber(number => number + 1)
        setNumber(number => number + 1)
        setNumber(number => number + 1)
    }
    return(
        <div className='sidebar'>
            <img className='logo' src={logo} alt='Text'/>
            <div>
                {
                    menus.map(item => <MenuItem menu={item}/>)
                }
            </div>

            <button className='tweet' onClick={handleClick} >Tweet {number} </button>
        </div>
    );
}