export const name="shutter_speed_add-fill";
export const id="dl_ea17c2e2f03bcecf4391";
export const url=new URL("../icons/shutter_speed_add-fill.svg?v=5b3a0cc501fbf1b8d54b489db330042992e4e1a3e4c7edf15f1f7e854b318de7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
