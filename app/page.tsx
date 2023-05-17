import Image from 'next/image'
import styles from './page.module.css'
import Footer from "@/components/Footer";
import RecentChanges from "@/app/RecentChanges";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.hero_container}>
                <div className={styles.hero}>
                    <h1>Unreal Engine 5 Community Resources and Documentation</h1>
                    <div className={styles.hero__right}>
                        <h2>By Developers, for Developers</h2>
                        <p>
                            This is a community driven resource for Unreal Engine 5, aiming to provide better
                            documentation
                            for UE C++ API. If you spot a mistake or wish to document
                            something not yet documented here, feel free to submit a pull request on our GitHub page.
                        </p>
                        <h2>In-depth</h2>
                        <p>
                            I aim to provide a more in-depth resource for using Unreal Engine&apos;s very extensive C++
                            library, complete with usage scenarios, samples, and best practices.
                        </p>
                        <h2>Plain English</h2>
                        <p>
                            One of my goals is to make C++ less daunting and as easy to use as Blueprints by providing
                            easy to understand and high quality standardised documentation.
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.changes}>
                <h2>Recent changes</h2>
                {/*@ts-ignore*/}
                <RecentChanges repo="ue-docs-pages"/>
                {/*@ts-ignore*/}
                <RecentChanges repo="ue-docs"/>
                {/*@ts-ignore*/}
                {/*<RecentChanges repo="CppLT"/>*/}
            </section>
        </main>
    )
}
