import {Root, Element} from "hast";
import {visit} from "unist-util-visit";
import {Plugin, TransformCallback, VFileWithOutput} from "unified";
import {RawDocumentData} from "contentlayer/src/source-files";
import path from "node:path";
import sharp from "sharp";
import fs from "fs/promises";

type Options = {
    publicDir: string,
    resourceDir: string,
    sourceDir: string
}

const staticImages: Plugin<[Options], Root> = (options: Options) => (tree: Root, file: VFileWithOutput<unknown>, done: TransformCallback<Root>) => {
    const tasks: Promise<void>[] = [];

    visit(tree, "element", (node: Element) => {
        if (node.tagName === "img") {
            tasks.push(processImage(options, file, node));
        }
    });

    Promise.all(tasks).then(() => done());
}

const processImage = async (options: Options, file: VFileWithOutput<unknown>, node: Element): Promise<void> => {
    const root = file.dirname || process.cwd();

    // Get raw document data from ContentLayer, which contains source file directory e.g. "reflection"
    const data = file.data as { rawDocumentData: RawDocumentData };
    const directory = data.rawDocumentData.sourceFileDir;

    // Get src attribute of the <img src="..."/> tag, or empty. e.g. "images/example.png"
    const filePath = node.properties?.src as string || "";
    // Get the path of the image with the root folder prepended. e.g. "/home/aelliixx/WebstormProjects/ue-docs/ue-docs-pages/documentation/images/example.png"
    const imagePath = path.join(root, filePath);

    // Get image metadata, including width and height.
    const image = await sharp(imagePath);
    const {width, height} = await image.metadata();

    // Resize the image and save it to a blob. We don't currently use this.
    const aspectRatio = width! / height!;
    const blurDataUrl = await image.resize(8, Math.round(8 / aspectRatio))
        .png({quality: 75})
        .toBuffer()
        .then((buffer) => `data:image/png;base64,${buffer.toString("base64")}`);

    // Filter out the source dir (e.g. "/images/") because we don't want to add another images folder in the public folder.
    const src = path.join(directory, filePath.replace(options.sourceDir, "")); // e.g. "reflection/example.png"
    const target = path.join(process.cwd(), options.publicDir, src); // e.g. "/home/aelliixx/WebstormProjects/ue-docs/public/docs/reflection/example.png"
    const targetDir = path.dirname(target); // e.g. "/home/aelliixx/WebstormProjects/ue-docs/public/docs/reflection"

    console.log("Creating directory:", targetDir);
    await fs.mkdir(targetDir, {recursive: true});
    console.log("Copying file:", imagePath, " => ", target);
    await fs.copyFile(imagePath, target);
    console.log(blurDataUrl)

    console.log("Path:", options.publicDir);
    node.properties = {
        ...node.properties,
        width,
        height,
        src: path.join(options.resourceDir, src), // e.g. "/docs/reflection/example.png"
        blurDataUrl
    }
}


export default staticImages;