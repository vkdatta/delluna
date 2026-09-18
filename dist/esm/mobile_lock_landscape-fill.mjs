export const name="mobile_lock_landscape-fill";
export const id="dl_fd39723fa87b40dfb038";
export const url=new URL("../icons/M/mobile_lock_landscape-fill.svg?v=9b9512750d48b3685b0c21c0b388d6e81dd9a4271a2218ec3b484f0a21d51476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
