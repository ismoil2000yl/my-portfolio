import React from 'react'
import IconHome from 'assets/images/png/home.png'
import IconUz from 'assets/images/png/uz.png'
import IconRu from 'assets/images/png/ru.png'
import IconEng from 'assets/images/png/en.png'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from 'store/system'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const header = () => {

  const { currentLangCode } = useSelector(state => state.system)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [lang, setLang] = useState("EN")

  const langFunc = (lang) => {
    localStorage.setItem("lang", lang)
    dispatch(changeLanguage(lang))
  }

  useLayoutEffect(() => {
    setLang(localStorage.getItem("lang"))
  }, [])

  return (
    <div className='w-full h-[70px] bg-slate-700 text-white fixed z-[999]'>
      <div className="container h-full">
        <div className='w-[95%] mx-auto md:w-full h-full flex items-center justify-between gap-4'>
          <button className='cursor-pointer w-[50px] h-[50px]' onClick={() => { navigate("/"), window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) }}>
            <img src={IconHome} className="w-full h-full object-contain" alt="" />
          </button>
          {/* <ul className='flex items-center gap-4'>
            <li className='cursor-pointer py-1 menu-item'>
              <a className='text-white'>
                {
                  currentLangCode == "UZ" ? "Ta'lim" :
                    currentLangCode == "EN" ? "Education" :
                      currentLangCode == "RU" && "Образование"
                }
              </a>
            </li>
            <li className='cursor-pointer py-1 menu-item'>
              <a>
                {
                  currentLangCode == "UZ" ? "Tajriba" :
                    currentLangCode == "EN" ? "Experience" :
                      currentLangCode == "RU" && "Опыт"
                }
              </a>
            </li>
            <li className='cursor-pointer py-1 menu-item'>
              <a>
                {
                  currentLangCode == "UZ" ? "Portfolio" :
                    currentLangCode == "EN" ? "Portfolio" :
                      currentLangCode == "RU" && "Портфолио"
                }
              </a>
            </li>
          </ul> */}
          <li className="dropdown">
            <button className="dropbtn">
              {
                lang === null ?
                  <img
                    src={IconUz}
                    className="dropbtn__icon" alt="" />
                  :
                  <img
                    src={
                      lang === "UZ" ? IconUz :
                        lang === "EN" ? IconEng :
                          lang === "RU" && IconRu
                    }
                    className="dropbtn__icon" alt="" />
              }
            </button>
            <div className="dropdown-content">
              <a href="#" onClick={() => { langFunc("UZ"), setLang("UZ") }}>
                <img src={IconUz} alt="" />
                <span>UZ</span>
              </a>
              <a href="#" onClick={() => { langFunc("RU"), setLang("RU") }}>
                <img src={IconRu} alt="" />
                <span>RU</span>
              </a>
              <a href="#" onClick={() => { langFunc("EN"), setLang("EN") }}>
                <img src={IconEng} alt="" />
                <span>EN</span>
              </a>
            </div>
          </li>
        </div>
      </div>
    </div>
  )
}

export default header