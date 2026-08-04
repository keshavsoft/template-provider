import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import runSync from "../../../index.js";

const fromNpm = runSync({
    raka: "doctors", poka: "doctors",
    inFileType: "fromRoutesJsEnd",
    toPath: __dirname,
    alterArray: [
        { "key": "<TABLE_NAME>", "value": "doctors" }
    ]
});

console.log("aaaaaa : ", fromNpm);
