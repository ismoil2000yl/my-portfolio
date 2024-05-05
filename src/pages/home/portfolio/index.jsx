import React from 'react'
import { useSelector } from 'react-redux'
import ImgLegendPhone from 'assets/images/portfolio-item/legend-phone.png'
import ImgLegendLaptop from 'assets/images/portfolio-item/legend-laptop.png'
import ImgOquvmarkazPhone from 'assets/images/portfolio-item/oquvmarkaz-phone.png'
import ImgOquvmarkazLaptop from 'assets/images/portfolio-item/oquvmarkaz-laptop.png'
import ImgSifatnazoratiPhone from 'assets/images/portfolio-item/sifatnazorati-phone.png'
import ImgSifatNazoratiLaptop from 'assets/images/portfolio-item/sifatnazorati-laptop.jpg'
import ImgFazogramPhone from 'assets/images/portfolio-item/fazogram-phone.png'
import ImgFazogramLaptop from 'assets/images/portfolio-item/fazogram-laptop.png'
import ImgUzTubePhone from 'assets/images/portfolio-item/uztube-phone.png'
import ImgUztubeLaptop from 'assets/images/portfolio-item/uztube-laptop.png'
import ImgMitagroupPhone from 'assets/images/portfolio-item/mitagroup-phone.png'
import ImgMitagroupLaptop from 'assets/images/portfolio-item/mitagroup-laptop.png'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const { currentLangCode } = useSelector(state => state.system)
    const navigate = useNavigate()

    return (
        <div className='w-[95%] lg:w-full mx-auto'>
            <div className="container py-[65px]">
                <div className="mb-8 flex items-center justify-start">
                    <button className='px-4 py-2 rounded-2xl text-white border border-spacing-1 border-solid border-white'>
                        {
                            currentLangCode == "UZ" ? "Portfolio" :
                                currentLangCode == "EN" ? "Portfolio" :
                                    currentLangCode == "RU" && "Портфолио"
                        }
                    </button>
                </div>
                <div className='w-full flex flex-col gap-4 items-center justify-center mb-10'>
                    <div className='w-full flex items-center justify-between gap-4'>
                        <h2 className='text-white hover:text-[#61DBFB] transition-3s'>
                            {
                                currentLangCode == "UZ" ? "Legend kiyim dukoni" :
                                    currentLangCode == "EN" ? "Legend clothing store" :
                                        currentLangCode == "RU" && "Легенд, магазин одежды"
                            }
                        </h2>
                        <button
                            className='px-4 py-2 rounded-2xl text-white bg-[#5BD2A7] cursor-pointer hover:text-[#5BD2A7] hover:bg-white transition-3s'
                            onClick={() => navigate("/portfolio/legend")}
                        >
                            {
                                currentLangCode == "UZ" ? "Batafsil" :
                                    currentLangCode == "EN" ? "More" :
                                        currentLangCode == "RU" && "Более"
                            }
                        </button>
                    </div>
                    <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-4'>
                        <div className='w-[300px] h-[250px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[500px]'>
                            <img src={ImgLegendLaptop} className={"w-full h-full object-contain"} alt="" />
                        </div>
                        <div className='w-[300px] h-[500px] lg:p-4'>
                            <img src={ImgLegendPhone} className={"w-full h-full object-contain"} alt="" />
                        </div>
                    </div>
                </div> <hr />
                <div className='w-full flex flex-col gap-4 items-center justify-center my-10'>
                    <div className='w-full flex items-center justify-between gap-4'>
                        <h2 className='text-white hover:text-[#61DBFB] transition-3s'>
                            {
                                currentLangCode == "UZ" ? "Oquv markaz CRM" :
                                    currentLangCode == "EN" ? "Training center CRM" :
                                        currentLangCode == "RU" && "Учебный центр CRM"
                            }
                        </h2>
                        <button
                            className='px-4 py-2 rounded-2xl text-white bg-[#5BD2A7] cursor-pointer hover:text-[#5BD2A7] hover:bg-white transition-3s'
                            onClick={() => navigate("/portfolio/oquvmarkaz")}
                        >
                            {
                                currentLangCode == "UZ" ? "Batafsil" :
                                    currentLangCode == "EN" ? "More" :
                                        currentLangCode == "RU" && "Более"
                            }
                        </button>
                    </div>
                    <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-4'>
                        <div className='w-[300px] h-[500px] lg:p-4'>
                            <img src={ImgOquvmarkazPhone} className={"w-full h-full object-contain"} alt="" />
                        </div>
                        <div className='w-[300px] h-[250px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[500px]'>
                            <img src={ImgOquvmarkazLaptop} className={"w-full h-full object-contain"} alt="" />
                        </div>
                    </div>
                </div> <hr />
                <div className='w-full flex flex-col gap-4 items-center justify-center my-10'>
                    <div className='w-full flex items-center justify-between gap-4'>
                        <h2 className='text-white hover:text-[#61DBFB] transition-3s'>
                            {
                                currentLangCode == "UZ" ? "Sifat nazorati CRM" :
                                    currentLangCode == "EN" ? "Quality Control CRM" :
                                        currentLangCode == "RU" && "Контроль качества CRM"
                            }
                        </h2>
                        {/* <button className='px-4 py-2 rounded-2xl text-white bg-[#5BD2A7] cursor-pointer hover:text-[#5BD2A7] hover:bg-white transition-3s'>
                            {
                                currentLangCode == "UZ" ? "Batafsil" :
                                    currentLangCode == "EN" ? "More" :
                                        currentLangCode == "RU" && "Более"
                            }
                        </button> */}
                    </div>
                    <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-4'>
                        <div className='w-[300px] h-[250px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[500px]'>
                            <img src={ImgSifatNazoratiLaptop} className={"w-full h-full object-contain"} alt="" />
                        </div>
                        <div className='w-[300px] h-[500px] lg:p-4'>
                            <img src={ImgSifatnazoratiPhone} className={"w-full h-full object-contain"} alt="" />
                        </div>
                    </div>
                </div> <hr />
                <div className='w-full flex flex-col gap-4 items-center justify-center my-10'>
                    <div className='w-full flex items-center justify-between gap-4'>
                        <h2 className='text-white hover:text-[#61DBFB] transition-3s'>
                            {
                                currentLangCode == "UZ" ? "Fazogram Ijtimoiy Tarmog'i" :
                                    currentLangCode == "EN" ? "Fazogram Social Network" :
                                        currentLangCode == "RU" && "Социальная сеть Фазограм"
                            }
                        </h2>
                        <button
                            className='px-4 py-2 rounded-2xl text-white bg-[#5BD2A7] cursor-pointer hover:text-[#5BD2A7] hover:bg-white transition-3s'
                            onClick={() => navigate("/portfolio/fazogram")}
                        >
                            {
                                currentLangCode == "UZ" ? "Batafsil" :
                                    currentLangCode == "EN" ? "More" :
                                        currentLangCode == "RU" && "Более"
                            }
                        </button>
                    </div>
                    <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-4'>
                        <div className='w-[300px] h-[500px] lg:p-4'>
                            <img src={ImgFazogramPhone} className={"w-full h-full object-contain"} alt="" />
                        </div>
                        <div className='w-[300px] h-[250px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[500px]'>
                            <img src={ImgFazogramLaptop} className={"w-full h-full object-contain"} alt="" />
                        </div>
                    </div>
                </div> <hr />
                <div className='w-full flex flex-col gap-4 items-center justify-center my-10'>
                    <div className='w-full flex items-center justify-between gap-4'>
                        <h2 className='text-white hover:text-[#61DBFB] transition-3s'>
                            {
                                currentLangCode == "UZ" ? "Uztube (Youtube clone)" :
                                    currentLangCode == "EN" ? "Uztube (Youtube clone)" :
                                        currentLangCode == "RU" && "Узтубе (клон Youtube)"
                            }
                        </h2>
                        <button
                            className='px-4 py-2 rounded-2xl text-white bg-[#5BD2A7] cursor-pointer hover:text-[#5BD2A7] hover:bg-white transition-3s'
                            onClick={() => navigate("/portfolio/uztube")}
                        >
                            {
                                currentLangCode == "UZ" ? "Batafsil" :
                                    currentLangCode == "EN" ? "More" :
                                        currentLangCode == "RU" && "Более"
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
                </div> <hr />
                <div className='w-full flex flex-col gap-4 items-center justify-center my-10'>
                    <div className='w-full flex items-center justify-between gap-4'>
                        <h2 className='text-white hover:text-[#61DBFB] transition-3s'>
                            {
                                currentLangCode == "UZ" ? "MITA Group (verstka)" :
                                    currentLangCode == "EN" ? "MITA Group" :
                                        currentLangCode == "RU" && "MITA Group"
                            }
                        </h2>
                        <button
                            className='px-4 py-2 rounded-2xl text-white bg-[#5BD2A7] cursor-pointer hover:text-[#5BD2A7] hover:bg-white transition-3s'
                            onClick={() => navigate("/portfolio/mitagroup")}
                        >
                            {
                                currentLangCode == "UZ" ? "Batafsil" :
                                    currentLangCode == "EN" ? "More" :
                                        currentLangCode == "RU" && "Более"
                            }
                        </button>
                    </div>
                    <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-4'>
                        <div className='w-[300px] h-[500px] lg:p-4'>
                            <img src={ImgMitagroupPhone} className={"w-full h-full object-contain"} alt="" />
                        </div>
                        <div className='w-[300px] h-[250px] md:w-[600px] md:h-[450px] lg:w-[800px] lg:h-[500px]'>
                            <img src={ImgMitagroupLaptop} className={"w-full h-full object-contain"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index