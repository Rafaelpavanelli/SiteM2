import Image from 'next/image'
import style from './../../../styles/Novidades/Novidades.module.scss'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai';
export default function Novidades(){
  return(
    <div className={style.novidades} >
      <h1>Novidades</h1>
      <div className={style.container} data-aos='fade-up'>
        <div className={style.info} data-aos='fade-up'>
        <h2>QR Horse</h2>
        <h3><b>Chega de precisar anotar o nome de cada um de seus cavalos, deixe-os muito mais organizados.</b></h3>
        <h4>Mostre seus cavalos e deixe que as pessoas o veja através de um QR code aonde será redirecionado a todas as informações de seu garanhão.</h4>
        <Link href={'/'} data-aos='fade-up'> Saiba mais {<AiOutlineArrowRight />}</Link>
        </div>
      <Image src='/images/qrHorse.webp' width='700' height='450' alt="imagem do qrHorse"/>
      </div>
    </div>
  )
}