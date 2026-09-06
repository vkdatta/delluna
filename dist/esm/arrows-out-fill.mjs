export const name="arrows-out-fill";
export const id="dl_7fa337c3c94a401387da";
export const url=new URL("../icons/arrows-out-fill.svg?v=ffd62ba3569a4c5d5f3780c8f0b3f9b90c887f7eed13b57e5c9bedb277bbeccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
