export const name="circuitry-light";
export const id="dl_a6d2c1602f3b4d56951f";
export const url=new URL("../icons/circuitry-light.svg?v=7357c6c0900f1c98d856be4510a5eac2de7ad9a10fee07433978e3491e487f65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
