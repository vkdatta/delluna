export const name="water_bottle-fill";
export const id="dl_e3de1b9827e3d1a71870";
export const url=new URL("../icons/water_bottle-fill.svg?v=4e39915ed446e656c427752022b0d9cc69a0486e229af8c65c687b8423418280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
