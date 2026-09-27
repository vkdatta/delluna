export const name="attach_file";
export const id="dl_5c5eae6bc3a5e63baf99";
export const url=new URL("../icons/material_symbols/attach_file.svg?v=cf746328ce6997ddad256c0717b7c12ac4be785f49f784e7be4cb5afabce1fbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
