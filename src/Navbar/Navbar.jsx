import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar({name, burger}) {
    return (
        <div className={styles.block}>
            <h1 className={styles.name}>{name}</h1>
    <span className={styles.menu}>{burger}</span>
        </div>
    )
}
