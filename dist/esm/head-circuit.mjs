export const name="head-circuit";
export const id="dl_5f14269529c543289e79";
export const url=new URL("../icons/head-circuit.svg?v=dbd5e7c43fed37551af5cb6cf5e30cb03e5034100b32b4fe4e76dc62d2106697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
