import getSourcePath from "./getSourcePath.js";
import getDestinationPath from "./getDestinationPath.js";
import copyTemplate from "./copyTemplate.js";
// import updateAppConfiguration from "./updateAppConfiguration.js";
// import updateTableName from "./updateTableName.js";
import fixAnyJs from "express-fix-any-js";

export default ({ raka, poka, toPath, inFileType, alterArray }) => {
    const source = getSourcePath({ inFileType });
    const destination = getDestinationPath(toPath, raka);

    const isTemplateCopied = copyTemplate(source, destination);

    if (isTemplateCopied) {
        const fromRakaPoka = fixAnyJs({
            inTargetPath: toPath, alterArray,
            inFileType, inValue: raka, OutValue: poka
        });

        // if (alterArray) {
        //     const fromAlterArray = fixAnyJs({
        //         inTargetPath: toPath,
        //         alterArray, inFileType
        //     });
        // };
    };

    return { fromRakaPoka, fromAlterArray };
};