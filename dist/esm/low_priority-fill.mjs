export const name="low_priority-fill";
export const id="dl_502005ba12181551439a";
export const url=new URL("../icons/low_priority-fill.svg?v=f0ab3f74b45e09e387d450e10176971f87873a63d47be0bc17eb4490f820a03d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
