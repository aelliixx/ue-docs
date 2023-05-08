import './globals.css'
import {Inter} from 'next/font/google'
import {ReactNode} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
    title: 'Unreal Engine C++ Reference',
    description: 'Having a closer look at Unreal Engine C++ API guides and docs',
}

export default function RootLayout({children}: { children: ReactNode }) {
    const dark = false;

    return (
        <html lang="en">
        <body className={dark ? "dark" : "light"}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
