export const name="roofing-fill";
export const id="dl_0db3b7915028c9b1303f";
export const url=new URL("../icons/roofing-fill.svg?v=588cadfb339470c0194a7da48ba08a38d82fd31875487b08428860ecdf5c4963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
