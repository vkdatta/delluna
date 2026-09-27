export const name="carrot-light";
export const id="dl_d08c9b193a904943b308";
export const url=new URL("../icons/carrot-light.svg?v=d5b16dcd913e155c9c6f4c5345cda109965b751e48015625aa00a0906ed1df39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
