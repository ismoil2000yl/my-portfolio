import React from 'react'
import { useSelector } from 'react-redux'
import ImgOquvmarkazPhone from 'assets/images/portfolio-item/oquvmarkaz-phone.png'
import ImgOquvmarkazLaptop from 'assets/images/portfolio-item/oquvmarkaz-laptop.png'
import { useNavigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from 'assets/images/portfolio/oquvmarkaz/image1.jpg'
import Img2 from 'assets/images/portfolio/oquvmarkaz/image2.jpg'
import Img3 from 'assets/images/portfolio/oquvmarkaz/image3.jpg'
import Img4 from 'assets/images/portfolio/oquvmarkaz/image4.jpg'
import Img5 from 'assets/images/portfolio/oquvmarkaz/image5.jpg'
import Img6 from 'assets/images/portfolio/oquvmarkaz/image6.jpg'
import Img7 from 'assets/images/portfolio/oquvmarkaz/image7.jpg'
import Img8 from 'assets/images/portfolio/oquvmarkaz/image8.jpg'

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
                                    currentLangCode == "UZ" ? "Oquv markaz CRM" :
                                        currentLangCode == "EN" ? "Training center CRM" :
                                            currentLangCode == "RU" && "Учебный центр CRM"
                                }
                            </h2>
                            <button className='text-white border border-solid border-white text-[16px] lg:text-[18px] rounded-md py-2 px-4 cursor-text'>
                                {
                                    currentLangCode == "UZ" ? "CRM" :
                                        currentLangCode == "EN" ? "CRM" :
                                            currentLangCode == "RU" && "CRM"
                                }
                            </button>
                        </div>
                        <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-4'>
                            <div className='w-[300px] h-[250px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[500px]'>
                                <img src={ImgOquvmarkazLaptop} className={"w-full h-full object-contain"} alt="" />
                            </div>
                            <div className='w-[300px] h-[500px] lg:p-4'>
                                <img src={ImgOquvmarkazPhone} className={"w-full h-full object-contain"} alt="" />
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
                                    <SwiperSlide>
                                        <div className='w-full mx-auto rounded-xl h-[300px] lg:h-[500px]'>
                                            <img className='w-full h-full object-contain rounded-xl' src={Img6} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='w-full mx-auto rounded-xl h-[300px] lg:h-[500px]'>
                                            <img className='w-full h-full object-contain rounded-xl' src={Img7} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='w-full mx-auto rounded-xl h-[300px] lg:h-[500px]'>
                                            <img className='w-full h-full object-contain rounded-xl' src={Img8} alt="" />
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
                                    Ant Design
                                </button>
                                <button className='text-white bg-[#5BD2A7] hover:text-[#5BD2A7] hover:bg-white transition-3s text-[16px] lg:text-[18px] rounded-md py-2 px-4 flex items-center justify-center gap-2 cursor-pointer'>
                                    {/* <img src={IconRight} className="w-[20px] h-[20px] bg-white rounded-[50%] p-[2px]" alt="" /> */}
                                    <a href={"https://crm-it-school.netlify.app"} target={"_blank"}>
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
                                        currentLangCode == "UZ" ? "O'quv markazlarni avtomatlashtirish maqsadida qilingan CRM platforma. Ushbu dasturda o'quvchilarni davomati, to'lovlari xaqida uning ota onasi ham ko'rib turadi. O'qituvchining oyliklari tarixi, qaysi oy da nechi pul olgani va olishi kerakligini ham, o'qituvchi profilida ko'rishlik mumkin. Va o'quv markazda 1 oyda nechi pul to'lov qilindi, undan qanchasi xarajatga, ustozlarga oylik ga ketdi, va nechi pul qoldi, va pulning statistikasi, o'quvchilarning statistikasi, qaysi fanda nechta o'quvchi bor, o'quvchilar oqimi qayerdan kelyapti, va yana shunga oxshash kop ishlarni avtomatlashtirilgan. Ushbu CRM ni frontendini to'liq ozim qilganman." :
                                            currentLangCode == "EN" ? "CRM platform made for the purpose of automation of educational centers. In this program, the students' attendance and fees are monitored by their parents. The teacher's salary history, how much money he received and should receive in which month can be seen in the teacher's profile. And how much money was paid in 1 month in the educational center, how much of it went to expenses, to monthly teachers, and how much money was left, and statistics of money, statistics of students, how many students there are in which subject, where the flow of students comes from is coming, and many more similar jobs are automated. I have completely customized the frontend of this CRM." :
                                                currentLangCode == "RU" && "CRM-платформа создана для автоматизации образовательных центров. В этой программе посещаемость и оплата учащихся контролируются их родителями. Историю зарплат учителя, сколько денег он получил и должен получить в каком месяце можно увидеть в профиле учителя. А сколько денег заплатили за 1 месяц в образовательном центре, сколько из них ушло на расходы, на ежемесячные учителям, и сколько денег осталось, и статистика денег, статистика учеников, сколько учеников на каком предмете , откуда идет поток студентов, и автоматизировано еще много подобных работ. Я полностью настроил интерфейс этой CRM."
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