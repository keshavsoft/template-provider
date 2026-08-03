import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { createFolder } from "./createFolder.js";

import updateAppJs from "express-fix-any-js";

export default ({ folderName = "", toPath, inFileType }) => {

    const localToPath = toPath;

    const resolvedFolderName = folderName;

    const source = path.join(
        __dirname,
        "..",
        "template", inFileType
    );

    const destination = path.join(localToPath, resolvedFolderName);

    const createFolderResponse = createFolder({
        source, destination
    });

    if (createFolderResponse.KTF) {
        const fromUpdate = updateAppJs({
            jsFilePath: `${localToPath}/app.js`,
            inFolderNameToInsert: resolvedFolderName,
            inFileType
        });
    };

    return resolvedFolderName;
};