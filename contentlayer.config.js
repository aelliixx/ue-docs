import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";

const Documentation = defineDocumentType(() => ({
    name: "Documentation",
    filePathPattern: `**/*.mdx`,
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
            description: "Name of the include header the method or class is included with #include ...",
            required: false
        }
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/docs/${post._raw.flattenedPath}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "ue-docs-pages/documentation",
    documentTypes: [Documentation],
    mdx: {
        remarkPlugins: [remarkGfm],
    },
});