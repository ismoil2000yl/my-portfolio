import React from 'react'
import { useSelector } from 'react-redux'
import ImgFazogramPhone from 'assets/images/portfolio-item/fazogram-phone.png'
import ImgFazogramLaptop from 'assets/images/portfolio-item/fazogram-laptop.png'
import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from 'assets/images/portfolio/fazogram/img1.jpg'
import Img2 from 'assets/images/portfolio/fazogram/img2.jpg'
import Img3 from 'assets/images/portfolio/fazogram/img3.jpg'
import Img4 from 'assets/images/portfolio/fazogram/img4.jpg'
import Img5 from 'assets/images/portfolio/fazogram/img5.jpg'

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
                                    currentLangCode == "UZ" ? "Fazogram Ijtimoiy Tarmog'i" :
                                        currentLangCode == "EN" ? "Fazogram Social Network" :
                                            currentLangCode == "RU" && "Социальная сеть Фазограм"
                                }
                            </h2>
                            <button className='text-white border border-solid border-white text-[16px] lg:text-[18px] rounded-md py-2 px-4 cursor-text'>
                                {
                                    currentLangCode == "UZ" ? "Ijtimoiy tarmoq" :
                                        currentLangCode == "EN" ? "Social Network" :
                                            currentLangCode == "RU" && "Социальная сеть"
                                }
                            </button>
                        </div>
                        <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-4'>
                            <div className='w-[300px] h-[250px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[500px]'>
                                <img src={ImgFazogramLaptop} className={"w-full h-full object-contain"} alt="" />
                            </div>
                            <div className='w-[300px] h-[500px] lg:p-4'>
                                <img src={ImgFazogramPhone} className={"w-full h-full object-contain"} alt="" />
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
                                    <SwiperSlide>
                                        <div className='w-full mx-auto rounded-xl h-[300px] lg:h-[500px]'>
                                            <img className='w-full h-full object-contain rounded-xl' src={Img5} alt="" />
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
                                    Redux-toolkit
                                </button>
                                <span className='w-[7px] h-[7px] rounded-[50%] bg-white'></span>
                                <button className='text-white text-[16px] lg:text-[18px] rounded-md p-2 cursor-text'>
                                    Tailwind CSS
                                </button>
                                <span className='w-[7px] h-[7px] rounded-[50%] bg-white'></span>
                                <button className='text-white text-[16px] lg:text-[18px] rounded-md p-2 cursor-text'>
                                    Node || Express JS
                                </button>
                                <span className='w-[7px] h-[7px] rounded-[50%] bg-white'></span>
                                <button className='text-white text-[16px] lg:text-[18px] rounded-md p-2 cursor-text'>
                                    Socekt.io
                                </button>
                                <span className='w-[7px] h-[7px] rounded-[50%] bg-white'></span>
                                <button className='text-white text-[16px] lg:text-[18px] rounded-md p-2 cursor-text'>
                                    Mongo DB
                                </button>
                                <button className='text-white bg-[#5BD2A7] hover:text-[#5BD2A7] hover:bg-white transition-3s text-[16px] lg:text-[18px] rounded-md py-2 px-4 flex items-center justify-center gap-2 cursor-pointer'>
                                    {/* <img src={IconRight} className="w-[20px] h-[20px] bg-white rounded-[50%] p-[2px]" alt="" /> */}
                                    <a href={"https://fazo-gram.netlify.app/"} target={"_blank"}>
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
                                        currentLangCode == "UZ" ? "Fazogram ijtimoiy tarmog'i. Xali to'liq yakunlanmagan, lekin chat va profilga ma'lumot yuklash qismi tayyor bolgan. Ozim uchun fullstack loyiha. Frontend qismi React, backend qismi NodeJS va socket.io, redux-toolkit, tailwindcss texnalogiyalari orqali qilingan." :
                                            currentLangCode == "EN" ? "Fasogram social network. Not quite finished yet, but the chat and profile upload part is ready. Fullstack project for Ozim. The frontend part is made by React, the backend part is made by NodeJS and socket.io, redux-toolkit, tailwindcss technologies." :
                                                currentLangCode == "RU" && "Социальная сеть Fasogram. Еще не совсем закончено, но часть загрузки чата и профиля уже готова. Fullstack-проект для Ozim. Фронтенд-часть создана на React, бэкэнд-часть — на NodeJS и технологиях Socket.io, redux-toolkit, Tailwindcss."
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