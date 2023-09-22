import React from "react";
import Text from '../assets/01history.png'
import Bg from '../assets/Bg.png'
import Navbar2 from "./Navbar2";


const Second = () => {
    return (
        <div name = 'second' className="w-full h-screen bg-cover text-blue-900" style={{backgroundImage: `url(${Bg})`}}>
            <Navbar2/>
            <div className="flex flex-col w-full h-full">
                <div className="px-[350px] pt-[56px]">
                    <img className = "" src = {Text} alt = "text 01 history"/>
                </div>
                <div className="self-center">
                <p className="max-w-[1092px] text-xl text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sint consequatur ducimus. 
                    Quis quasi, illum tempore aliquam blanditiis neque praesentium non! Modi dolor in non. Consectetur, 
                    vel laboriosam quod ipsam perspiciatis delectus nam adipisci eum accusantium suscipit dolores numquam 
                    animi necessitatibus molestias sequi similique blanditiis rem.
                </p>
                </div>
                
            </div>
        </div>
    );
}

export default Second;