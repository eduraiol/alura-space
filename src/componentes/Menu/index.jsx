import React from 'react'
import home from '../../assets/icones/home.png'
import maisCurtidas from '../../assets/icones/mais-curtidas.png'
import maisVistas from '../../assets/icones/mais-vistas.png'
import novas from '../../assets/icones/novas.png'
import surpreendaMe from '../../assets/icones/surpreenda-me.png'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="" />
                <a href="/" alt="">Início </a>
            </li> 
            <li className={styles.menu__item}>
                <img src={maisCurtidas} alt="" />
                <a href="/" alt="">Mais curtidas </a>
            </li> 
            <li className={styles.menu__item}>
                <img src={maisVistas} alt="" />
                <a href="/" alt="">Mais vistas </a>
            </li> 
            <li className={styles.menu__item}>
                <img src={novas} alt="" />
                <a href="/" alt="">Novas </a>
            </li> 
            <li className={styles.menu__item}>
                <img src={surpreendaMe} alt="" />
                <a href="/" alt="">Surpreenda-me </a>
            </li>    
        </ul>    
    </nav>
  )
}
