import banner from './banner.png'
import React from 'react'

function Banner() {
    return (
        <section>
            <div className={styles.principal__imagem}>
                <h1>A galeria mais completa do espaço</h1>
                <img src={banner} alt="A imagem da terra vista do espaço"></img>
            </div>
        </section>
    )
}

export default index