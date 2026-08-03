import runSync from "express-fix-any-js";

const updateAppJs = ({ appJsPath, endpoint, inFileType }) => {
    runSync({
        jsFilePath: appJsPath,
        inFolderNameToInsert: endpoint,
        inFileType
    });

    return false;
};

export default updateAppJs; 