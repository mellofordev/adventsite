import { useState,useEffect } from "react";
import {motion} from 'framer-motion';

export default function TimeCounter(){
    const counter = new Date("May 30,2023 9:30:00").getTime();
    const [day,setDay] = useState(0);
    const [hour,setHour] = useState(0);
    const [minute,setMinute] = useState(0);
    const [second,setSecond] = useState(0);
    const [tom,setTom] = useState(null);
    const [clap,setClap] = useState(null);
    const [boom,setBoom] = useState(null);
    const [ride,setRide] = useState(null);
    const [tic,setTic] = useState(null);
    const [isplaying,setPlaying] = useState(false);
    useEffect(()=>{
      setTom(new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/tom.wav'));
      setClap(new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/clap.wav'));
      setBoom(new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/kick.wav'));
      setRide(new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/ride.wav'));
      setTic(new Audio('https://cdn.pixabay.com/audio/2022/03/13/audio_a27c3a6c5d.mp3'));
      setInterval(()=>{
        var now = new Date().getTime();
        var timelapsed = counter-now;
        var min = Math.floor((timelapsed%(1000*60*60))/(1000*60));
        var sec = Math.floor((timelapsed%(1000*60))/1000);
        setDay(Math.floor(timelapsed/(1000*60*60*24)));
        setHour(Math.floor((timelapsed%(1000*60*60*24))/(1000*60*60)));
        setMinute(min);
        setSecond(sec);
      },1000)
    },[second])
    return(
    <>
    <div className='timeContainer'>
        <motion.div className='boxTimer' onClick={()=>{
            tom.play();
            if(isplaying==false){
                tic.play();
            } setPlaying(true);
            }}
            initial={{opacity:0,transform:'scale(0.5)'}}
            whileInView={{opacity:1,transform:'scale(1)'}}
            transition={{duration:1}}
            >
          <h1>{day < 10==true? '0'+day : day}</h1>
          <h2>Days</h2>
        </motion.div>
        <motion.div className='boxTimer' onClick={()=>{clap.play();}}
                    initial={{opacity:0,transform:'scale(0.5)'}}
                    whileInView={{opacity:1,transform:'scale(1)'}}
                    transition={{duration:1.3}}        
        >
          <h1>{hour < 10==true? '0'+hour :hour }</h1>
          <h2>Hours</h2>
        </motion.div>
        <motion.div className='boxTimer' onClick={()=>{boom.play();}}
                    initial={{opacity:0,transform:'scale(0.2)'}}
                    whileInView={{opacity:1,transform:'scale(1)'}}
                    transition={{duration:1.4}}
        >
          <h1>{minute < 10==true? '0'+minute : minute}</h1>
          <h2>Minutes</h2>
        </motion.div>
        <motion.div className='boxTimer' onClick={()=>{ride.play();}}
                    initial={{opacity:0,transform:'scale(0.3)'}}
                    whileInView={{opacity:1,transform:'scale(1)'}}
                    transition={{duration:1.5}}
        >
          <h1>{second < 10==true? '0'+second : second}</h1>
          <h2>Seconds</h2>
        </motion.div>
      </div>
      {/* <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',backgroundColor:'black',borderRadius:25,width:100,height:'fit-content',padding:5}}>
        <button style={{backgroundColor:'transparent',border:'none'}}>
        <span style={{color:'white'}} class="material-symbols-outlined">play_arrow</span>
        </button>
        <button style={{backgroundColor:'transparent',border:'none'}}>
          <span style={{color:'white'}} class="material-symbols-outlined">info</span>
        </button>
      </div> */}
      {/* <div style={{position:'absolute',backgroundColor:'#202124',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',zIndex:100,height:200,width:300,borderRadius:25}}>
         <p style={{textAlign:'center'}}>Beat maker - Click on the timer box to create your unique beats...</p>
      </div> */}
    </>
    );
}