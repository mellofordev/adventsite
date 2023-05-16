import Image from "next/image";
import advent_logo from '../public/advent_logo/advent_color_black.png';
import styles from '../styles/TopNavComponent.module.css';
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function TopNavComponent({setOpened,setScroll}){
    const router = useRouter();
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
          <div className={router.asPath=='/' ? 'item activeLink':'item'}><Link href={'/'}>home</Link></div>
          <div className={router.asPath=='/about' ? 'item active':'item'}><Link href={'/about'}>about</Link></div>
          <div className={router.asPath=='/events' ? 'item active':'item'}><Link href={'/events'}>events</Link></div>
          <div className={router.asPath=='/cult11' ? 'item active':'item'}><Link href={'/cult11'}>cult11</Link></div>
        </nav>
      </header>
      </>
    );
}