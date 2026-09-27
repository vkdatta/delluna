export const name="mobile_lock_landscape";
export const id="dl_3b3a045b0bd386d66af4";
export const url=new URL("../icons/mobile_lock_landscape.svg?v=2b537f2095252a10b8c1888e502be8531060a2751bd4a3f085101ef06dd2b4f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
