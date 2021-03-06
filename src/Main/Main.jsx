import React from 'react'
import styles from './Main.module.css'
import PropTypes from 'prop-types'

export default function Main({image, name, price, alt}) {
    return (
        <div>
            <img src={image} alt={alt} className={styles.car}/>
    <p className={styles.name}>{name}</p>
    <p className={styles.price}>{price}</p>
        </div>
    )
}

Main.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}
