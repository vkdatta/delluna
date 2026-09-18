export const name="lock_reset";
export const id="dl_7a958ad403654533a3a3";
export const url=new URL("../icons/lock_reset.svg?v=d0aacd21cdc8add0a9c179c5bfd8bb2f25536d539c2990d929fc68b3993a6210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
