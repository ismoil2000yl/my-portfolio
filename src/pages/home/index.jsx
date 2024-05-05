import React from 'react'
import AboutPage from './about'
import Education from './education'
import Experience from './experience'
import Portfolio from './portfolio'

const index = () => {
  return (
    <div className='w-full min-h-[100vh] bg-slate-600 pt-[70px]'>
      <AboutPage />
      <Education />
      <Experience />
      <Portfolio />
    </div>
  )
}

export default index