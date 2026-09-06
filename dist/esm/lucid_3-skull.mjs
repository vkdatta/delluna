export const name="lucid_3-skull";
export const id="dl_c7618281f61546298043";
export const url=new URL("../icons/lucid_3-skull.svg?v=48497ed1b33a9572570ac5879ed6e0e1abeed036135d0dd3dad5eccf979135fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
