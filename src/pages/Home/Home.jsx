import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero_banner from '../../assets/hero_banner.jpg'
import Hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={Hero_banner} className='banner-img' alt="" />
        <div className="hero-caption">
          <img src={Hero_title} alt=""  className='caption-img'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laudantium minus possimus nemo eos magnam? Nihil ex quaerat obcaecati.
              Vero, voluptates sunt suscipit sit iure velit ex quisquam. Quo, ab fugit!</p>
              <div className="hero-btns">
                <button className='btn'><img src={play_icon} alt="" />play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
             <TitleCards/>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Home