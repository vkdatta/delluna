export const name="repeat_one-fill";
export const id="dl_017c627d78ef41d187ba";
export const url=new URL("../icons/R/repeat_one-fill.svg?v=0c877f83a8405b0cd7b67ec040292b6d8e1de0a414a2f36cff170ed5c0970001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
