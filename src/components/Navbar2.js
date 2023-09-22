import React from "react";
import Logo from '../assets/Logo_wMountains.png'
import {Link} from "react-scroll"
const Navbar2 = () =>{
    return (
        <div className= 'w-full h-[80px] flex justify-between items-center px-4 bg-white'>
            {/* Logo*/}
            <div className="pl-96 py-4">
                <Link to ="first" smooth = {true} duration = {500}>
                    <img className="hover:scale-125 duration-300" src = {Logo} alt="Logo2 Image" style={{width: '175px'}}/>
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

export default Navbar2;