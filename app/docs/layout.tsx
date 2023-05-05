import React, {ReactNode} from "react";
import Sidebar from "./Sidebar";
import styles from "./docs.module.css";

export default function DocLayout({children}: { children: ReactNode }) {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}

