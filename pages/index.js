
import styles from '../styles/Home.module.css';
import {motion} from 'framer-motion';
import advent_logo_black from '../public/advent_logo/adventog.png';
import {  useState } from 'react';
import TopNavComponent from './TopNavComponent';
import TimeCounter from './TimeCounter';
import MobileNav from './MobileNav';
import Footer from './Footer';
import {useRouter} from 'next/navigation';
export default function Home() {
  const overview_data = [{id:1,name:'Tech Fair',pic:'https://i.ibb.co/gvxgQ27/advent-robot-new.png'},
                         {id:2,name:'Competitions',pic:'https://i.ibb.co/TcDgj2C/advent-comptetion.png'},
                         {id:3,name:'Workshops',pic:'https://i.ibb.co/dL616xd/advent-workshop.png'}
                        ];
  const sponsors = [{id:1,pic:'https://i.pinimg.com/originals/a7/23/b9/a723b9d7887212078aaa89e3697b217a.png'},
                        {id:2,pic:'https://cdn.shopify.com/s/files/1/0067/0374/3040/files/white_240x240.png?v=1648004714'},
                        {id:3,pic:'https://worldissmall.fr/wp-content/uploads/2023/02/nothing-phone-logo.jpg'}
                       ];
  const [isopened,setOpened]=useState(false);
  const [isscroll,setScroll] = useState(true);
  const router = useRouter();
  const isTimerShown = false;
  return (
    <>
    {isscroll==true ?
        <style jsx global>
            {`
                body{
                overflow-y:scroll;
                }
            `}
        </style> 
        :(
        <style jsx global>
            {`
                body{
                overflow-y:hidden;
                }
            `}
        </style>
        )
    }    
    {isopened==true && 
        <MobileNav setOpened={setOpened} setScroll={setScroll}/>
    }
    <div className={styles.container} style={{overflowX:'hidden'}}>

      <TopNavComponent setOpened={setOpened} setScroll={setScroll}/>
      <div className={styles.main}>
        <div className='flexContainer'>
          {isTimerShown==true &&  <TimeCounter/>
          }
          <div className='rightSide'>
            <motion.div className='rightSideIntro'
            initial={{opacity:0,transform:'scale(0.7)'}}
            whileInView={{opacity:1,transform:'scale(1)'}}
            transition={{ ease:'easeInOut', duration: 0.8 }}
            >
               {isTimerShown==true ?  <h1>Let's go It's Advent May 30,2023</h1> 
               :(
                 <div style={{height:200}}>
                  <h1>It's a wrap for Advent</h1>
                  <p>See you all at Cult a way</p>
                 </div>
                 
               )}
            </motion.div>
            <div className='mobileView'>
              <motion.img initial={{opacity:0,}} whileInView={{opacity:1,}} transition={{duration:5}} src={'https://hacktoberfest.com/_next/static/media/repeater.6bd785ac.svg'} style={{marginLeft:0}}/>
            </div>
            <div className='rightSideVid'>
              <motion.img initial={{opacity:0,}} whileInView={{opacity:1,}} transition={{duration:5}} src={'https://hacktoberfest.com/_next/static/media/repeater.6bd785ac.svg'} style={{marginLeft:0,height:'100%',width:'100%'}}/>
            </div>
          </div>
        </div>
        <div className='firstViewer'>
          <motion.img src='https://i.ibb.co/VJCtk86/hackit.png'
                           initial={{opacity:0,transform:'scale(0.9)'}}
                           whileInView={{opacity:1,transform:'scale(1)'}}
                           transition={{ ease:'easeIn', duration: 0.3 }}
          />
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
              style={{borderRadius:10,clipPath:'polygon(0px 0px, 100% 0px, 100% 90%, calc(100% - 58px) 100%, 0px 100%, 0px 39px)',border:'none',backgroundColor:'#202124'}}
               >
                <motion.img src={i.pic} 
                 initial={{opacity:0,transform:'scale(0.7)'}}
                 whileInView={{opacity:1,transform:'scale(1)'}}
                 transition={{ ease:'easeIn', duration: 0.2 }}
                 style={{borderRadius:0}}
                />
                <h2>{i.name}</h2>
              </motion.div>
            );
          }) 
          }
        </div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{ease
        :'easeIn',duration:2}} className='aboutContainer'
        >
          <div className='aboutTextContainer'>
            <h1>Advent is the annual tech fest brought to you by Cult a way </h1>
            <button className='buttonMain' onClick={()=>router.push('/about')}>See the legacy</button>
          </div>
          <motion.img src={advent_logo_black.src} className='aboutImage' alt='about image'
                                       initial={{opacity:0,transform:'scale(0.3)'}}
                                       whileInView={{opacity:1,transform:'scale(1)'}}
                                       transition={{ ease:'easeIn', duration: 0.5 }}
            />
        </motion.div>
        <div className='aboutContainer campuscontainer' style={{backgroundColor:'transparent',backgroundImage:'none',borderColor:'#b3b3b3',borderRadius:20}}>
          <div className='aboutTextContainer' style={{justifyContent:'center',alignItems:'center'}}>
            <img src='https://adventapi.pythonanywhere.com/media/eventpics/ca_new.jpeg' style={{height:'auto',width:'100%'}}/>
            <button className='buttonMain' onClick={()=>{window.open('https://docs.google.com/forms/d/e/1FAIpQLSevuJ7wR2xlvs6dJ3JRoRvsdPNY4idsCq-lWc6IK5VFBQbClw/viewform')}} style={{position:'absolute',color:'black',borderColor:'#a355ff',backgroundColor:'#a355ff'}}>Apply now</button>
          </div>
        </div>
        {/* <h1>Our sponsors</h1> */}
        {/* <div className='overviewContainer'>

          {sponsors.map((i)=>{
            return(
              <motion.div key={i.id} className='overviewBoxContainer'
              initial={{opacity:0,transform:'translateY(-100px)'}}
              whileInView={{opacity:1,transform:'translateY(0px)'}}
              transition={{ ease: "easeOut", duration: 0.8 }}
               >
                <img src={i.pic} />
              </motion.div>
            );
          }) 
          }
        </div> */}
      </div>
    </div>
    <Footer/>
    </>
  )
}
