import TopNavComponent from "./TopNavComponent";
import {  useEffect, useState } from 'react';
import MobileNav from "./MobileNav";
import homestyles from '../styles/Home.module.css';
import Footer from "./Footer";
import {motion} from 'framer-motion';
import { useRouter } from "next/router";
export default function Happening(){
    const [isopened,setOpened]=useState(false);
    const [isscroll,setScroll] = useState(true);
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const router = useRouter();
    const apifetch = () =>{
        setLoading(true);
        fetch(`https://adventapi.pythonanywhere.com/api/event/now`,{
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
    },[])
    return(
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
             <div>
                
                <div className={homestyles.container}>
                    <TopNavComponent setOpened={setOpened} setScroll={setScroll}/>
                    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} viewport={{once:true}} className='rightSideIntro' 
                    style={{width:'100%',backgroundImage:'url(https://hacktoberfest.com/_next/static/media/grid-square.7c0cbc15.svg)',backgroundPosition:'center',backgroundRepeat:'repeat',WebkitMask:'radial-gradient(100% 137% at 37% 75%, black 26%, transparent 87%'}}>
                        <h1>Today's Events</h1>
                    </motion.div>
                    <div className='overviewContainer' style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',overflowX:'scroll',gap:10}}>
                        {
                        loading==true ? <h1>loading...</h1>
                        :(
                        data.length==0 ? 
                        <div style={{height:'40vh'}}>
                            <h1>no events today</h1>
                        </div>
                        :(
                        data.map((i)=>{
                            return(
                        <motion.div  key={i.id} className='overviewBoxContainer'
                            initial={{opacity:0}}
                            whileInView={{opacity:1,transform:'translate(0px)'}}
                            animate={{transform:'scale(0.5)'}}
                            transition={{ ease: "easeOut", duration: 0.8 }}
                                onClick={()=>{
                                    i.is_registration_closed==false &&
                                    router.push(`/e/${i.id}`)
                                }}
                             >
                              <img src={`https://adventapi.pythonanywhere.com/${i.event_pic}`} style={{height:'100%'}}
                              />
                              <h2>{i.event_name}</h2>
                              <p style={{color:'black',backgroundColor:'#DADCE0',whiteSpace:'pre-wrap',height:'auto',width:200,fontSize:18,borderRadius:10}}>Room {i.allocated_room}</p>
                              <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
                                <p style={{marginRight:30}}>{i.event_type}</p>
                                <p>by : {i.speaker_name}</p>
                                
                              </div>
                              <button className="buttonMain" style={{color:'white',backgroundColor:'#a355ff',border:0}}>{i.is_registration_closed==true ? 'Registration closed' :(i.event_prize==0 ? 'FREE' :'₹'+i.event_prize)}</button>
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