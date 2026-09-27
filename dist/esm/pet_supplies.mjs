export const name="pet_supplies";
export const id="dl_328e65c43f8b7bfda17f";
export const url=new URL("../icons/pet_supplies.svg?v=192caff32639a87ed5920e9c9a6813cbdb23525e7367af77d1ad9467186360b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
