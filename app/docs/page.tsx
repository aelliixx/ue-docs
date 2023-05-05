import React from "react";
import Note from "@/components/Note";
import {NoteType} from "@/utils/types";
import Link from "next/link";
import styles from "./docs.module.css";

function Docs() {
    return (
        <div className={styles.content}>
            <h1>Unreal Engine Documentation</h1>
            <p>Unofficial, community created, and in-depth Unreal Engine C++ API documentation for everyday
               developers.</p>
            <Note type={NoteType.Disclaimer}>
                <p>
                    This documentation is under heavy development insofar that it covers only a small subset of UE C++
                    classes or functions, may contain errors, or are not as detailed as otherwise promised.
                </p>
                <p>
                    All pages of this documentation are available on <Link className="link" href="#todo">GitHub</Link>.
                    If you spot any errors or wish to contribute new documentation, please submit a pull request.
                </p>
            </Note>
            <p>
                Unreal Engine is an incredibly powerful engine with a very expansive ecosystem of tools, plugins,
                marketplace content, and resources, which enable developers to create AAA quality visuals and gameplay
                with ease. One example of such tools is the fairly beginner-friendly and approachable Blueprint
                system. Official documentation does not go into very much detail regarding individual blueprint node
                usages, behaviour or implementation, but in spite of this, much of the available online resources on
                Unreal Engine (YouTube tutorials, blogs, even most of the official Unreal Engine guides) use blueprints.
            </p>
            <p>
                The C++ API is equally, if not even more so, poorly documented, but in this case, it
                also lacks the breadth of resources one could find elsewhere. Many questions about any specific C++
                properties, classes, or methods, which should be answered by the official documentation - are not. In
                such
                instances developers are often left scouring forums for answers.
            </p>
            <p>
                With this website, I hope to provide a goto destination for detailed UE C++ API documentation and
                guides.
                As it is an open source project, all of the markdown files used to generate the documentation are
                available
                on <Link className="link" href="#todo">GitHub</Link>, so anyone may submit a pull request in order to
                correct an error or
                provide new docs or guides. The goal of this is to ensure up to date and clearly understandable resource
                for beginner, intermediate, and professional Unreal Engine developers.
            </p>
            <h2>Further Resources</h2>
            <p>There are many other fantastic resources available online that might better suit your needs:</p>
            <ul className="list">
                <li>
                    <Link className="link" href="https://benui.ca/">
                        Ben ui
                    </Link> has fantastic guides and tutorials for Unreal Engine gameplay and UI development.
                </li>
                <li>
                    <Link className="link" href="https://forums.unrealengine.com/categories?tag=unreal-engine">
                        Unreal Engine Dev Community Forums
                    </Link> are the place to go if you have questions about anything and everything Unreal Engine
                            related.
                </li>
                <li>
                    <Link className="link" href="https://www.youtube.com/@UnrealEngine">
                        Official Unreal Engine YouTube Channel
                    </Link> has hours upon hours of talks, showcases, and livestreams showing a high level overview of
                            Unreal Engine&apos;s capabilities, best practices, and methodologies.
                </li>
                <li>
                    <Link className="link" href="https://www.youtube.com/@MathewWadsteinTutorials/videos">
                        Mathew Wadstein
                    </Link> has produced years worth of Unreal Engine video content exploring different aspects of both
                            UE Blueprint and C++ libraries.
                </li>
            </ul>

        </div>
    );
}

export default Docs;
