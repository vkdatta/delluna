export const name="shield_card-fill";
export const id="dl_d50d2ef145b8d5aa8e36";
export const url=new URL("../icons/shield_card-fill.svg?v=88f4882687fbb85646e9f4d6229b603f2bee09efd5e9479ea5a16f223ad31e48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
