export const name="tray-arrow-up-light";
export const id="dl_d1ca809cb8ab14d8d675";
export const url=new URL("../icons/tray-arrow-up-light.svg?v=3ae135ffdba73844f6cd2eebc6b7a036123e0e041a75883b638a2a7cd93842ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
