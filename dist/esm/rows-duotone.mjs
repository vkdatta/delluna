export const name="rows-duotone";
export const id="dl_23b48c6eedfb46e7a3ab";
export const url=new URL("../icons/rows-duotone.svg?v=1c9c8911fcfcd710b3d1594b3c7dbd7ed68f357b5ce4c7d1cb2c24d342507c95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
