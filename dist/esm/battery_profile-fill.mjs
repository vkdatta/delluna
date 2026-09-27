export const name="battery_profile-fill";
export const id="dl_64f30ac3b23d0bd030dc";
export const url=new URL("../icons/battery_profile-fill.svg?v=b7ee8bf02509c3855d3a3ee5ec886609dc3cd81335a6c3a3a9ba4365e91d7179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
