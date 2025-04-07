'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4e1c0aaa.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Browser v4.27.2 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('table-sandbox.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["table-component.cjs",[[1,"table-component",{"headers":[8],"rows":[8]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=table-sandbox.cjs.js.map