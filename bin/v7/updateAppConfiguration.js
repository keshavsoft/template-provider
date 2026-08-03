import updateAppJs from "express-fix-any-js";

const updateAppConfiguration = (toPath, folderName, inFileType) => {
    return updateAppJs({
        jsFilePath: `${toPath}/app.js`,
        inFolderNameToInsert: folderName,
        inFileType
    });
};

export default updateAppConfiguration;
