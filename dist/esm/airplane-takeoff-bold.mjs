export const name="airplane-takeoff-bold";
export const id="dl_b72c6fed76e54169bcbd";
export const url=new URL("../icons/airplane-takeoff-bold.svg?v=9364a1fa9eea5ef47baed7a92634a2b63522e71d1095677f8c8d088119762a89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
