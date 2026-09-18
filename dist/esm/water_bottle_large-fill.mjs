export const name="water_bottle_large-fill";
export const id="dl_2564f450571d4e11bffb";
export const url=new URL("../icons/water_bottle_large-fill.svg?v=7e0cb64e96a15c0adad517c13210283a34835591e4f080c2210879d0bd9549b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
