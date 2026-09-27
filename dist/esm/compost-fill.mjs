export const name="compost-fill";
export const id="dl_1889a8f34a322c8d8ff8";
export const url=new URL("../icons/compost-fill.svg?v=5c064bef1fb5cb63905be85b9a2817f25449c2a3dcb5e99fe59393b85f504b91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
