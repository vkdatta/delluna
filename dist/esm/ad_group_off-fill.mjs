export const name="ad_group_off-fill";
export const id="dl_31e0503f78034e7cd447";
export const url=new URL("../icons/ad_group_off-fill.svg?v=c8624bf535f86169623b46d33aa7a870a64e91ca0cc3b21fda8710d15d135d8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
