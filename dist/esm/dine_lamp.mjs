export const name="dine_lamp";
export const id="dl_ac719aa1d2d272cf9eca";
export const url=new URL("../icons/dine_lamp.svg?v=92e86072f09075961c856583955bb328e9c08b90ada106834d7842b254d36f35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
