export const name="carry_on_bag_checked-fill";
export const id="dl_11c1456779ff7ce5a98c";
export const url=new URL("../icons/carry_on_bag_checked-fill.svg?v=e3c7ba97b93831340a2873ac940ee689d505df9c62807c374a1252d87f2b0fab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
