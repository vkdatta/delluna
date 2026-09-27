export const name="toilet-fill";
export const id="dl_0b7ed2f24a1d57f910c2";
export const url=new URL("../icons/toilet-fill.svg?v=51c03315803abe5fec3a4d000116f5c742f928a701d6b1fcf7c27d28915262fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
