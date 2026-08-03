import updateAppJs from "express-fix-any-js";

import fileNamesJson from '../fileNames.json' with {type: 'json'};

const updateAppConfiguration = (toPath, folderName, inFileType) => {
    const jsFilePath = `${toPath}/${fileNamesJson[inFileType]}`;
    
    return updateAppJs({
        jsFilePath,
        inFolderNameToInsert: folderName,
        inFileType
    });
};

export default updateAppConfiguration;
