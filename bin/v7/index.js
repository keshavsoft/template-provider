import getSourcePath from "./getSourcePath.js";
import getDestinationPath from "./getDestinationPath.js";
import copyTemplate from "./copyTemplate.js";
import updateAppConfiguration from "./updateAppConfiguration.js";

export default ({ folderName = "", toPath, inFileType, inSubFolderName }) => {
    const source = getSourcePath({ inFileType, inSubFolderName });
    const destination = getDestinationPath(toPath, folderName);

    const isTemplateCopied = copyTemplate(source, destination);

    if (isTemplateCopied) {
        updateAppConfiguration(toPath, folderName, inFileType);
    }

    return folderName;
};