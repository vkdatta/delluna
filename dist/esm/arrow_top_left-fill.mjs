export const name="arrow_top_left-fill";
export const id="dl_284eaaaa20084c12a2da";
export const url=new URL("../icons/arrow_top_left-fill.svg?v=13a5e1fa254792771acb54d50ded3298f4044bdd7a3b7e15a0ed15716c62093d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
