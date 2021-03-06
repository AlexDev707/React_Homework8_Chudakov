import React from 'react'
import styles from './Main.module.css'

export default function Main({image, name, price, alt}) {
    return (
        <div>
            <img src={image} alt={alt} className={styles.car}/>
    <p className={styles.name}>{name}</p>
    <p className={styles.price}>{price}</p>
        </div>
    )
}
