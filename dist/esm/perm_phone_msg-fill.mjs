export const name="perm_phone_msg-fill";
export const id="dl_9401da3fa40949e698fa";
export const url=new URL("../icons/perm_phone_msg-fill.svg?v=100a0cab7cc15d2649719e300a2826ad3ad69e9e9fa92e9982fd0781c4cdc703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
