export const name="household_supplies-fill";
export const id="dl_444b26f4446c6b92a1f9";
export const url=new URL("../icons/household_supplies-fill.svg?v=84fd7192065fa2fdcb098e85ba751c3a9855f5e0b5c3155746137da83b970d33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
