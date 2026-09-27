export const name="wifi_lock";
export const id="dl_f519491e7d9f7ccea125";
export const url=new URL("../icons/wifi_lock.svg?v=11316aec7f94a916c56a3d165232070f74559d1319647e2635f19b44d0d878d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
