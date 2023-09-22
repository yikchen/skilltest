import React, { useState } from "react";
import Climb from '../assets/02climb.png'
import Schedule from '../assets/schedule-content.png'
import Tab1 from '../assets/tab1.png'
import Tab2 from '../assets/tab2.png'

const Third = () => {
    
    const bg  = [Tab1, Tab2];
    const [currentIndex, setCurrentIdx] = useState(0);

    const setTab1 = () =>{
        setCurrentIdx(0)
    }

    const setTab2 = () =>{
        setCurrentIdx(1)
    }


    return (
        <div name = "third"  className="w-full h-screen">
            <div>
                <div className="flex flex-row justify-center items-center pt-14 pb-4">
                    <img src = {Climb} alt="climb Image"/>
                    <div className="px-4">
                        <p className="max-w-[670px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, libero quod illum eius porro ullam. Debitis quisquam incidunt autem rerum enim quia blanditiis delectus? Fuga.</p>
                    </div>
                </div>

                <ul className="flex w-full bg-[#414f6b] py-1 pl-[175px] text-gray-300 font-bold">
                    <li className= {!currentIndex? "text-2xl bg-gray-300 text-[#414f6b]" : "text-2xl"}>
                        <p onClick={setTab1}> MOUNTAIN1</p>
                    </li>
                    <li className={currentIndex? "text-2xl bg-gray-300 text-[#414f6b]" : "text-2xl"}>
                        <p onClick={setTab2}> MOUNTAIN2</p>
                    </li>
                </ul>

                <div>
                    <div className = "w-full h-[660px] bg-cover bg-center duration-500" style={{backgroundImage: `url(${bg[currentIndex]})`}}>
                        <div className="flex justify-center items-center py-[125px] pr-[825px]">
                            <img src = {Schedule} alt = "schedule img"/>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
}

export default Third;