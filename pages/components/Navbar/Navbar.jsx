import Link from 'next/link'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import style from '../../../styles/Navbar/Navbar.module.scss'
import { useState } from 'react'
export default function Navbar(){
  const[toggle,setToggle]=useState(true);
  function handleClick(){
    setToggle(!toggle);
  }
  return (
    <nav className={style.nav}>
      <Link href={'/'}><h3>M2 software labs</h3></Link>
      <ul className={!toggle? style.active:style.nav_menu}>
      
        <li className={style.nav_item}><Link href={'/'} onClick={()=>handleClick()}>Produtos</Link></li>
        <li className={style.nav_item}><Link href={'/about'} onClick={()=>handleClick()}>Sobre</Link></li>
        <select name="language" id="language" className={style.nav_item}>
          <option value="pt-br" id='pt'>PT</option>
          <option value="en-us" id='in'>IN</option>
        </select>
      </ul>
      <button className={style.toggle}  onClick={()=>handleClick()}>{toggle?<GiHamburgerMenu />:<AiOutlineCloseCircle />}</button>
    </nav>
  )
} 