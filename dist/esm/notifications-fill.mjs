export const name="notifications-fill";
export const id="dl_21841359ab5af889adcc";
export const url=new URL("../icons/notifications-fill.svg?v=bd161409a495443acb73be087be5d78ffc252619f71620f27a304695b8135cfd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
