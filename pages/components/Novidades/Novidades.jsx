import Image from 'next/image'
import { useState,useEffect,useContext } from 'react'
import { langContext } from './../../components/Context/Lang';
import style from './../../../styles/Novidades/Novidades.module.scss'
import Link from 'next/link'
import lang from './../Languages/Novidades.json'
import { AiOutlineArrowRight } from 'react-icons/ai';
export default function Novidades(){
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
  })
  console.log(text)
  return(
    <div className={style.novidades} >
      <h1>{select=="IN"?"news":"Novidades"}</h1>
      <div className={style.container} data-aos='fade-up'>
        <div className={style.info} data-aos='fade-up'>
        <h2>{text.title}</h2>
        <h3><b>{text.text1}</b></h3>
        <h4>{text.text2}</h4>
        <Link href={'/'} data-aos='fade-up'>{text.button1}{<AiOutlineArrowRight />}</Link>
        </div>
      <Image src='/images/qrHorse.webp' width='700' height='450' alt="imagem do qrHorse"/>
      </div>
    </div>
  )
}