export const name="circuitry";
export const id="dl_84f5fb9dfd9b44b790b1";
export const url=new URL("../icons/circuitry.svg?v=66462621f641baef70566b00894131dfdda5e12dc9452c00f46c50dc89637f37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
