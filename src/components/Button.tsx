import cn from 'classnames'
import React from 'react'

import styles from './styles.module.scss'


function Button({ onClick, text, as = "button", linkText = '' }: { onClick?: () => void, text: string, as?: string, linkText?: string }) {
    if (as === 'link') {
        return <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=react-quote&text=${linkText}`} target="_blank" className={cn(styles.Button, styles.link)}>{text}</a>
    }

    return (
        <button id='new-quote' onClick={onClick} className={styles.Button}>{text}</button>
    )
}

export default Button