import { p as promiseResolve, b as bootstrapLazy } from './index-cadd7e86.js';
export { s as setNonce } from './index-cadd7e86.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.27.2 | MIT Licensed | https://stenciljs.com
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