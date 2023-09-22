import React, { useState } from "react";
import Thumb1 from '../assets/thumb1.png';
import Thumb2 from '../assets/thumb2.png';
import {RxDotFilled} from 'react-icons/rx'
const Gallery = () =>{

    const slides = [Thumb1, Thumb2];

    const [currentIndex, setCurrentIdex] = useState(0)

    const setIdx = (slideIndex) => {
        const isZero = slideIndex === 0;
        const newIdx = isZero ? 0 : 1;
        setCurrentIdex(newIdx)
    }

    return(
        <div className="w-full h-[200px] bg-[#414f6b] ">
            <div className="grid grid-cols-4 gap-1 w-full h-full px-[512px] pt-8">
                <div style = {{backgroundImage: `url(${slides[currentIndex]})`}} className="w-full h-full bg-center bg-cover duration-500 flex  mx-auto"></div>
                <div style = {{backgroundImage: `url(${slides[currentIndex]})`}} className="w-full h-full bg-center bg-cover duration-500 flex  mx-auto"></div>
                <div style = {{backgroundImage: `url(${slides[currentIndex]})`}} className="w-full h-full bg-center bg-cover duration-500 flex  mx-auto"></div>
                <div style = {{backgroundImage: `url(${slides[currentIndex]})`}} className="w-full h-full bg-center bg-cover duration-500 flex  mx-auto"></div>
            </div>
            <div className="w-full flex justify-center bg-[#414f6b]">
                <div key = {0} onClick = {() => setIdx(0)} className="text-2xl cursor-pointer">
                    <RxDotFilled/>
                </div>
                <div key = {1} onClick = {() => setIdx(1)} className="text-2xl cursor-pointer">
                    <RxDotFilled/>
                </div>
                <div key = {2} onClick = {() => setIdx(0)} className="text-2xl cursor-pointer">
                    <RxDotFilled/>
                </div>
            </div>
        </div>
    );
}

export default Gallery;