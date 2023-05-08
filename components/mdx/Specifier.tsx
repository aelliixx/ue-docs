import React from "react";
import styles from "@/app/docs/[...slug]/documentation.module.scss";
import Link from "next/link";

function Specifier({type, name, meta}: { type: string, name: string, meta?: boolean }) {
    return (
        <a href={`#${name}`}><h2 className={styles.specifier} id={name}>
            <span className={styles.span_begin}>
                {type}({meta && "meta = "}
            </span>
            {name}
            <span className={styles.span_end}>)</span>
        </h2>
        </a>
    );
}

export default Specifier;
