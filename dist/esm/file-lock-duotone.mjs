export const name="file-lock-duotone";
export const id="dl_7189ed5cea1c4d19a986";
export const url=new URL("../icons/file-lock-duotone.svg?v=6f795feb9351a1e3ea4d499fa9fc8827fee3d95a9ee51e87637f3934c8cd17cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
