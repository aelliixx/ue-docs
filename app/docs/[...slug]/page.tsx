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
    Block: ({children}) => <Block>{children}</Block>,
    h2: ({children}) => <h2 id={children?.toString().split(" ").join("")}><a
        href={`#${children?.toString().split(" ").join("")}`}>{children}</a></h2>,
    a: ({href, children}) => <Link href={href!} className="link">{children}</Link>,
    // FIXME: This is a workaround for not being able to register new languages through ContentLayer. Check if they respond on discord, because this is rather janky.
    code: ({children}) => <code className="hljs"
                                dangerouslySetInnerHTML={{__html: hljs.highlight((children || "").toString(), {language: "cpp"}).value}}/>,
    img: ({src, alt, width, height}) =>
        <Image src={src!} alt={alt!} width={width as number} height={height as number}/>
}

function Doc({params}: { params: { slug: string[] } }) {
    const post = allDocumentations.find((post) => post._raw.flattenedPath === params.slug.join("/"));
    if (!post) notFound();
    const MDXContent = useMDXComponent(post.body.code);

    // FIXME: This is a workaround for not being able to register new languages through ContentLayer. Check if they respond on discord, because this is rather janky.
    return (
        <div className={styles.doc}>
            <h1 className={styles.title}>{post.title}</h1>
            <h2 className={styles.subtitle}>{post.subtitle}</h2>
            <div className={styles.meta}>
                {post.module && <p className={styles.meta__module}>{post.module}</p>}
                {post.header && <p className={styles.meta__header}>{post.header}</p>}
                {post.include && <p className={styles.meta__include}>{post.include}</p>}
            </div>
            <div className={styles.body}>
                <MDXContent components={mdxComponent}/>
                <div style={{height: "50rem"}}></div>
            </div>
            {post.tags && <><p className={styles.header}>Tags:</p><p>{post.tags}</p></>}
        </div>
    );
}

export default Doc;
