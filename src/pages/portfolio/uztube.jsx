import React from 'react'
import { useSelector } from 'react-redux'
import ImgUzTubePhone from 'assets/images/portfolio-item/uztube-phone.png'
import ImgUztubeLaptop from 'assets/images/portfolio-item/uztube-laptop.png'
import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from 'assets/images/portfolio/uztube/img1.jpg'
import Img2 from 'assets/images/portfolio/uztube/img2.jpg'
import Img3 from 'assets/images/portfolio/uztube/img3.jpg'
import Img4 from 'assets/images/portfolio/uztube/img4.jpg'

const legend = () => {

    const { currentLangCode } = useSelector(state => state.system)
    const navigate = useNavigate()

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    return (
        <div className='w-full min-h-[100vh] bg-slate-600 pt-[70px]'>
            <div className='w-[95%] lg:w-full mx-auto'>
                <div className="container py-[65px]">
                    <div className='w-full flex flex-col gap-4 items-center justify-center'>
                        <div className='w-full flex items-center justify-between gap-4'>
                            <h2 className='text-white hover:text-[#61DBFB] transition-3s'>
                            {
                                currentLangCode == "UZ" ? "Uztube (Youtube clone)" :
                                    currentLangCode == "EN" ? "Uztube (Youtube clone)" :
                                        currentLangCode == "RU" && "Узтубе (клон Youtube)"
                            }
                            </h2>
                            <button className='text-white border border-solid border-white text-[16px] lg:text-[18px] rounded-md py-2 px-4 cursor-text'>
                                {
                                    currentLangCode == "UZ" ? "Web Sayt" :
                                        currentLangCode == "EN" ? "Website" :
                                            currentLangCode == "RU" && "Веб-сайт"
                                }
                            </button>
                        </div>
                        <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-4'>
                            <div className='w-[300px] h-[250px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[500px]'>
                                <img src={ImgUztubeLaptop} className={"w-full h-full object-contain"} alt="" />
                            </div>
                            <div className='w-[300px] h-[500px] lg:p-4'>
                                <img src={ImgUzTubePhone} className={"w-full h-full object-contain"} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="container my-8 w-[95%] lg:w-full mx-auto">
                        <div className='w-full flex flex-col gap-4 items-center justify-between'>
                            <div className='w-full'>
                                <Swiper
                                    slidesPerView={1}
                                    centeredSlides={true}
                                    slidesPerGroupSkip={1}
                                    grabCursor={true}
                                    keyboard={{
                                        enabled: true,
                                    }}
                                    scrollbar={false}
                                    navigation={false}
                                    pagination={true}
                                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                                    className=""
                                >
                                    <SwiperSlide>
                                        <div className='w-full mx-auto rounded-xl h-[300px] lg:h-[500px]'>
                                            <img className='w-full h-full object-contain rounded-xl' src={Img1} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='w-full mx-auto rounded-xl h-[300px] lg:h-[500px]'>
                                            <img className='w-full h-full object-contain rounded-xl' src={Img2} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='w-full mx-auto rounded-xl h-[300px] lg:h-[500px]'>
                                            <img className='w-full h-full object-contain rounded-xl' src={Img3} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='w-full mx-auto rounded-xl h-[300px] lg:h-[500px]'>
                                            <img className='w-full h-full object-contain rounded-xl' src={Img4} alt="" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="w-full my-4 flex items-center justify-end gap-2 flex-wrap">
                                <button className='text-white text-[16px] lg:text-[18px] rounded-md p-2 cursor-text'>
                                    React
                                </button>
                                <span className='w-[7px] h-[7px] rounded-[50%] bg-white'></span>
                                <button className='text-white text-[16px] lg:text-[18px] rounded-md p-2 cursor-text'>
                                    Material UI
                                </button>
                                <button className='text-white bg-[#5BD2A7] hover:text-[#5BD2A7] hover:bg-white transition-3s text-[16px] lg:text-[18px] rounded-md py-2 px-4 flex items-center justify-center gap-2 cursor-pointer'>
                                    {/* <img src={IconRight} className="w-[20px] h-[20px] bg-white rounded-[50%] p-[2px]" alt="" /> */}
                                    <a href={"https://uztubetk.netlify.app"} target={"_blank"}>
                                        {
                                            currentLangCode == "UZ" ? "Saytga o'tish" :
                                                currentLangCode == "EN" ? "Go to the site" :
                                                    currentLangCode == "RU" && "Перейти на сайт"
                                        }
                                    </a>
                                </button>
                            </div>
                            <div className='w-full'>
                                <p className='p-4 text-[20px] text-white opacity-[.9] leading-[2.2rem] tracking-[2px] font-gfsn'>
                                    {
                                        currentLangCode == "UZ" ? "rapidApi orqali, youtube ni ma'lumotlari olingan" :
                                            currentLangCode == "EN" ? "via rapidApi, data from youtube is obtained" :
                                                currentLangCode == "RU" && "через RapidApi получены данные с youtube"
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default legend