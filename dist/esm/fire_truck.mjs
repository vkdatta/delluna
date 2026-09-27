export const name="fire_truck";
export const id="dl_2050b2197d3f5fa926a5";
export const url=new URL("../icons/fire_truck.svg?v=0db88c79c82b68be7fe11b3cdc4e983596eacbe2ec54df3fac42180379e3bcd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
