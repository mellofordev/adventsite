import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import {motion} from 'framer-motion';
import advent_logo_black from '../public/advent_logo/advent_black.png';
import wrap from '../public/wrap.svg';
import { useEffect, useState } from 'react';
import TopNavComponent from './TopNavComponent';
import TimeCounter from './TimeCounter';
import MobileNav from './MobileNav';
import Footer from './Footer';
import {useRouter} from 'next/navigation';
export default function Home() {
  const overview_data = [{id:1,name:'Tech expo',pic:'https://i.ibb.co/1bB41SL/cart.jpg'},
                         {id:2,name:'Culturals',pic:'https://i.ibb.co/DtWNp2b/cultural2.jpg'},
                         {id:3,name:'Workshops',pic:'https://i.ibb.co/RyM1RsR/tech.jpg'}
                        ];
  const sponsors = [{id:1,pic:'https://i.pinimg.com/originals/a7/23/b9/a723b9d7887212078aaa89e3697b217a.png'},
                        {id:2,pic:'https://cdn.shopify.com/s/files/1/0067/0374/3040/files/white_240x240.png?v=1648004714'},
                        {id:3,pic:'https://worldissmall.fr/wp-content/uploads/2023/02/nothing-phone-logo.jpg'}
                       ];
  const [isopened,setOpened]=useState(false);
  const [isscroll,setScroll] = useState(true);
  const router = useRouter();
  return (
    <>
    {isopened==true && 
        <MobileNav setOpened={setOpened} setScroll={setScroll}/>
    }
    <div className={styles.container} style={{overflowX:'hidden'}}>

      <TopNavComponent setOpened={setOpened} setScroll={setScroll}/>
      <div className={styles.main}>
        <div className='flexContainer'>
          <TimeCounter/>
          <div className='rightSide'>
            <motion.div className='rightSideIntro'
            initial={{opacity:0,}}
            whileInView={{opacity:1}}
            transition={{ ease:'easeInOut', duration: 0.8 }}
            >
              <h1>Let's go It's Advent May 30,2023</h1>
            </motion.div>
            <div className='mobileView'>
              <motion.img initial={{opacity:0,marginRight:-205}} whileInView={{opacity:1,marginRight:137}} transition={{duration:5}} src={wrap.src} style={{marginLeft:0}}/>
            </div>
            <div className='rightSideVid'>
              <iframe width="100%" height="300" style={{borderRadius:25,margin:5}} src="https://www.youtube.com/embed/kRQZ803JrbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media"></iframe>
            </div>
          </div>
        </div>
        <div className='firstViewer'>
          <img src='https://io.google/2023/app/images/keynote.webp'/>
          <h2>Come and experience Engineering playaza</h2>
          <button className='firstViewerButton' onClick={()=>router.push('/events')}>explore events</button>
        </div>
        <div className='overviewContainer'>
          <h1>What we got for you?</h1>
          {overview_data.map((i)=>{
            return(
              <motion.div key={i.id} className='overviewBoxContainer'
              initial={{opacity:0,transform:'translate(-100px)'}}
              whileInView={{opacity:1,transform:'translate(0px)'}}
              transition={{ ease: "easeOut", duration: 0.8 }}
               >
                <img src={i.pic} />
                <h2>{i.name}</h2>
              </motion.div>
            );
          }) 
          }
        </div>
        <motion.div initial={{opacity:0,backgroundColor:'transparent'}} whileInView={{opacity:1,backgroundColor:'#DADCE0'}} transition={{ease
        :'easeIn',duration:2}} className='aboutContainer'>
          <div className='aboutTextContainer'>
            <h1>Advent is the annual tech fest brought to you by Cult a way </h1>
            <button className='buttonMain' onClick={()=>router.push('/about')}>See the legacy</button>
          </div>
          <Image src={advent_logo_black} className='aboutImage' alt='about image'/>
        </motion.div>
        <div className='patternflex'>
          <motion.div initial={{transform:'translateY(-100px)',opacity:0}} whileInView={{transform:'translateY(0px)',opacity:1}} transition={{duration:2}} className='circlePattern'></motion.div>
          <motion.div initial={{transform:'translateX(100px)',opacity:0}} whileInView={{transform:'translateX(0px)',opacity:1}} transition={{duration:2}} className='recPattern'></motion.div>
        </div>
        <div className='aboutContainer' style={{backgroundColor:'transparent',borderColor:'#b3b3b3',marginTop:'40%',borderRadius:20}}>
          <div className='aboutTextContainer' style={{justifyContent:'center',alignItems:'center'}}>
            <img src='https://adventapi.pythonanywhere.com/media/eventpics/caposter.jpeg' style={{height:'auto',width:'100%'}}/>
            <button className='buttonMain' onClick={()=>{window.open('https://docs.google.com/forms/d/e/1FAIpQLSevuJ7wR2xlvs6dJ3JRoRvsdPNY4idsCq-lWc6IK5VFBQbClw/viewform')}} style={{position:'absolute',color:'black',borderColor:'#a355ff',backgroundColor:'#a355ff'}}>Apply now</button>
          </div>
        </div>
        <div className='overviewContainer'>
          <h1>Our sponsors</h1>
          {sponsors.map((i)=>{
            return(
              <motion.div key={i.id} className='overviewBoxContainer'
              initial={{opacity:0,transform:'translateY(-100px)'}}
              whileInView={{opacity:1,transform:'translateY(0px)'}}
              transition={{ ease: "easeOut", duration: 0.8 }}
               >
                <img src={i.pic}/>
              </motion.div>
            );
          }) 
          }
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
