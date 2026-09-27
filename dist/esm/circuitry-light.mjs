export const name="circuitry-light";
export const id="dl_a6d2c1602f3b4d56951f";
export const url=new URL("../icons/circuitry-light.svg?v=f8d3ba95454a9bc1d5ccf83b5b79ffacdc88bc38df5c3e10bbd73c82a712d8c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
