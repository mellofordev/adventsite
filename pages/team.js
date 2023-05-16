import TopNavComponent from "./TopNavComponent";
import {  useEffect, useState } from 'react';
import MobileNav from "./MobileNav";
import homestyles from '../styles/Home.module.css';
import aboutstyles from '../styles/About.module.css';
import styles from '../styles/Events.module.css';
import Footer from "./Footer";
import {motion} from 'framer-motion';
import adventtest from '../public/advent/advent_test.jpg';
import advent_riding from '../public/advent/advent_riding.jpg';
import advent_welding from '../public/advent/advent_welding.jpg';
export default function Team(){
    const [isopened,setOpened]=useState(false);
    const [isscroll,setScroll] = useState(true);
    const [selected,setSelect] = useState("technical");
    const data = [
    {id:1,name:'sanjay',pos:'technical head',cat:'technical'},
    {id:2,name:'aswin',pos:'asset designer',cat:'technical'},
    {id:3,name:'sreedhar',pos:'lead developer',cat:'technical'},
    {id:4,name:'priya',pos:'data management',cat:'technical'},
    ]
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
                        <h1>Team</h1>
                    </motion.div>
                    <div className={styles.eventNav}>
                        <button style={selected=='technical' ? activestyle :{} } onClick={()=>{setSelect("technical")}}>technical</button>
                        <button style={selected=='events' ? activestyle :{} } onClick={()=>setSelect("events")}>committe</button>
                        <button style={selected=='proshow' ? activestyle :{} } onClick={()=>setSelect("proshow")}>management</button>
                    </div>
                    <div className='overviewContainer' style={{display:'grid',gridTemplateColumns:'auto auto',padding:30,justifyContent:'center',alignItems:'center'}}>
                        {
                        
                        data.map((i)=>{
                            return(
                                <motion.div key={i.id} className='overviewBoxContainer'
                                style={{width:'100%',height:'100%',margin:10}}
                                initial={{opacity:0,transform:'translate(-100px)'}}
                                whileInView={{opacity:1,transform:'translate(0px)'}}
                                transition={{ ease: "easeOut", duration: 0.8 }}
                                 >
                                  <img src={`https://adventapi.pythonanywhere.com/${i.event_pic}`} style={{height:'100%'}}/>
                                  <h2>{i.name}</h2>
                                  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                                    <div style={{display:'flex',flexDirection:'row'}}>
                                        <p>{i.pos}</p>
                                        
                                    </div>
                                    <p>{i.cat}</p>
                                  </div>
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