export const name="pet_supplies-fill";
export const id="dl_2d40f24c5d8c9787a0c7";
export const url=new URL("../icons/pet_supplies-fill.svg?v=5ccd8e7fed091b71420a812cb35177293a4ed7771d80c5396fc95413624002c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
