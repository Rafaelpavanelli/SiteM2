import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useContext,useState,useEffect } from 'react';
import { langContext } from '../Context/Lang';
import style from '../../../styles/Navbar/Navbar.module.scss'
export default function Navbar(){
  const{select,alterLang}=useContext(langContext);
  const[language,setLanguage]=useState(select);
  const[toggle,setToggle]=useState(true);
  function handleClick(){
    setToggle(!toggle);
  }
  return (
    <nav className={style.nav}>
      <Link href={'/'}><h3>M2 software labs</h3></Link>
      <ul className={!toggle? style.active:style.nav_menu}>
      
        <li className={style.nav_item}><Link href={'/'} onClick={()=>handleClick()}>{select=="IN"?"Products":"Produtos"}</Link></li>
        <li className={style.nav_item}><Link href={'/about'} onClick={()=>handleClick()}>{select=="IN"?"About":"Sobre"}</Link></li>
        <select name="language" id="language" className={style.nav_item} onChange={(e)=>alterLang(e.target.value)}>
          <option value="PT" id='pt'>PT</option>
          <option value="IN" id='in'>IN</option>
        </select>
      </ul>
      <button className={style.toggle}  onClick={()=>handleClick()}>{toggle?<GiHamburgerMenu />:<AiOutlineCloseCircle />}</button>
    </nav>
  )
} 