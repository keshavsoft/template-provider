import getSourcePath from "./getSourcePath.js";
import getDestinationPath from "./getDestinationPath.js";
import copyTemplate from "./copyTemplate.js";
import updateAppConfiguration from "./updateAppConfiguration.js";
import updateTableName from "./updateTableName.js";

export default ({ folderName = "", toPath, inFileType, inTableName }) => {
    const source = getSourcePath({ inFileType });
    const destination = getDestinationPath(toPath, folderName);

    const isTemplateCopied = copyTemplate(source, destination);

    if (isTemplateCopied) {
        updateAppConfiguration(toPath, folderName, inFileType);

        updateTableName({ toPath, inTableName, inFileType });
    };

    return folderName;
};