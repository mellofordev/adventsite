import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion';
import advent_logo from '../public/advent_color_logo_bg.png';
import advent_logo_black from '../public/advent_logo_black.png';
import { useEffect, useState } from 'react';

export default function Home() {
  const counter = new Date("May 30,2023 09:30:00").getTime();
  const [day,setDay] = useState(0);
  const [hour,setHour] = useState(0);
  const [minute,setMinute] = useState(0);
  const [second,setSecond] = useState(0);
  useEffect(()=>{
    setInterval(()=>{
      var now = new Date().getTime();
      var timelapsed = counter-now;
      var min = Math.floor((timelapsed%(1000*60*60))/(1000*60));
      var sec = Math.floor((timelapsed%(1000*60))/1000);
      setDay(Math.floor(timelapsed/(1000*60*60*24)));
      setHour(Math.floor((timelapsed%(1000*60*60*24))/(1000*60*60)));
      setMinute(min);
      setSecond(sec)
    },1000)
  },[second])
  return (
    <div className={styles.container}>
      <header className='header'>
        <Image src={advent_logo} className='headerImg'/>
        <nav className='navitems'>
          <a href='#'>home</a>
          <a href='#'>about</a>
          <a href='#'>events</a>
          <a href='#'>cult 11</a>
        </nav>
      </header>
      <div className={styles.main}>
        <div className='flexContainer'>
          <div className='timeContainer'>
            <div className='boxTimer'>
              <h1>{day}</h1>
              <h2>Days</h2>
            </div>
            <div className='boxTimer'>
              <h1>{hour}</h1>
              <h2>Hours</h2>
            </div>
            <div className='boxTimer'>
              <h1>{minute}</h1>
              <h2>Minutes</h2>
            </div>
            <div className='boxTimer'>
              <h1>{second}</h1>
              <h2>Seconds</h2>
            </div>
          </div>
          <div className='rightSide'>
          <div className='rightSideIntro'>
            <h1>Let's go It's Advent May 30,2023</h1>
          </div>
          <div className='mobileView'>
            <img src='https://io.google/2023/app/images/extend-cta-dark.svg' style={{marginLeft:60}}/>
          </div>
          <div className='mobileTextMove'>
                  <div  className='flexRowContainer'>
                    <h1>advent'23</h1>
                    <h1>engineering</h1>
                    <h1>playground</h1>
                    <h1>advent'23</h1>
                    <h1>engineering</h1>
                    <h1>playground</h1>
                  </div>
          </div>
          <div className='rightSideVid'>
            <iframe width="100%" height="300" style={{borderRadius:25,margin:5}} src="https://www.youtube.com/embed/kRQZ803JrbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media"></iframe>
          </div>
          </div>
        </div>
        <div className='firstViewer'>
          <img src='https://io.google/2023/app/images/keynote.webp'/>
          <h2>Come and experience Engineering playground</h2>
          <button className='firstViewerButton'>explore events</button>
        </div>
        <div className='overviewContainer'>
          <div className='overviewBoxContainer'>
            <img src='https://io.google/2023/data/im/9fe491dd-cadc-4e03-b084-f75e695993ea.webp'/>
            <h2>Tech Expo</h2>
          </div>
          <div className='overviewBoxContainer'>
            <img src='https://io.google/2023/data/im/9fe491dd-cadc-4e03-b084-f75e695993ea.webp'/>
            <h2>Proshow</h2>
          </div>
          <div className='overviewBoxContainer'>
            <img src='https://io.google/2023/data/im/9fe491dd-cadc-4e03-b084-f75e695993ea.webp'/>
            <h2>Workshops</h2>
          </div>
        </div>
        <div className='aboutContainer'>
          <div className='aboutTextContainer'>
            <h1>Advent is the annual tech fest brought to you by Cult a way </h1>
            <button className='buttonMain'>See the legacy</button>
          </div>
          <Image src={advent_logo_black} className='aboutImage'/>
        </div>
      </div>
    </div>
  )
}
