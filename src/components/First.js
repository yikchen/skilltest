import React from "react";
import Text from '../assets/bannerText.png'
import Bg from '../assets/LaBanner.png'
import Navbar from "./Navbar";
const First = () =>{
    return (
        <div name = 'first' className="w-full h-screen bg-cover text-white" style={{backgroundImage: `url(${Bg})`}}>
            <Navbar/>
            <div className="h-screen flex items-center justify-center pr-[212px] pb-[270px]">
                <img className = "h-[268px]"src = {Text} alt = "text for los angeles mountains"/>
            </div>
        </div>
    );
}

export default First;