export const name="view_cozy-fill";
export const id="dl_5db2748d9b907404c236";
export const url=new URL("../icons/view_cozy-fill.svg?v=e55d5c755b67f3df07a39ed342f015b57eca2542d0b08f50f12b201e0d725841",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
