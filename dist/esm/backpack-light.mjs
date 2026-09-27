export const name="backpack-light";
export const id="dl_3c298aeb3e604b1c833f";
export const url=new URL("../icons/backpack-light.svg?v=b50c15668efab88f6bd779f56edbefc009a83e3970b14ceafe041fefc9837263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
