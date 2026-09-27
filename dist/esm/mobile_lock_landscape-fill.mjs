export const name="mobile_lock_landscape-fill";
export const id="dl_bbac61eecd93c17501a4";
export const url=new URL("../icons/mobile_lock_landscape-fill.svg?v=4331f3f21aa45d5aa06fda7059af5138e101f39a2258fce7f741cbc7dc11508d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
