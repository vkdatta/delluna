export const name="switch_off-fill";
export const id="dl_64b49fdae779f321c7d1";
export const url=new URL("../icons/switch_off-fill.svg?v=734f4cd2293b4681c670138c2830012c832c2910d378505e838c8bf95c2f3042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
