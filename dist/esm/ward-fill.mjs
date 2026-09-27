export const name="ward-fill";
export const id="dl_c19660044be6ebae2cd0";
export const url=new URL("../icons/ward-fill.svg?v=0509d1a1dccfc3fac8ada4adcf660c578ea57891392cd11d60b753ee071d64b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
