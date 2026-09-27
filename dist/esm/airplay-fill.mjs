export const name="airplay-fill";
export const id="dl_ca75fd8811cd43cd83fc";
export const url=new URL("../icons/airplay-fill.svg?v=bf67a8282285907e714e2947db83e1086930537cb9f39b984a309b50bc2a06e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
