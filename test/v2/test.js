import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");

import { runSync } from "../../index.js";

const fromNpm = runSync({
    inFileType: "fromAppJs",
    folderName = "api",
    toPath: __dirname
});

console.log("aaaaaa : ", fromNpm);
