import React from 'react'

import styles from './styles.module.scss'

function Text({ quote }: { quote?: string }) {
    if (!quote) {
        return null;
    }
    return (
        <h2 id="text" className={styles.Text}>{quote}</h2>
    )
}

export default Text