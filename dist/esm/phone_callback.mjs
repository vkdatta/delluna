export const name="phone_callback";
export const id="dl_a7058e909356a2530944";
export const url=new URL("../icons/phone_callback.svg?v=5faa1bc391cd7c54b7c3ee8407a06cd8537b26678824731ece093521c03fb07b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
