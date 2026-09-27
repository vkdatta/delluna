export const name="ear-duotone";
export const id="dl_df196144f3694bf1b806";
export const url=new URL("../icons/ear-duotone.svg?v=cf7d93c9154da910c1203d1571f7483addba8a84f492dbffef43f54747cd9f1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
