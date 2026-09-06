export const name="gps";
export const id="dl_e7a5365f7799496da3c1";
export const url=new URL("../icons/gps.svg?v=f71608d26536ff96a22ea68bbf4c4d22b5d4a0b1a4113c9f22f483ddd18a2c10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
