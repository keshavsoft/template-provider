import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import { runSync } from "../../../index.js";

const fromNpm = runSync({
    inFileType: "fromRoutesJs",
    folderName: "v1",
    toPath: __dirname
});

console.log("aaaaaa : ", fromNpm);
