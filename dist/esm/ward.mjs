export const name="ward";
export const id="dl_877a74fc67ac4194e7b3";
export const url=new URL("../icons/ward.svg?v=af33123d8a796fe5402950ae43423aba124a67bf022100e7357b84c1434ee73d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
