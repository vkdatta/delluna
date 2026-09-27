export const name="lucid_3-move-3d";
export const id="dl_c7fa904ecddc41e3a2c1";
export const url=new URL("../icons/lucid_3-move-3d.svg?v=501bacca620e77c399c8838f7c13ecbd52609877d75c2df204f4d7e0a39bf8af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
