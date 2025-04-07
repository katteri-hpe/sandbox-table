import { p as promiseResolve, b as bootstrapLazy } from './index-DiRK6UNu.js';
export { s as setNonce } from './index-DiRK6UNu.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.29.1 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["table-component",[[1,"table-component",{"headers":[8],"rows":[8]}]]]], options);
});
//# sourceMappingURL=table-sandbox.js.map

//# sourceMappingURL=table-sandbox.js.map