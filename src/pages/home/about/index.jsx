import React from 'react'
import ImageMe from 'assets/images/jpg/men.jpg'
import IconReact from 'assets/images/png/react.png'
import IconGithub from 'assets/images/png/github.png'
import IconLinkedin from 'assets/images/png/linkedin.png'
import IconTelegram from 'assets/images/png/telegram.png'
import IconInstagram from 'assets/images/png/instagram.png'
import IconFacebook from 'assets/images/png/facebook.png'
import IconHome from 'assets/images/png/home.png'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const index = () => {

  const { currentLangCode } = useSelector(state => state.system)

  const onButtonClick = () => {
    const pdfUrl = "assets/images/Ismoil-Jalolov.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Ismoil-Jalolov.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='w-[95%] lg:w-full mx-auto'>
      <div className="container py-[65px]">
        <div className="mb-8 flex items-center justify-between">
          <button className='w-[40px] p-1 h-[40px] rounded-2xl text-white border border-spacing-1 border-solid border-white'>
            <img src={IconHome} className="w-full h-full object-contain rounded-[50%]" alt="" />
          </button>
          <button onClick={() => onButtonClick()} className='px-4 py-2 cursor-pointer rounded-2xl text-white bg-[#5BD2A7] hover:text-[#5BD2A7] hover:bg-white flex items-center gap-2 resume-download transition-3s'>
            <span>
              CV
            </span>
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 16L4 17C4 18.6569 5.34315 20 7 20L17 20C18.6569 20 20 18.6569 20 17L20 16M16 12L12 16M12 16L8 12M12 16L12 4"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className='transition-3s'
              />
            </svg>
          </button>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-4'>
          <div className='w-[300px] h-full flex flex-col items-center justify-center gap-2'>
            <div className='bg-white p-2 rounded-[50%] w-[250px] h-[250px] relative'>
              <img src={ImageMe} className={"w-full h-full object-contain rounded-[50%]"} />
            </div>
            <div className='text-white px-4 py-2 rounded-lg bg-[#334155]'>
              <h2>
                {
                  currentLangCode == "UZ" ? "Ismoil Jalolov" :
                    currentLangCode == "EN" ? "Ismoil Jalolov" :
                      currentLangCode == "RU" && "Исмоил Жалолов"
                }
              </h2>
            </div>
            <h4 className='text-white'>
              {
                currentLangCode == "UZ" ? "Namangan, O'zbekiston" :
                  currentLangCode == "EN" ? "Namangan, Uzbekistan" :
                    currentLangCode == "RU" && "Наманган, Узбекистан"
              }
            </h4>
          </div>
          <div className=''>
            <div className='w-full'>
              <p className='text-[white] text-[45px] md:text-[55px] lg:text-[70px]'>Frontend</p><br />
              <div className='flex items-center justify-start gap-2'>
                <p className='text-[#61DBFB] text-[45px] md:text-[55px] lg:text-[70px]'>React</p><br />
                <img src={IconReact} className={"w-[45px] md:w-[55px] lg:w-[70px] h-[45px] md:h-[55px] lg:h-[70px] object-contain react-icon"} alt="" />
              </div>
              <p className='text-[white] text-[45px] md:text-[55px] lg:text-[70px] mt-3'>
                {
                  currentLangCode == "UZ" ? "Dasturchi" :
                    currentLangCode == "EN" ? "Developer" :
                      currentLangCode == "RU" && "Разработчик"
                }
              </p>
            </div>
          </div>
          <div className=''>
            <div className='flex flex-row md:flex-col items-center justify-center gap-4'>
              <a href={"https://github.com/ismoil2000yl"} target={"_blank"} className='w-[35px] h-[35px] bg-white p-[2px] cursor-pointer hover:scale-[1.1] rounded-[50%]'>
                <img src={IconGithub} className={"w-full h-full object-contain rounded-[50%]"} alt="" />
              </a>
              {/* <a href={"https://github.com/ismoil2000yl"} target={"_blank"} className='w-[35px] h-[35px] bg-white p-[2px] cursor-pointer hover:scale-[1.1] rounded-[50%]'>
                <img src={IconLinkedin} className={"w-full h-full object-contain rounded-[50%]"} alt="" />
              </a> */}
              <a href={"https://t.me/ismoil2000yl"} target={"_blank"} className='w-[35px] h-[35px] bg-white p-[2px] cursor-pointer hover:scale-[1.1] rounded-[50%]'>
                <img src={IconTelegram} className={"w-full h-full object-contain rounded-[50%]"} alt="" />
              </a>
              <a href={"https://instagram.com/ismoil2000yl"} target={"_blank"} className='w-[35px] h-[35px] bg-white p-[2px] cursor-pointer hover:scale-[1.1] rounded-[50%]'>
                <img src={IconInstagram} className={"w-full h-full object-contain rounded-[50%]"} alt="" />
              </a>
              <a href={"https://facebook.com/ismoil2000yl"} target={"_blank"} className='w-[35px] h-[35px] bg-white p-[2px] cursor-pointer hover:scale-[1.1] rounded-[50%]'>
                <img src={IconFacebook} className={"w-full h-full object-contain rounded-[50%]"} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index