export const name="sim-card-light";
export const id="dl_ab1a550c7fbd7a5adabc";
export const url=new URL("../icons/sim-card-light.svg?v=3127f5058efec3855c03b27f40895bd6a665798280fd68a6ccbdb67a333ecee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
