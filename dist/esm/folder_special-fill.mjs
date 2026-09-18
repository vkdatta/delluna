export const name="folder_special-fill";
export const id="dl_8a5d9d8442c64c47aa4a";
export const url=new URL("../icons/folder_special-fill.svg?v=5164976bb76dc5218bd1006cc836d1dbb59d2dc570fd24f6bda4e79fca3fab70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
