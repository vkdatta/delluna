export const name="water_full";
export const id="dl_6936075934ce0dad5d6d";
export const url=new URL("../icons/water_full.svg?v=5addd670bb804e1f47fc7d97963035d9bc7f1158b0eb88334dbdb0d867c56f52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
