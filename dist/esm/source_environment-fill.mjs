export const name="source_environment-fill";
export const id="dl_d43d55c5eeac70fcc85d";
export const url=new URL("../icons/source_environment-fill.svg?v=ac563af92262be82ba0e63cf9dd80b9c53d8c01326265a6633df35eee912a77e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
