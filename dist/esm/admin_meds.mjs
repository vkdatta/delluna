export const name="admin_meds";
export const id="dl_9ae0809bff6e6080175b";
export const url=new URL("../icons/admin_meds.svg?v=d7e7dd55a2eea398eb96de3d5498d5a139e7164a7abb10de9e9dec5b5a7967ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
