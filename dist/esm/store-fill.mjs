export const name="store-fill";
export const id="dl_96982c01cd2317ca146f";
export const url=new URL("../icons/store-fill.svg?v=a52cdd02e3980372e020e9cc29eae0488c83ca6f154a0dedad1b7035f9eca18b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
