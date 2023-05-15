import TopNavComponent from "./TopNavComponent";
import {  useState } from 'react';
import MobileNav from "./MobileNav";
import homestyles from '../styles/Home.module.css';
import aboutstyles from '../styles/About.module.css';
import styles from '../styles/Events.module.css';
import Footer from "./Footer";
import {motion} from 'framer-motion';
import adventtest from '../public/advent/advent_test.jpg';
import advent_riding from '../public/advent/advent_riding.jpg';
import advent_welding from '../public/advent/advent_welding.jpg';
export default function Events(){
    const [isopened,setOpened]=useState(false);
    const [isscroll,setScroll] = useState(true);
    const [selected,setSelect] = useState("workshop");
    const advent_pics = [
        {id:1,pic:adventtest.src},
        {id:2,pic:advent_riding.src},
        {id:3,pic:advent_welding.src}                    
    ];
    const activestyle = {backgroundColor:'white',color:'#202124'};
    return(
        <>
            {isopened==true && 
            <MobileNav setOpened={setOpened} setScroll={setScroll}/>
             }
             <div>
                
                <div className={homestyles.container}>
                    <TopNavComponent setOpened={setOpened} setScroll={setScroll}/>
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} className='rightSideIntro' style={{width:'100%'}}>
                        <h1>Events</h1>
                    </motion.div>
                    <div className={styles.eventNav}>
                        <button style={selected=='workshop' ? activestyle :{} } onClick={()=>setSelect("workshop")}>workshops</button>
                        <button style={selected=='events' ? activestyle :{} } onClick={()=>setSelect("events")}>events</button>
                        <button style={selected=='proshow' ? activestyle :{} } onClick={()=>setSelect("proshow")}>proshow</button>
                    </div>
                    <div className='overviewContainer'>
                        {
                        advent_pics.map((i)=>{
                            return(
                                <motion.div key={i.id} className='overviewBoxContainer'
                                initial={{opacity:0,transform:'translate(-100px)'}}
                                whileInView={{opacity:1,transform:'translate(0px)'}}
                                transition={{ ease: "easeOut", duration: 0.8 }}
                                 >
                                  <img src={i.pic} style={{height:'100%'}}/>
                                  <h2>Workshop on name</h2>
                                  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                                    <div style={{display:'flex',flexDirection:'row'}}>
                                        <span className="material-symbols-outlined" style={{fontSize:18,marginTop:20}} >currency_rupee</span>
                                        <p>200</p>
                                    </div>
                                    <p>speaker name</p>
                                    <p>May 30</p>
                                  </div>
                                  <button className="buttonMain" style={{color:'white',backgroundColor:'#428EFF',}}>Register</button>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
             </div>
            <Footer/>
        </>
    );
}