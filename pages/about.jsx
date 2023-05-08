import Image from "next/image";
import { useState,useContext,useEffect } from "react";
import { langContext } from './components/Context/Lang';
import lang from './components/Languages/about.json';
import Head from "next/head";
import Link from "next/link";
import style from '../styles/About/About.module.scss';
import Footer from "./components/Footer/Footer";
export default function About(){
  const[text,setText]=useState({});
  const{select}=useContext(langContext);
  console.log(select)
  console.log(text)
  useEffect(()=>{
    switch(select){
      case "IN" :
        setText(lang.Languages.IN.index)
        break;
        case "PT" :
        setText(lang.Languages.PT.index)
        break;
    }
  },[select])
  console.log()
  return(
    <>
    <div className={style.about}>
      <Head>
        <title>About</title>
      </Head>
    <div className={style.history} data-aos="fade">
      <h1>{text.title1}</h1>
      <p>{text.subtitle1}</p>
    </div>
    <div className={style.card}>
    <div className={style.mission} data-aos="fade-right">
      <h4>{text.subtitle2}</h4>
      <h2 id={style.first}>{text.h2}</h2>
      <h2 id={style.second}>{text.h22}</h2>
      <p> {text.text1}</p>
      <p>{text.text2}</p>
      <p>{text.text3}</p>
      <p>{text.text4}</p>
    </div>
    <div className="image" data-aos="fade-left">
      <Image src={'/images/image-about.webp'} width={300} height={400} alt="Imagem "/>
    </div>
    </div>
    </div>
    <Footer />
    </>
  )
}