export const name="mobile_block-fill";
export const id="dl_dc4efd0daee346cc555d";
export const url=new URL("../icons/mobile_block-fill.svg?v=2d227198917971a8695f83efa5bccf34d523fb4fafcce248ca1be286cb5c37fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
