import Image from "next/image";
import advent_logo from '../public/advent_color_logo_bg.png';
import styles from '../styles/TopNavComponent.module.css';
import hamburger from '../public/hamburger.svg';
import Head from "next/head";
import { useState } from "react";

export default function TopNavComponent({setOpened,setScroll}){
    return(
        <>
        <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        </Head>
        <header className={styles.header}>
        <Image src={advent_logo} className={styles.headerImg}/>
        <button className={styles.hamburger} onClick={()=>{setOpened(true);setScroll(false)}}>
            <span className="material-symbols-outlined">menu</span></button>
        <nav className={styles.navitems}>
          <a href='#'>home</a>
          <a href='#'>about</a>
          <a href='#'>events</a>
          <a href='#'>cult 11</a>
        </nav>
      </header>
      </>
    );
}