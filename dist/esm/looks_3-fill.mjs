export const name="looks_3-fill";
export const id="dl_403c7dfd0e67a2b62938";
export const url=new URL("../icons/looks_3-fill.svg?v=63bbc5aa8e8d7de8a9399349afa6ae5cd72dfe5d2a3798489f515f35ee582129",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
