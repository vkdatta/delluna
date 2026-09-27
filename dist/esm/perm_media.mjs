export const name="perm_media";
export const id="dl_1c688f6cfa6927ac16c6";
export const url=new URL("../icons/perm_media.svg?v=c2d392838af188cdec33a9471b450fec6dc7b82d410365606397fa56dd1f5f8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
