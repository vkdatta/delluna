export const name="type_specimen-fill";
export const id="dl_d65948a819bee30e7c49";
export const url=new URL("../icons/type_specimen-fill.svg?v=026b9215d328d5ceaff74d4174f776b19de30acd1c2b67f7281fecad727326d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
