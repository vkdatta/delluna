export const name="garage_door_open";
export const id="dl_13eef66aa2df3332c249";
export const url=new URL("../icons/garage_door_open.svg?v=06114dc4a551880f49afb8128463fc215584b238458e0fc843b5da47a652b9fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
