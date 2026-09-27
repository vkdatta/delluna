export const name="water_ph-fill";
export const id="dl_344d9b63d96dd7dccbe3";
export const url=new URL("../icons/water_ph-fill.svg?v=cf4d6977f47337eabd97c154ded6e06501da10c6e2f06ac3f0af5d56c3383da8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
