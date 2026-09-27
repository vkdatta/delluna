export const name="tree-evergreen-light";
export const id="dl_66cfc6178cb7fbd89d27";
export const url=new URL("../icons/tree-evergreen-light.svg?v=07ee354643e8bab6623f258c91e2911e995bb7225e85bd8d1ad6600aec60add9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
