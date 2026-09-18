export const name="network_locked";
export const id="dl_8c243303b73e4be2b6d1";
export const url=new URL("../icons/N/network_locked.svg?v=135784bf6bd641b73e43bdd64e544f1b32631099950ebb6cde25cdc0ab8d6798",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
