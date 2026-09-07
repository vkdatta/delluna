export const name="taxi-bold";
export const id="dl_5422e1846183403596dd";
export const url=new URL("../icons/T/taxi-bold.svg?v=caa7f16e413f78b97460c27b2470facd2f7009e4ad554e83e0014d76dda4e308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
