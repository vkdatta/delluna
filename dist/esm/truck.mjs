export const name="truck";
export const id="dl_9b2c7d40d97f4beeb7dd";
export const url=new URL("../icons/truck.svg?v=79489fe16b0b7e16e6be9d31f047d5b25cdc8cc105a12e5c2807fd63221265c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
