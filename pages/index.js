import style from './../styles/Home/Home.module.scss';
import Footer from './components/Footer/Footer';
import { useState,useContext,useEffect } from 'react';
import { langContext } from './components/Context/Lang';
import lang from './components/Languages/Home.json';
import Novidades from './components/Novidades/Novidades';

export default function Home(){
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
  return(
    <div className={style.main} data-aos='fade-q  eight'>
      <video className={style.video} width='100%' src='/images/background.mov' autoPlay loop muted>
      </video>
      <div className={style.text}>
      <h1>{text.title1}<br/>{text.title2}</h1>
      <h2>{text.subtitle1} <span>{text.subtitle2}</span> </h2>
      </div>
      <Novidades />
    <Footer />
    </div>
  )
}