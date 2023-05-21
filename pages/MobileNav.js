import homestyles  from '../styles/Home.module.css';
import tabstyles from '../styles/TopNavComponent.module.css';
import advent_logo from '../public/advent_logo/adventog.png';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function MobileNav({setOpened,setScroll}){
    const router = useRouter();
    return(
        <div className={'animatebox'} style={{height:'100vh',zIndex:100}}>
                <div className={homestyles.container}>
                  <div className={tabstyles.header}>
                  <Image src={advent_logo} className={tabstyles.headerImg} alt='Advent logo'/>
                    <button className={tabstyles.hamburger} onClick={()=>{setOpened(false);setScroll(true)}}>
                    <span className="material-symbols-outlined">close</span></button>
                  </div>
                </div>
                <div className='flexMenu'>
                  <Link href={'/'} className={router.asPath=='/' ? 'linkitem linkitemactive':'linkitem'}>Home</Link>
                  <Link href={'/about'} className={router.asPath=='/about' ? 'linkitem linkitemactive':'linkitem'}>About</Link>
                  <Link href={'/events'} className={router.asPath=='/events' ? 'linkitem linkitemactive':'linkitem'}>Events</Link>
                  <Link target={'_blank'} href={'https://instagram.com/cult_a_way'} className={router.asPath=='/cult11' ? 'linkitem linkitemactive':'linkitem'}>Cult11</Link>
                </div>
        </div>
    );
}