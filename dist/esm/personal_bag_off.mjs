export const name="personal_bag_off";
export const id="dl_936fca7d02167127a6d7";
export const url=new URL("../icons/personal_bag_off.svg?v=67eb6cf7a804354025fba3d225f7ff7e6243bcdc00e3305ab890e836e61f878b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
