export const name="language_spanish-fill";
export const id="dl_edf88462ea5583e806f5";
export const url=new URL("../icons/language_spanish-fill.svg?v=5a34bbbeac543ab00e281b9c494fd8e5d8538c88cae915d118bb4610378c5d18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
