export const name="star-four-duotone";
export const id="dl_80b86d7d5a8a39df8959";
export const url=new URL("../icons/star-four-duotone.svg?v=293e3d3eb88d2398d64c32f43ae7330ea800a8a0dd30255b942cdbc780045ff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
