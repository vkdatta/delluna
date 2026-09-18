export const name="household_supplies";
export const id="dl_2498cc3a07e8430f82fd";
export const url=new URL("../icons/H/household_supplies.svg?v=9135a33e131bd12bf967a8862ff63bf07112ed2efeca22f86821950e0ecbac4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
