export const name="siren_open-fill";
export const id="dl_42a9ed544fbd867b23a1";
export const url=new URL("../icons/siren_open-fill.svg?v=bec5f7c624776f3ccb29ec913b6ea4f91b2b61a5a843122f75fefb8e67dbcc43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
