import React from "react";
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'
const Navbar = () =>{
    return (
        <div className= 'w-full h-[80px] flex justify-between items-center px-4'>
            {/* Logo*/}
            <div className="pl-96">
                <Link to ="first" smooth = {true} duration = {500}>
                    <img className="hover:scale-125 duration-300" src = {Logo} alt="Logo Image" style={{width: '50px'}}/>
                </Link>
                
            </div>

             {/* menu */}
            <ul className="flex pr-72">
                <li>
                    <Link to = "second" smooth = {true} duration={500} className="font-bold  inline border-b-2 border-white hover:text-lg ease-out duration-300">01.HISTORY</Link>
                </li>
                <li>
                    <Link to = "third" smooth = {true} duration={500} className="font-bold  inline border-b-2 border-white hover:text-lg ease-out duration-300">02.TEAM</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;