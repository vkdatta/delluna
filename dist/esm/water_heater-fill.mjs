export const name="water_heater-fill";
export const id="dl_336c4248a0bc0856e610";
export const url=new URL("../icons/water_heater-fill.svg?v=7e167de07df73f9f384f9b5a0564ac0e2b513452b0993e2a0e9db63d172a4ac7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
