import React from "react";
import styles from "@/app/docs/[...slug]/documentation.module.scss";
import Link from "next/link";

function Specifier({type, name, meta}: { type: string, name: string, meta?: boolean }) {
    return (
        <h3 className={styles.specifier} id={name}><a href={`#${name}`}>
            <span className={styles.span_begin}>
                {type}({meta && "meta = "}
            </span>
            {name}
            <span className={styles.span_end}>)</span>
        </a>
        </h3>
    );
}

export default Specifier;
