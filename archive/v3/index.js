import startEndPoint from "./StartEndPoint/index.js";

const run = ({ inFileType, folderName, toPath }) => {
    switch (inFileType) {
        case "fromAppJs":

            startEndPoint({ folderName, toPath, inFileType });

            break;

        default:
            break;
    };

};

export default run;