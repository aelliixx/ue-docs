import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import {AiFillGithub} from "react-icons/ai";

function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.footer}>
                <div className={styles.logo}>
                    <Link href="/" className={styles.footer__logo}>aelliixx</Link>
                    <Link href="https://allographic.io/" className={styles.footer__sublogo}>& allographic</Link>
                    <Link href="#" style={{marginBlockStart: "2rem"}}><AiFillGithub size={25}/></Link>
                </div>
                <ol>
                    <li className={styles.column_header}>UE Docs</li>
                    <li><Link href="#">About this site</Link></li>
                    <li><Link href="#">Privacy</Link></li>
                    <li><Link href="#">View source</Link></li>
                </ol>
                <ol>
                    <li className={styles.column_header}>Contribute</li>
                    <li><Link href="#">Writing guidelines</Link></li>
                    <li><Link href="#">Attribution & copyright</Link></li>
                    <li><Link href="#">Submit a change</Link></li>
                    <li><Link href="#">Report an issue</Link></li>
                    <li><Link href="#">View doc source</Link></li>
                </ol>
                <ol>
                    <li className={styles.column_header}>aelliixx</li>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">About aelliixx</Link></li>
                </ol>
                <ol>
                    <li className={styles.column_header}>allographic</li>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="#">About allographic</Link></li>
                </ol>
                <div className={styles.subtext}>
                    <p>Some parts of this content are ©2023 by individual ue.aelliixx.com contributors.</p>
                    <p>Created by Donatas Mockus &quot;aelliixx&quot;.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
