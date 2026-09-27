export const name="notifications_paused";
export const id="dl_791d601a06b90a258bb2";
export const url=new URL("../icons/notifications_paused.svg?v=a0c74114e113592aad37e5cd620dc42817cf11fa07b80aaae204c01a6df78a8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
