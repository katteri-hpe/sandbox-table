import { b as bootstrapLazy } from './index-cadd7e86.js';
export { s as setNonce } from './index-cadd7e86.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["table-component",[[1,"table-component",{"headers":[8],"rows":[8]}]]]], options);
};

export { defineCustomElements };

//# sourceMappingURL=loader.js.map