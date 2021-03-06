import React from 'react'
import styles from './Footer.module.css'
import PropTypes from 'prop-types'

export default function Footer({name}) {
    return (
        <div className={styles.block}>
            <p className={styles.name}>{name}</p>
        </div>
    )
}

Footer.propTypes = {
    name: PropTypes.string.isRequired,
}
