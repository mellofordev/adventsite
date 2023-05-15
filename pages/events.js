import TopNavComponent from "./TopNavComponent";
import {  useState } from 'react';
import MobileNav from "./MobileNav";
import homestyles from '../styles/Home.module.css';
import aboutstyles from '../styles/About.module.css';
import Footer from "./Footer";
import {motion} from 'framer-motion';
import advent_mech from '../public/advent/advent_mech.jpg';
import advent_riding from '../public/advent/advent_riding.jpg';
import advent_welding from '../public/advent/advent_welding.jpg';
export default function Events(){
    const [isopened,setOpened]=useState(false);
    const [isscroll,setScroll] = useState(true);
    const advent_pics = [
        {id:1,pic:advent_mech.src},
        {id:2,pic:advent_riding.src},
        {id:3,pic:advent_welding.src}                    
    ]
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
                    <div className={aboutstyles.aboutPicContainer}>
                        {
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
                </div>
             </div>
            <Footer/>
        </>
    );
}