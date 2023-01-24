import React from 'react';

import styles from './styles.module.scss';

function Box({ children }: { children: React.ReactNode }) {
    return (
        <div id='quote-box' className={styles.Box}>{children}</div>
    )
}

export default Box