import {defineDocumentType, makeSource} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import staticImages from "./utils/mdxImg";
import path from "node:path";

const Documentation = defineDocumentType(() => ({
    name: "Documentation",
    filePathPattern: `**/documentation/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of a method, class or macro.",
            required: true
        },
        subtitle: {
            type: "string",
            description: "Optional subtitle of a method, class or macro.",
            required: false
        },
        module: {
            type: "string",
            description: "Name of the module the method or class is a part of.",
            required: false
        },
        header: {
            type: "string",
            description: "Location of the module the method or class is in.",
            required: false
        },
        include: {
            type: "string",
            description: "Name of the include header the method or class is included with #include <...>",
            required: false
        },
        tags: {
            type: "string",
            description: "Keywords that describe what the document is about",
            required: false
        }
    },
    computedFields: {
        url: {
            type: 'string',
            // FIXME: remove the /documents/ dir from flattenedPath in order to not have urls like /docs/documents/reflection/blabla
            resolve: (post) => `/docs/${post._raw.flattenedPath}`,
        },
    },
}));

const Guide = defineDocumentType(() => ({
    name: "Guide",
    filePathPattern: `**/guides/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of a tutorial or guide.",
            required: true
        },
        tags: {
            type: "string",
            description: "Keywords that describe what the document is about",
            required: false
        }
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/guides/${post._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "ue-docs-pages",
    documentTypes: [Documentation, Guide],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[staticImages, {publicDir: path.join("public", "docs"), resourceDir: "/docs", sourceDir: "images"}]]
    },
});