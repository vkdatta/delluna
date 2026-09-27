export const name="electric_bike-fill";
export const id="dl_09581cad12d7c45c1287";
export const url=new URL("../icons/electric_bike-fill.svg?v=ec265a762133963f1403289c6c572391312748d3136b995ed9897690590fb735",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
