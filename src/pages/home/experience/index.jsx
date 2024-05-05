import React from 'react'
import { useSelector } from 'react-redux'
import IconHtmlCss from 'assets/images/png/htmlcss.png'
import IconJavascript from 'assets/images/png/javascript.png'
import IconSass from 'assets/images/png/sass.png'
import IconReact from 'assets/images/png/react.png'
import IconTailwindcss from 'assets/images/png/tailwindcss.png'
import IconMUI from 'assets/images/png/mui.png'
import IconAntd from 'assets/images/png/antd.png'
import IconReduxToolkit from 'assets/images/png/redux-toolkit.png'
import IconFormik from 'assets/images/png/formik.png'
import IconReactquery from 'assets/images/png/reactquery.png'
import IconFigma from 'assets/images/png/figma.png'

const index = () => {

    const { currentLangCode } = useSelector(state => state.system)

    return (
        <div className='w-[95%] lg:w-full mx-auto'>
            <div className="container py-[65px]">
                <div className="mb-8 flex items-center justify-start">
                    <button className='px-4 py-2 rounded-2xl text-white border border-spacing-1 border-solid border-white'>
                        {
                            currentLangCode == "UZ" ? "Tajriba" :
                                currentLangCode == "EN" ? "Experience" :
                                    currentLangCode == "RU" && "Опыт"
                        }
                    </button>
                </div>
                <div className='w-full flex flex-col lg:flex-row gap-6 items-start justify-start'>
                    <div className='w-[400px] flex flex-col'>
                        <div className='flex items-start justify-start gap-8 group'>
                            <div className='flex flex-col items-center justify-center'>
                                <span className='w-[13px] h-[13px] rounded-[50%] bg-[#ffffffce] group-hover:bg-[#61DBFB]'></span>
                                <span className='w-[1px] h-[140px] bg-[#ffffffce]'></span>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <h4 className='text-[#ffffffce] group-hover:text-[#61DBFB]'>
                                    2023 ({currentLangCode == "UZ" ? "Sentabr" : currentLangCode == "EN" ? "September" : "Сентябрь"}) - ({currentLangCode == "UZ" ? "Hozirgacha" : currentLangCode == "EN" ? "Until now" : "До настоящего времени"})
                                </h4>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-[24px] text-white'>Frontend Developer</p>
                                    <p className='text-[12px] text-[#ffffffce]'>Fazo Software IT Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h3 className='text-center uppercase text-white tracking-wide'>
                            {
                                currentLangCode == "UZ" ? "men bilgan texnalogiyalar" :
                                    currentLangCode == "EN" ? "technologies that I know" :
                                        currentLangCode == "RU" && "технологии, которые я знаю"
                            }
                        </h3>
                        <div className='w-full flex flex-wrap gap-4 items-center justify-center my-4'>
                            <div className='group transition-3s'>
                                <div className='border border-solid border-spacing-1 border-[#ffffffce] rounded-xl w-[130px] h-[130px] p-2 group-hover:border-[#61DBFB] transition-3s'>
                                    <img src={IconHtmlCss} className={"w-full h-full object-contain"} alt="" />
                                </div>
                                <p className='text-center text-[16px] mt-3 text-white group-hover:text-[#61DBFB] transition-3s'>Html & CSS</p>
                            </div>
                            <div className='group transition-3s'>
                                <div className='border border-solid border-spacing-1 border-[#ffffffce] rounded-xl w-[130px] h-[130px]  group-hover:border-[#61DBFB] transition-3s'>
                                    <img src={IconJavascript} className={"w-full h-full object-contain"} alt="" />
                                </div>
                                <p className='text-center text-[16px] mt-3 text-white group-hover:text-[#61DBFB] transition-3s'>JavaScript</p>
                            </div>
                            <div className='group transition-3s'>
                                <div className='border border-solid border-spacing-1 border-[#ffffffce] rounded-xl w-[130px] h-[130px] p-4 group-hover:border-[#61DBFB] transition-3s'>
                                    <img src={IconReact} className={"w-full h-full object-contain"} alt="" />
                                </div>
                                <p className='text-center text-[16px] mt-3 text-white group-hover:text-[#61DBFB] transition-3s'>React</p>
                            </div>
                            <div className='group transition-3s'>
                                <div className='border border-solid border-spacing-1 border-[#ffffffce] rounded-xl w-[130px] h-[130px] p-4 group-hover:border-[#61DBFB] transition-3s'>
                                    <img src={IconSass} className={"w-full h-full object-contain"} alt="" />
                                </div>
                                <p className='text-center text-[16px] mt-3 text-white group-hover:text-[#61DBFB] transition-3s'>Sass (BEM)</p>
                            </div>
                            <div className='group transition-3s'>
                                <div className='border border-solid border-spacing-1 border-[#ffffffce] rounded-xl w-[130px] h-[130px] p-4 group-hover:border-[#61DBFB] transition-3s'>
                                    <img src={IconTailwindcss} className={"w-full h-full object-contain"} alt="" />
                                </div>
                                <p className='text-center text-[16px] mt-3 text-white group-hover:text-[#61DBFB] transition-3s'>Tailwind CSS</p>
                            </div>
                            <div className='group transition-3s'>
                                <div className='border border-solid border-spacing-1 border-[#ffffffce] rounded-xl w-[130px] h-[130px] p-4 group-hover:border-[#61DBFB] transition-3s'>
                                    <img src={IconMUI} className={"w-full h-full object-contain"} alt="" />
                                </div>
                                <p className='text-center text-[16px] mt-3 text-white group-hover:text-[#61DBFB] transition-3s'>Material UI</p>
                            </div>
                            <div className='group transition-3s'>
                                <div className='border border-solid border-spacing-1 border-[#ffffffce] rounded-xl w-[130px] h-[130px] p-4 group-hover:border-[#61DBFB] transition-3s'>
                                    <img src={IconAntd} className={"w-full h-full object-contain"} alt="" />
                                </div>
                                <p className='text-center text-[16px] mt-3 text-white group-hover:text-[#61DBFB] transition-3s'>Antd Design</p>
                            </div>
                            <div className='group transition-3s'>
                                <div className='border border-solid border-spacing-1 border-[#ffffffce] rounded-xl w-[130px] h-[130px] p-4 group-hover:border-[#61DBFB] transition-3s'>
                                    <img src={IconReduxToolkit} className={"w-full h-full object-contain"} alt="" />
                                </div>
                                <p className='text-center text-[16px] mt-3 text-white group-hover:text-[#61DBFB] transition-3s'>Redux Toolkit</p>
                            </div>
                            <div className='group transition-3s'>
                                <div className='border border-solid border-spacing-1 border-[#ffffffce] rounded-xl w-[130px] h-[130px] p-4 group-hover:border-[#61DBFB] transition-3s'>
                                    <img src={IconFormik} className={"w-full h-full object-contain"} alt="" />
                                </div>
                                <p className='text-center text-[16px] mt-3 text-white group-hover:text-[#61DBFB] transition-3s'>Formik</p>
                            </div>
                            <div className='group transition-3s'>
                                <div className='border border-solid border-spacing-1 border-[#ffffffce] rounded-xl w-[130px] h-[130px] p-4 group-hover:border-[#61DBFB] transition-3s'>
                                    <img src={IconReactquery} className={"w-full h-full object-contain"} alt="" />
                                </div>
                                <p className='text-center text-[16px] mt-3 text-white group-hover:text-[#61DBFB] transition-3s'>Reactquery</p>
                            </div>
                            <div className='group transition-3s'>
                                <div className='border border-solid border-spacing-1 border-[#ffffffce] rounded-xl w-[130px] h-[130px] p-4 group-hover:border-[#61DBFB] transition-3s'>
                                    <img src={IconFigma} className={"w-full h-full object-contain"} alt="" />
                                </div>
                                <p className='text-center text-[16px] mt-3 text-white group-hover:text-[#61DBFB] transition-3s'>Figma (verstka)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index