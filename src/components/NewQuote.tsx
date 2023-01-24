import React from 'react'

import styles from './styles.module.scss'

function NewQuote({ onClick }: { onClick: () => {} }) {
    return (
        <button onClick={onClick} className={styles.button}>New Quote</button>
    )
}

export default NewQuote