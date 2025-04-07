'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4e1c0aaa.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["table-component.cjs",[[1,"table-component",{"headers":[8],"rows":[8]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;

//# sourceMappingURL=loader.cjs.js.map