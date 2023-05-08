import React from "react";
import {allDocumentations} from "contentlayer/generated";
import {useMDXComponent} from 'next-contentlayer/hooks'
import {notFound} from "next/navigation";
import {MDXComponents} from "mdx/types";
import Note from "@/components/Note";
import {NoteType} from "@/utils/types";
import {Metadata} from "next";
import styles from "./documentation.module.scss";
import hljs from "highlight.js/lib/core";
import cpp from "highlight.js/lib/languages/cpp";
import csharp from "highlight.js/lib/languages/csharp";
import python from "highlight.js/lib/languages/python";
import SpecifierMetadata from "@/components/mdx/SpecifierMetadata";
import Specifier from "@/components/mdx/Specifier";
import Block from "@/components/mdx/Block";

// hljs.registerLanguage("cpp", cpp);
// hljs.registerLanguage("csharp", csharp);
// hljs.registerLanguage("python", python);
export function generateMetadata({params}: { params: { slug: string[] } }): Metadata {
    const post = allDocumentations.find((post) => post._raw.flattenedPath === params.slug.join("/"));
    return {
        title: post?.title + " | UE Docs"
    }
}

export function generateStaticParams() {
    return allDocumentations.map((post) => ({
        slug: post._raw.flattenedPath.split("/")
    }));
}

const mdxComponent: MDXComponents = {
    Note: ({type, children}) => <Note type={type as NoteType}>{children}</Note>,
    SpecifierMeta: ({position, type, incompatible, related}) => <SpecifierMetadata position={position} type={type}
                                                                                   incompatible={incompatible}
                                                                                   related={related}/>,
    Specifier: ({type, name, meta}) => <Specifier type={type} name={name} meta={meta}/>,
    Block: ({children}) => <Block>{children}</Block>
}

function Doc({params}: { params: { slug: string[] } }) {
    const post = allDocumentations.find((post) => post._raw.flattenedPath === params.slug.join("/"));
    if (!post) notFound();
    const MDXContent = useMDXComponent(post.body.code);
    // FIXME: Find a fix for the syntax highlighting
    // useEffect(() => {
    //     hljs.highlightAll();
    //     const elements = Array.from(document.querySelectorAll("h2, h3, h4"))
    //         .map((elem) => {
    //             @ts-ignore
                // console.log(elem.innerText, elem.nodeName, elem.id);
            // })
    // }, [])


    return (
        <div className={styles.doc}>
            <h1>{post.title}</h1>
            <h2>{post.subtitle}</h2>
            {post.module && <p>Module: {post.module}</p>}
            {post.header && <p>Header: {post.header}</p>}
            {post.include && <p>Include: {post.include}</p>}
            <div className={styles.body}>
                <MDXContent components={mdxComponent}/>
                <div style={{height: "50rem"}}></div>
                <pre><code>cock</code></pre>
            </div>
        </div>
    );
}

export default Doc;
