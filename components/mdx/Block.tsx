import React, {ReactNode} from "react";
import styles from "@/app/docs/[...slug]/documentation.module.scss";
function Block({children}: {children: ReactNode}) {
    return (
        <article className={styles.block}>
            {children}
        </article>
    );
}

export default Block;
