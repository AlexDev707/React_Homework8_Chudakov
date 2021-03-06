import React from 'react'
import styles from './Footer.module.css'

export default function Footer({name}) {
    return (
        <div className={styles.block}>
            <p className={styles.name}>{name}</p>
        </div>
    )
}
