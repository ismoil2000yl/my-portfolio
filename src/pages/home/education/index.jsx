import React from 'react'
import { useSelector } from 'react-redux'
import ImageSertifikat from 'assets/images/jpg/sertifikat.jpg'
import { useEffect } from 'react'

const index = () => {

    const { currentLangCode } = useSelector(state => state.system)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        VanillaTilt.init(document.querySelectorAll(".sertifikat"), {
            max: 25,
            speed: 400,
            glare: true
        });
    }, [])

    return (
        <div className='w-[95%] lg:w-full mx-auto'>
            <div className="container py-[65px]">
                <div className="mb-8 flex items-center justify-start">
                    <button className='px-4 py-2 rounded-2xl text-white border border-spacing-1 border-solid border-white'>
                        {
                            currentLangCode == "UZ" ? "Ta'lim" :
                                currentLangCode == "EN" ? "Education" :
                                    currentLangCode == "RU" && "Образование"
                        }
                    </button>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-6 items-center justify-between'>
                    <div className='flex flex-col'>
                        <div className='flex items-start justify-start gap-8 group'>
                            <div className='flex flex-col items-center justify-center'>
                                <span className='w-[13px] h-[13px] rounded-[50%] bg-[#ffffffce] group-hover:bg-[#61DBFB]'></span>
                                <span className='w-[1px] h-[140px] bg-[#ffffffce]'></span>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h4 className='text-[#ffffffce] group-hover:text-[#61DBFB]'>
                                    2023 ({currentLangCode == "UZ" ? "Mart" : currentLangCode == "EN" ? "March" : "Март"}) - 2023 ({currentLangCode == "UZ" ? "Iyun" : currentLangCode == "EN" ? "June" : "Июнь"})
                                </h4>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-[24px] text-white'>Frontend React JS (Advenced)</p>
                                    <p className='text-[12px] text-[#ffffffce]'>OKS Technologies IT Company || OKSLAB</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-start justify-start gap-8 group'>
                            <div className='flex flex-col items-center justify-center'>
                                <span className='w-[13px] h-[13px] rounded-[50%] bg-[#ffffffce] group-hover:bg-[#61DBFB]'></span>
                                <span className='w-[1px] h-[140px] bg-[#ffffffce]'></span>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h4 className='text-[#ffffffce] group-hover:text-[#61DBFB]'>2022 - 2023</h4>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-[24px] text-white'>Frontend Development</p>
                                    <p className='text-[12px] text-[#ffffffce]'>
                                        {
                                            currentLangCode == "UZ" ? "Youtube, Dokumentatsiya" :
                                                currentLangCode == "EN" ? "Youtube, Documentation" :
                                                    currentLangCode == "RU" && "Youtube, Документация"
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[300px] h-[420px] md:w-[350px] md:h-[500px] px-3 py-6 bg-[#334155] sertifikat cursor-pointer rounded-xl'>
                        <img src={ImageSertifikat} className={"w-full h-full object-cover rounded-xl"} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index