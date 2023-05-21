import TopNavComponent from "../TopNavComponent";
import {  useEffect, useState } from 'react';
import MobileNav from "../MobileNav";
import homestyles from '../../styles/Home.module.css';
import styles from '../../styles/Events.module.css';
import Footer from "../Footer";
import {motion} from 'framer-motion';
import { useRouter } from "next/router";
import moment from "moment/moment";

export default function E(){
    const router = useRouter();
    let get_id = router.query.id;
    const [isopened,setOpened]=useState(false);
    const [isscroll,setScroll] = useState(true);
    const [data,setData] = useState({});
    const [loading,setLoading] = useState(true);
    const [routerReady,setRouterReady] = useState(false);
    
    const activestyle = {backgroundColor:'white',color:'#202124'};
    const apifetch = () =>{
       
        setLoading(true);
        console.log(get_id);
        fetch(`https://adventapi.pythonanywhere.com/api/event/${get_id}`,{
            method:'GET',
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(response=>response.json())
        .then(data=>{
            if(router.isReady==true){
                setRouterReady(true);
                setData(data.data);
                setLoading(false);
            }
        })
    }
    useEffect(()=>{
        if(routerReady!=true){
            apifetch();
        }
    },[router])
    return(
        <>
            {isopened==true && 
            <MobileNav setOpened={setOpened} setScroll={setScroll}/>
             }
             <div>
                
                <div className={homestyles.container}>
                    <TopNavComponent setOpened={setOpened} setScroll={setScroll}/>

                    <div className='overviewContainer'>
                        {
                        loading==true ? <h1>loading...</h1>
                        :(
                        data.length==0 ?
                        <div style={{height:'60vh'}}>
                            <h1>Event not found 🥲</h1>
                        </div> :(
                        <motion.div  key={data.id} className='overviewBoxContainer'
                            initial={{opacity:0,transform:'translate(-100px)'}}
                            whileInView={{opacity:1,transform:'translate(0px)'}}
                            animate={{transform:'scale(0.5)'}}
                            transition={{ ease: "easeOut", duration: 0.8 }}
                            
                             >
                              <img src={`https://adventapi.pythonanywhere.com/${data.event_pic}`} style={{height:'100%'}}
                              />
                              <h2>{data.event_name}</h2>
                              <p style={{backgroundColor:'white',borderRadius:10,color:'black',height:40,width:100,fontSize:30,textAlign:'center'}}>{data.event_prize==0 ? 'FREE' :'₹'+data.event_prize}</p>
                              <p style={{fontSize:18}}>{moment(data.event_date).utc().format('MM/DD/YYYY')}</p>
                              <p style={{color:'#DADCE0'}}>{data.event_dis}</p>
                              <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start'}}>
                                <p style={{marginRight:30}}>{data.event_type}</p>
                                <p>speaker: {data.speaker_name}</p>
                                
                              </div>
                              <button className="buttonMain" onClick={()=>{window.open(data.event_redirect_link)}} style={{color:'white',backgroundColor:'#a355ff',}}>Register</button>
                        </motion.div>
                        ))}
                    </div>
                </div>
             </div>
             {loading==false && 
             <Footer/>
             }
        </>
    );
}