import { useState,useEffect } from "react";
export default function TimeCounter(){
    const counter = new Date("May 30,2023 09:30:00").getTime();
    const [day,setDay] = useState(0);
    const [hour,setHour] = useState(0);
    const [minute,setMinute] = useState(0);
    const [second,setSecond] = useState(0);
    useEffect(()=>{
      setInterval(()=>{
        var now = new Date().getTime();
        var timelapsed = counter-now;
        var min = Math.floor((timelapsed%(1000*60*60))/(1000*60));
        var sec = Math.floor((timelapsed%(1000*60))/1000);
        setDay(Math.floor(timelapsed/(1000*60*60*24)));
        setHour(Math.floor((timelapsed%(1000*60*60*24))/(1000*60*60)));
        setMinute(min);
        setSecond(sec)
      },1000)
    },[second])
    return(
    <div className='timeContainer'>
        <div className='boxTimer'>
          <h1>{day < 10==true? '0'+day : day}</h1>
          <h2>Days</h2>
        </div>
        <div className='boxTimer'>
          <h1>{hour < 10==true? '0'+hour :hour }</h1>
          <h2>Hours</h2>
        </div>
        <div className='boxTimer'>
          <h1>{minute < 10==true? '0'+minute : minute}</h1>
          <h2>Minutes</h2>
        </div>
        <div className='boxTimer'>
          <h1>{second < 10==true? '0'+second : second}</h1>
          <h2>Seconds</h2>
        </div>
      </div>
    );
}