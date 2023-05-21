import TopNavComponent from "./TopNavComponent";
import {  useEffect, useState } from 'react';
import MobileNav from "./MobileNav";
import homestyles from '../styles/Home.module.css';
import styles from '../styles/Events.module.css';
import Footer from "./Footer";
import {motion} from 'framer-motion';

export default function Events(){
    const [isopened,setOpened]=useState(false);
    const [isscroll,setScroll] = useState(true);
    const [selected,setSelect] = useState("all");
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    const activestyle = {backgroundColor:'white',color:'#202124'};
    const apifetch = () =>{
        setLoading(true);
        fetch(`https://adventapi.pythonanywhere.com/api/events/${selected}`,{
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>{
            setData(data.data);
            setLoading(false);
        })
    }
    useEffect(()=>{
        apifetch();
    },[selected])
    return(
        <>
            {isopened==true && 
            <MobileNav setOpened={setOpened} setScroll={setScroll}/>
             }
             <div>
                
                <div className={homestyles.container}>
                    <TopNavComponent setOpened={setOpened} setScroll={setScroll}/>
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} className='rightSideIntro' 
                    style={{width:'100%',backgroundImage:'url(https://hacktoberfest.com/_next/static/media/grid-square.7c0cbc15.svg)',backgroundPosition:'center',backgroundRepeat:'repeat',WebkitMask:'radial-gradient(100% 137% at 37% 75%, black 26%, transparent 87%'}}>
                        <h1>Events</h1>
                    </motion.div>
                    <div className={styles.eventNav}>
                        <button style={selected=='all' ? activestyle :{} } onClick={()=>setSelect("all")}>all</button>
                        <button style={selected=='workshop' ? activestyle :{} } onClick={()=>{setSelect("workshop")}}>workshops</button>
                        <button style={selected=='event' ? activestyle :{} } onClick={()=>setSelect("event")}>competition</button>
                        <button style={selected=='non-technical' ? activestyle :{} } onClick={()=>setSelect("non-technical")}>culturals</button>
                    </div>
                    <div className='overviewContainer'>
                        {
                        loading==true ? <h1>loading...</h1>
                        :(
                        data.length==0 ? 
                        <div style={{height:'40vh'}}>
                            <h1>{selected} coming soon</h1>
                        </div>
                        :(
                        data.map((i)=>{
                            return(
                        <motion.div  key={i.id} className='overviewBoxContainer'
                            initial={{opacity:0,transform:'translate(-100px)'}}
                            whileInView={{opacity:1,transform:'translate(0px)'}}
                            animate={{transform:'scale(0.5)'}}
                            transition={{ ease: "easeOut", duration: 0.8 }}
                            onClick={()=>{window.open(i.event_redirect_link)}}
                             >
                              <img src={`https://adventapi.pythonanywhere.com/${i.event_pic}`} style={{height:'100%'}}
                              />
                              <h2>{i.event_name}</h2>
                              <p style={{color:'#DADCE0',whiteSpace:'pre-wrap'}}>{i.event_dis}</p>
                              <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
                                <p style={{marginRight:30}}>{i.event_type}</p>
                                <p>by : {i.speaker_name}</p>
                                
                              </div>
                              <button className="buttonMain" style={{color:'white',backgroundColor:'#a355ff',border:0}}>{i.event_prize==0 ? 'FREE' :'₹'+i.event_prize}</button>
                        </motion.div>
                            );
                        })))}
                    </div>
                </div>
             </div>
             {loading==false && 
             <Footer/>
             }
        </>
    );
}