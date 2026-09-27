export const name="arrow-bend-up-left-fill";
export const id="dl_4d031905e93944489a52";
export const url=new URL("../icons/arrow-bend-up-left-fill.svg?v=fde441865c3f81900d91cd419a02e960896f6b0b325857384f7f8d19d55f4c5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
