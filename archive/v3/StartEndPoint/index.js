import { locateSource } from "./Helpers/steps/locateSource.js";
import { locateDestination } from "./Helpers/steps/locateDestination.js";
import { createFolder } from "./createFolder.js";
import updateAppJs from "./Helpers/steps/updateJs.js";

import resolveFolderName from "./Helpers/steps/resolveFolderName.js";

export default ({ folderName = "", toPath, inFileType }) => {

    const localToPath = toPath;

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    if (resolvedFolderName.KTF === false) {
        return resolvedFolderName;
    };

    const source = locateSource();
    const destination = locateDestination({
        inResolvedFolderName: resolvedFolderName,
        toPath: localToPath
    });

    const createFolderResponse = createFolder({
        source, destination
    });

    if (createFolderResponse.KTF) {
        const fromUpdate = updateAppJs({
            appJsPath: `${localToPath}/app.js`,
            endpoint: resolvedFolderName,
            inFileType
        });
    };

    return resolvedFolderName;
};