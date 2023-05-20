import TopNavComponent from "./TopNavComponent";
import { useDeferredValue, useEffect, useState } from 'react';
import MobileNav from "./MobileNav";
import homestyles from '../styles/Home.module.css';
import styles from '../styles/About.module.css';
import Footer from "./Footer";
import {motion} from 'framer-motion';
import advent_mech from '../public/advent/advent_mech.jpg';
import advent_riding from '../public/advent/autoexpo.jpg';
import advent_welding from '../public/advent/advent_welding.jpg';
export default function About(){
    const [isopened,setOpened]=useState(false);
    const [isscroll,setScroll] = useState(true);
    const [loading,setLoading] = useState(true);
    const [count,setCount] = useState(0);
    const textItem = `
    Advent is the annual technical festival of Sree Chitra Thirunal College of Engineering (SCTCE), Thiruvananthapuram, Kerala, India. It is a 3-day event that showcases the technical skills and talent of students from all over the country. The fest features a wide range of events, including competitions, workshops, and exhibitions. Advent is a great opportunity for students to learn, network, and have fun.
    
    The first Advent was held in 2007. The fest has grown in size and scope over the years, and it is now one of the most popular technical festivals in Kerala
    Advent is a great opportunity for students to learn, network, and have fun. It is a must-attend event for any student interested in technology.
    `;
    const advent_pics = [
        {id:1,pic:advent_mech.src},
        {id:2,pic:advent_riding.src},
        {id:3,pic:advent_welding.src}                    
    ]
    var index=0;
    useEffect(()=>{
        var get_text= document.getElementById("text");
        const typewriter = ()=>{
            setLoading(false);
            if(index < textItem.length){
                get_text.innerHTML+=textItem.charAt(index);
                index++;
                setCount(index);
                setTimeout(typewriter,20);
            }   
        }
        if(loading==true){
            typewriter();
        }
    },[])
    return(
        <>
            {isopened==true && 
            <MobileNav setOpened={setOpened} setScroll={setScroll}/>
             }
             <div>
                
                <div className={homestyles.container}>
                    <TopNavComponent setOpened={setOpened} setScroll={setScroll}/>
                    {/* <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} className='rightSideIntro' style={{width:'100%'}}>
                        <h1>About</h1>
                    </motion.div> */}
                    <div className={styles.chatflex}>
                        <div className={styles.userbox}>
                            <h3>prompt : what is advent</h3>
                        </div>
                        <div className={styles.aibox}>
                            <img src='https://www.gstatic.com/lamda/images/sparkle_resting_v2_darkmode_2bdb7df2724e450073ede.gif' style={{height:30,width:30}}/>
                            <p id="text"></p>
                        </div>
                    </div>
                    <div className={styles.aboutPicContainer}>
                        {
                        count==textItem.length && 
                        advent_pics.map((i)=>{
                            return(
                                <motion.img 
                                    initial={{opacity:0}} whileInView={{opacity:1}} 
                                    transition={{ease:'easeIn',duration:1}}
                                    key={i.id} src={i.pic} 
                                
                                />
                            );
                        })}
                    </div>
                    {
                        count==textItem.length &&
                        <motion.div className={styles.legacy}
                        initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} 
                        >
                            <h1>Legacy</h1>
                            <div className={styles.legacyViewer}>
                                <p>Kicked off in 2007</p>
                                <div className={styles.verticalFlex}>
                                    <div className={styles.circle}></div>
                                    <div className={styles.verticalLine}></div>
                                    <div className={styles.circle}></div>
                                </div>
                                <p>World record</p>
                                <div className={styles.verticalFlex}>
                                    <div className={styles.circle}></div>
                                    <div className={styles.verticalLine}></div>
                                    <div className={styles.circle}></div>
                                </div>
                                <p>Advent'22</p>
                            </div>
                        </motion.div>
                    }
                </div>
             </div>
            {count==textItem.length && 
            <Footer/>
            }
        </>
    );
}