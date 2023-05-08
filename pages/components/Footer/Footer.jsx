import Link from "next/link"
import {CiFacebook, CiLinkedin,CiInstagram} from 'react-icons/ci'
import style from '../../../styles/Footer/Footer.module.scss'
export default function Footer({props}){
  return(
    <footer className={style.Footer} >
    <span>
      <ul className={style.contato}>
        <li><a href="mailto:m2softwarelabs@gmail.com">m2softwarelabs@gmail.com</a></li>
        <li> <p>Tel: (14) 99105-5385</p></li>
        <li><p>Avaré-sp</p></li>
      </ul>

    </span>
    <p>© 2022 M2 Software Labs. Todos os direitos reservados.</p>
    <span>
      <ul className={style.redes}>
        <li><a href="http://#">{<CiLinkedin />}</a></li>
        <li><a href="http://#">{<CiFacebook />}</a></li>
        <li><a href="http://#">{<CiInstagram/>}</a></li>
      </ul>
    </span>
    </footer>
  )
}