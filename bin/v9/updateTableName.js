import updateAppJs from "express-fix-any-js";

import fileNamesJson from '../fileNames.json' with {type: 'json'};

const startFunc = ({ toPath, inTableName, inFileType }) => {
    if (inFileType === "fromEndPointsJs") {
        return updateAppJs({
            inTargetPath: toPath,
            inTableName: "TAB1",
            inFileType,
            inAlterType: "addTableName"
        });
    };
};

export default startFunc;
