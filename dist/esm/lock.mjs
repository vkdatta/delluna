export const name="lock";
export const id="dl_c462e0cc1eb140cc948c";
export const url=new URL("../icons/L/lock.svg?v=1610299df96ea624b9936e7efd5afc06d4685cd52e9d197bd6f534f99228bb3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
