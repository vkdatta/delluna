export const name="bookmark_heart";
export const id="dl_fc1ea4c8fc084719babc";
export const url=new URL("../icons/B/bookmark_heart.svg?v=438881fa0b27d332a732ef8b6e119aca95357c044c94587dfba1741b3c09c65c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
