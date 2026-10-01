export const name="local_parking-fill";
export const id="dl_3da4c3c2152d36b2f21b";
export const url=new URL("../icons/local_parking-fill.svg?v=28e301993f526bc4e05f430c9627dc37ad80d6a00937c3eee20b0f169cf27f61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
