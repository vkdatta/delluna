export const name="carry_on_bag_inactive-fill";
export const id="dl_fc0fef2ab639dd5803f8";
export const url=new URL("../icons/carry_on_bag_inactive-fill.svg?v=e1b7c2783b0cc936ddcf3effc20a86b10f57a5ead25f0fde96095caeff579b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
