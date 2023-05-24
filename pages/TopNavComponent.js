import Image from "next/image";
import advent_logo from '../public/advent_logo/adventog.png';
import styles from '../styles/TopNavComponent.module.css';
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import hamburger from '../public/hamburger.svg';

export default function TopNavComponent({setOpened,setScroll}){
    const router = useRouter();
    return(
        <>
        <Head>
            <meta name='theme-color' color='#1f1f1f'/>
            <meta name="description" content="Advent is the technical fest of SCTCE,TVM brought you by Cult a way"></meta>
            <meta name='keywords' content='Advent, sctce college and tech fest,cultaway advent, advent, SCTCE, Sree Chitra Thirunal College of Engineering, Cult A Way, Cult A Way 2023,'/>
            <title>Advent '23</title>
            <link rel="icon" type="image/png" href="advent_logo/advent_color_plain.png"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        </Head>
        <header className={styles.header}>
        <Image src={advent_logo} className={styles.headerImg} alt="Advent logo"/>
        <button className={styles.hamburger} onClick={()=>{setOpened(true);setScroll(false)}}>
            <img src={hamburger.src}/>
        </button>
        <nav className={styles.navitems}>
          <div className={router.asPath=='/' ? 'item activeLink':'item'}><Link href={'/'}>home</Link></div>
          <div className={router.asPath=='/about' ? 'item active':'item'}><Link href={'/about'}>about</Link></div>
          <div className={router.asPath=='/events' ? 'item active':'item'}><Link href={'/events'}>events</Link></div>
        </nav>
      </header>
      </>
    );
}