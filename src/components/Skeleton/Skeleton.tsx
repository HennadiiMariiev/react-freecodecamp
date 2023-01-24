import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss'

function Skeleton({ height = 60, isShort = false }) {
    return (
        <div className={cn(styles.Skeleton, isShort ? styles.short : "")} style={{ height }} aria-label="Text loader"></div>
    )
}

export default Skeleton