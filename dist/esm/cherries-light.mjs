export const name="cherries-light";
export const id="dl_19b0f326dfa34c8491cb";
export const url=new URL("../icons/cherries-light.svg?v=1d8719b27a5c2ccaf704b912fab0d54868a741904e117cebd5c07b6e1eec6408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
