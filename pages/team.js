import TopNavComponent from "./TopNavComponent";
import {  useEffect, useState } from 'react';
import MobileNav from "./MobileNav";
import homestyles from '../styles/Home.module.css';
import styles from '../styles/Events.module.css';
import Footer from "./Footer";
import {motion} from 'framer-motion';
import adventtest from '../public/advent/advent_test.jpg';
export default function Team(){
    const [isopened,setOpened]=useState(false);
    const [isscroll,setScroll] = useState(true);
    const [selected,setSelect] = useState("technical");
    const data = [
    {id:1,name:'sanjay',pos:'technical head',cat:'technical',contact:'#',type:'twitter'},
    {id:2,name:'aswin',pos:'website logo designer',cat:'technical',contact:'#',type:'github'},
    {id:3,name:'sreedhar',pos:' developer',cat:'technical',contact:'https://github.com/mellofordev/',type:'github'},
    {id:4,name:'priya',pos:'data management',cat:'technical',contact:'https://github.com/Piyuse',type:'github'},
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
                    <div className='overviewContainer' style={{display:'grid',gridTemplateColumns:'auto auto',padding:0,gap:50,justifyContent:'flex-end',alignItems:'flex-end',justifyItems:'center'}}>
                        {
                        
                        data.map((i)=>{
                            return(
                                <motion.div key={i.id} className='overviewBoxContainer'
                                style={{width:'130%',height:'100%',margin:0}}
                                initial={{opacity:0,transform:'translate(-100px)'}}
                                whileInView={{opacity:1,transform:'translate(0px)'}}
                                transition={{ ease: "easeOut", duration: 0.8 }}
                                 >
                                  <img src={adventtest.src} style={{height:'auto',width:'100%'}}/>
                                  <h2>{i.name}</h2>
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
                                        <p>{i.pos}</p>
                                        <a href={i.contact} target="_blank" style={{textDecoration:'underline'}}>{i.type}</a>                                        
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