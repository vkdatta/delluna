export const name="fire_extinguisher-fill";
export const id="dl_dddb6af3d0bd9206136d";
export const url=new URL("../icons/fire_extinguisher-fill.svg?v=33213f6826be6dcc922ff0ce6dc3751861a3ab15599c41fededa706f608d1897",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
