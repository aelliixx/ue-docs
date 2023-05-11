import React from "react";
import styles from "./docs.module.css";
import Link from "next/link";
import {allDocumentations, Documentation} from "contentlayer/generated";
import path from "node:path";


export function generateStaticParams() {
    return allDocumentations.map((post) => ({
        slug: post._raw.flattenedPath.split("/")
    }));
}

type Dir = {
    path: string
    routes: Documentation[]
}

function Sidebar() {

    const reflectionPages = allDocumentations.filter((post) => post._raw.flattenedPath.split("/")[1] === "reflection");

    const findPages = (src: string, depth?: number) => allDocumentations
        .filter((post) => post._raw.flattenedPath.split("/")[depth || 1] === src);

    return (
        <aside className={styles.sidebar}>
            <nav>
                <ol>
                    <li className={styles.sidebar__header}><Link href="/docs">Reference</Link></li>
                    <li>
                        <details>
                            <summary><Link href="#">Reflection</Link></summary>
                            <ol>
                                {/*UFUNCTION()*/}
                                {/*UCLASS()*/}
                                {/*USTRUCT()*/}
                                {/*UINTERFACE()*/}
                                {/*UENUM() & UMETA()*/}
                                {/*UPARAM()*/}
                                {findPages("reflection").map((page, index) => <li key={index}>
                                    <Link href={page.url}>{page.title}</Link>
                                </li>)}
                            </ol>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Basic types</summary>
                            <ol>
                                <li><Link href="#">bool</Link></li>
                                <li><Link href="#">float & double</Link></li>
                                <li><Link href="#">int</Link></li>
                                <li><Link href="#">uint</Link></li>
                                <li><Link href="#">ANSICHAR</Link></li>
                                <li><Link href="#">TCHAR</Link></li>
                                <li><Link href="#">FString</Link></li>
                                <li><Link href="#">FName</Link></li>
                                <li><Link href="#">FText</Link></li>
                            </ol>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Containers</summary>
                            <ol>
                                <li><Link href="#">TArray</Link></li>
                                <li><Link href="#">TDeque</Link></li>
                                <li><Link href="#">THashTable</Link></li>
                                <li><Link href="#">TList</Link></li>
                                <li><Link href="#">TMap</Link></li>
                                <li><Link href="#">TQueue</Link></li>
                                <li><Link href="#">TSet</Link></li>
                                <li><Link href="#">TUnion</Link></li>
                            </ol>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Value wrappers</summary>
                            <ol>
                                <li><Link href="#">TOptional</Link></li>
                                <li><Link href="#">TVariant</Link></li>
                                <li><Link href="#">FVariant</Link></li>
                            </ol>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><Link href="#">Smart pointers</Link></summary>
                            <ol>
                                <li><Link href="#">TSharedPtr</Link></li>
                                <li><Link href="#">TSharedRef</Link></li>
                                <li><Link href="#">TWeakPtr</Link></li>
                                <li><Link href="#">TUniquePtr</Link></li>
                            </ol>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary>Maths</summary>
                            <ol>
                                <li><Link href="#">FMath</Link></li>
                                <li><Link href="#">FVector</Link></li>
                                <li><Link href="#">FRotator</Link></li>
                                <li><Link href="#">FTransform</Link></li>
                                <li><Link href="#">FMatrix</Link></li>
                            </ol>
                        </details>
                    </li>
                    <li className={styles.sidebar__header}><Link href="#">Guides</Link></li>
                    <li>
                        <details>
                            <summary><Link href="#">Property replication</Link></summary>
                            <ol>
                                <li><Link href="#">Conditional property replication</Link></li>
                            </ol>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary><Link href="#">Useful macros</Link></summary>
                            <ol>
                                <li><Link href="#">Check authority</Link></li>
                            </ol>
                        </details>
                    </li>
                </ol>
            </nav>
        </aside>
    );
}

export default Sidebar;
