import style from './../styles/Home/Home.module.scss';
import Novidades from './components/Novidades/Novidades';

export default function Home(){
 
  return(
    <div className={style.main} data-aos='fade-eight'>
      <video className={style.video} width='100%' src='/images/background.mov' autoPlay loop muted>
      </video>
      <div className={style.text}>
      <h1>A INFORMAÇÃO<br/> NA PALMA DA SUA MÃO</h1>
      <h2>PEQUENAS SOLUÇÕES, <span>GRANDES IMPACTOS</span> </h2>
      </div>
      <Novidades />
    </div>
  )
}