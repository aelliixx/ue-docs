import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Searchbar from "@/components/Searchbar";
function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}><Link href="/">aelliixx.</Link> </div>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/docs">Documentation</Link>
                <Link href="/">Guides</Link>
                <Link href="/">About</Link>
                <Searchbar/>
            </nav>
        </header>
    );
}

export default Navbar;
