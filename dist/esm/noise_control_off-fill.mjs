export const name="noise_control_off-fill";
export const id="dl_59b9760010287a937fd7";
export const url=new URL("../icons/noise_control_off-fill.svg?v=6a247222f687ac45488f2ae06be531d5d0e14ed08fe1a6e79dce9b1c1d568e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
