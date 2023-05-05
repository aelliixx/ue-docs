"use client";
import React from "react";
import styles from "./navbar.module.css"

function Searchbar() {

    function search(params: string) {
        console.log(params);
    }

    return (
        <input className={styles.searchbar} type="search" placeholder="Search" onKeyDown={e => {
            if (e.key === "Enter") search(e.currentTarget.value)}}/>

    );
}

export default Searchbar;
