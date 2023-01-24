import React from "react";

import styles from "./styles.module.scss";

function ButtonsWrapper({ children }: { children: React.ReactNode }) {
    return <div className={styles.ButtonsWrapper}>{children}</div>;
}

export default ButtonsWrapper;
