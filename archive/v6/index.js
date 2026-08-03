import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { createFolder } from "./createFolder.js";
import updateAppJs from "express-fix-any-js";

const getSourcePath = (inFileType) => {
    return path.join(__dirname, "..", "template", inFileType);
};

const getDestinationPath = (toPath, folderName) => {
    return path.join(toPath, folderName);
};

const copyTemplate = (source, destination) => {
    const response = createFolder({ source, destination });
    return response.KTF;
};

const updateAppConfiguration = (toPath, folderName, inFileType) => {
    return updateAppJs({
        jsFilePath: `${toPath}/app.js`,
        inFolderNameToInsert: folderName,
        inFileType
    });
};

export default ({ folderName = "", toPath, inFileType }) => {
    const source = getSourcePath(inFileType);
    const destination = getDestinationPath(toPath, folderName);

    const isTemplateCopied = copyTemplate(source, destination);

    if (isTemplateCopied) {
        updateAppConfiguration(toPath, folderName, inFileType);
    }

    return folderName;
};