import getSourcePath from "./getSourcePath.js";
import getDestinationPath from "./getDestinationPath.js";
import copyTemplate from "./copyTemplate.js";
import updateAppConfiguration from "./updateAppConfiguration.js";
import updateTableName from "./updateTableName.js";

export default ({ raka, poka, toPath, inFileType, alterArray }) => {
    const source = getSourcePath({ inFileType });
    const destination = getDestinationPath(toPath, raka);

    const isTemplateCopied = copyTemplate(source, destination);

    if (isTemplateCopied) {
        updateAppConfiguration({ toPath, inFileType, raka, poka });

        if (alterArray) {
            updateTableName({ toPath, alterArray, inFileType });
        };
    };

    return true;
};