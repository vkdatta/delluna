export const name="cell-signal-low-duotone";
export const id="dl_b50459de27b54845adba";
export const url=new URL("../icons/cell-signal-low-duotone.svg?v=ffb84d0f02106d8d8581a2b7bec3498456ae1fde12ef2971b8503f59bf2c4dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
