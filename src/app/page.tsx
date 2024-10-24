'use client'

import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { RxDot } from "react-icons/rx";
import winery1 from '../../public/M.S.Torun Winery.jpeg'
import winery2 from '../../public/M.S.Torun Winery overhead view.jpeg'
import sidsib from '../../public/Sid Torun and Siyabend Kaya.jpeg'
import asia1 from '../../public/Asia 1.jpeg'
import asia2 from '../../public/Asia2.jpeg'
import asia3 from '../../public/Asia3.jpeg'
import eur1 from '../../public/Europe 1.jpeg'
import eur2 from '../../public/Europe 2.jpeg'
import nam1 from '../../public/North America 1.jpeg'
import nam2 from '../../public/North America 2.jpeg'
import nam3 from '../../public/North America 3.jpeg'
import aus1 from '../../public/Australia 1.jpeg'
import aus2 from '../../public/Australia 2.jpeg'
import aus3 from '../../public/Australia 3.jpeg'
import sam1 from '../../public/South America 1.jpeg'
import sam2 from '../../public/South America 2.jpeg'
import sam3 from '../../public/South America 3.jpeg'
import afr1 from '../../public/Africa 1.jpeg'
import afr2 from '../../public/Africa 2.jpeg'
import afr3 from '../../public/Africa 3.jpeg'
import ant1 from '../../public/Antarctica 1.jpeg'
import ant2 from '../../public/Antarctica 2.jpeg'
import ant3 from '../../public/Antarctica 3.jpeg'
import wineryPre from '../../public/The winery before.jpeg'
import sibwindow from '../../public/Siyabend framför omålad fönsterlucka.jpeg'
import window from '../../public/omålade fönsterluckorna inifrån.jpeg'
import wip1 from '../../public/work in progress 1.jpeg'
import wip2 from '../../public/Work in progress 2.jpeg'
import wip3 from '../../public/Work in progress 3.jpeg'
import wip4 from '../../public/Work in progress 4.jpeg'
import wip5 from '../../public/work in progress 5.jpeg'
import wip6 from '../../public/work in progress 6.jpeg'
import wip7 from '../../public/work in progress 7.jpeg'
import wip8 from '../../public/work in progress 8.jpeg'

export default function Home() {
    const slides = [
        winery1,
        winery2,
        sidsib,
        asia1,
        asia2,
        asia3,
        eur1,
        eur2,
        nam1,
        nam2,
        nam3,
        aus1,
        aus2,
        aus3,
        sam1,
        sam2,
        sam3,
        afr1,
        afr2,
        afr3,
        ant1,
        ant2,
        ant3,
        wineryPre,
        sibwindow,
        window,
        wip1,
        wip2,
        wip3,
        wip4,
        wip5,
        wip6,
        wip7,
        wip8
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <main className="max-w-[1400px] max-h-[600px] w-full m-auto py-4 px-4 relative flex flex-col items-center">
            <img className="HÖG w-[100%] md:max-w-[500px] rounded-lg" src={`${slides[currentIndex].src}`} />
            <div onClick={prevSlide}  className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer">
                <ChevronLeft size={30} />
            </div>
            <div onClick={nextSlide} className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer">
                <ChevronRight size={30} />
            </div>
            {/* <div className="flex top-4 justify-center py-2 text-sm -m-1">
                {slides.map((slide, index) => (
                    <div key={index} onClick={() => goToSlide(index)} className="cursor-pointer">
                        {currentIndex === index ? <RxDotFilled /> : <RxDot />}
                    </div>
                ))}
            </div> */}
        </main>
    );
}
