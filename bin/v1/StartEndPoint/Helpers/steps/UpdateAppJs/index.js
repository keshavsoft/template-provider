import runSync from "express-fix-any-js";

const updateAppJs = ({ appJsPath, endpoint, showLog }) => {
    runSync({
        jsFilePath: appJsPath,
        inFolderNameToInsert: endpoint,
        inFileType: "fromAppJs"
    });

    return false;
};

export default updateAppJs;