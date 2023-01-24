import React from 'react'

import styles from './styles.module.scss'

function Author({ author }: { author?: string }) {
    if (!author) {
        return null;
    }

    return (
        <p id="author" className={styles.Author}>{author}</p>
    )
}

export default Author