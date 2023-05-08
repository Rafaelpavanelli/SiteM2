import Navbar from "./Navbar/Navbar";
import {LangProvider} from "./Context/Lang";
import Head from "next/head";
import style from '../../styles/Layout/Layout.module.scss'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
export default function Layout({children}){
  useEffect(()=>{
    Aos.init({duration:1500})
  },[])
  return(
    <LangProvider>
    <div className={style.container}> 
      <Head>
        <title>M2 Software</title>
        <link rel="shortcut icon" href='/images/favicon.ico' />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Navbar data-aos="fade-up"/>
    <main className="main-container">{children}</main>
    </div>
    </LangProvider>
  )

}