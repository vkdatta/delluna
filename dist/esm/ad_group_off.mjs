export const name="ad_group_off";
export const id="dl_f848a3f7839e69dd9d8b";
export const url=new URL("../icons/ad_group_off.svg?v=794a2ba5a4aa51d25ce82eb9dbe3cb77c7032d5646186263c447a468df8f0f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
