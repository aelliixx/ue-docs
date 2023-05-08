import React from "react";
import styles from "@/app/docs/[...slug]/documentation.module.scss";

function SpecifierMetadata({position, type, incompatible, related}: {
    position: string,
    type: string,
    incompatible: string[],
    related: string[]
}) {
    return (
        <div className={styles.metadata}>
            <div className={styles.inlineMeta}>
                <p className={styles.header}>Position:</p><p>{position}</p>
            </div>
            <div className={styles.inlineMeta}>
                <p className={styles.header}>Type:</p><p>{type}</p>
            </div>
            {incompatible.length > 0 &&
                <div className={styles.inlineMeta}>
                    <p className={styles.header}>Incompatible with:</p>
                    <div className={styles.listMeta}>
                        {incompatible.map((str, i) =>
                            <a className="no_hash" href={`#${str}`} key={i}>
                                {str}
                            </a>)}
                    </div>
                </div>
            }
            {related.length > 0 &&
                <div className={styles.inlineMeta}>
                    <p className={styles.header}>Related to:</p>
                    <div className={styles.listMeta}>
                        {related.map((str, i) =>
                            <a className="no_hash" href={`#${str}`} key={i}>
                                {str}
                            </a>)}
                    </div>
                </div>
            }
        </div>
    );
}

export default SpecifierMetadata;
