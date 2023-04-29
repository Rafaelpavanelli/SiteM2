import Image from "next/image";
import Link from "next/link";
import style from '../styles/About/About.module.scss';
export default function About(){
  return(
    <div className={style.about}>
      <Link href={'/'}>Voltar</Link>
    <div className={style.history} data-aos="fade">
      <h1>Nossa História</h1>
      <p>Depois de algumas tentativas em iniciar uma empresa de tecnologia, em 2022 finalmente conseguimos.<br/>
          E nas próximas linhas escreveremos nossa história, e queremos você nela.</p>
    </div>
    <div className={style.card}>
    <div className={style.mission} data-aos="fade-right">
      <h4>NOSSA MISSÃO</h4>
      <h2 id={style.first}>Pequenas soluções</h2>
      <h2 id={style.second}>Grandes impactos</h2>
      <p> Não é impossível viver sem a tecnologia digital, mas você gostaria ?</p>
      <p>A tecnologia é como um super poder,
        com ela conseguimos realizar façanhas que outrora só existia em nossas mentes, em formato de <span>ideias</span> .</p>
      <p>M2 Software Labs é uma empresa focada em criar <span>soluções simples, mas com grandes impactos</span> , só uma bela ideia torna isso possível. </p>
      <p>Qual é a sua bela ideia ?</p>
    </div>
    <div className="image" data-aos="fade-left">
      <Image src={'/images/image-about.webp'} width={300} height={400} alt="Imagem "/>
    </div>
    </div>
    </div>
  )
}