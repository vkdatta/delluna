export const name="energy_savings_leaf";
export const id="dl_9b617074799a77f5dc3a";
export const url=new URL("../icons/energy_savings_leaf.svg?v=03c249ea9edeee478f4ce0c797d415c9d72b6e9cc30e10ba63ab5ca949498283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
