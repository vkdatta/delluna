export const name="sticker-light";
export const id="dl_4ae981c6c40b618c8d33";
export const url=new URL("../icons/sticker-light.svg?v=1058859ca2a85ae1a90e9ac266896f358510a8c4892ee7d1c113736e87c755f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
