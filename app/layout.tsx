import './globals.css'
import {ReactNode} from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hljs from "highlight.js/lib/core";
import cpp from "@/utils/syntax/cpp";

export const metadata = {
    title: 'Unreal Engine C++ Reference',
    description: 'Having a closer look at Unreal Engine C++ API guides and docs',
}

export default function RootLayout({children}: { children: ReactNode }) {
    const dark = true;
    hljs.registerLanguage("cpp", cpp);


    return (
        <html lang="en">
        <body className={dark ? "dark" : "light"}>
        {dark ?
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/stackoverflow-dark.min.css"/> :
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/stackoverflow-light.min.css"/>
        }
        <Navbar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
