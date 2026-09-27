export const name="fluid_balance";
export const id="dl_d999f0d8440699f9c5ef";
export const url=new URL("../icons/fluid_balance.svg?v=77a5b394a8b2598e8dd1727033a87960f85b3b406f111802d32202511d83d21e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
