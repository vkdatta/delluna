export const name="mobile_lock_landscape";
export const id="dl_7edef94098495843a3a3";
export const url=new URL("../icons/mobile_lock_landscape.svg?v=fd9ce942ad15d03fda3b15d25345b545bb97083a643859b9b0b14c2f180b7da9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
