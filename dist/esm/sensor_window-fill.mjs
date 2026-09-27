export const name="sensor_window-fill";
export const id="dl_d108285515874459a899";
export const url=new URL("../icons/sensor_window-fill.svg?v=4e2ea4bd52ee706acddfd668ebcf058604df6a0c9d6ae290e3118de418b2846d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
