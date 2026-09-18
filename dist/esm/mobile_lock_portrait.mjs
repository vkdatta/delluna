export const name="mobile_lock_portrait";
export const id="dl_b59f7bb4a6554c978c65";
export const url=new URL("../icons/mobile_lock_portrait.svg?v=9451add6e00617ee200463cdb2fc54d555340470b675ec30654a8584834c78fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
