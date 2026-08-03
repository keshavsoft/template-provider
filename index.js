import { createRequire } from "module";
import getLatestVersion from "./bin/core/getLatestVersion.js";

const require = createRequire(import.meta.url);

const runSync = (options) => {
    const v = getLatestVersion();

    const mod = require(`./bin/${v}/index.js`);

    return mod.default(options);
};

const load = async () => {
    const v = getLatestVersion();

    const module = await import(`./bin/${v}/StartEndPoint/index.js`);

    return await module.default;
};

export { runSync };
export default load;