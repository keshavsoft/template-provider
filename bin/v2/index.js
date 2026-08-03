import startEndPoint from "./StartEndPoint/index.js";

const run = ({ inFileType, folderName = "", toPath }) => {
    switch (inFileType) {
        case "fromAppJs":

            startEndPoint(folderName = "", toPath);

            break;

        default:
            break;
    };

};

export default run;