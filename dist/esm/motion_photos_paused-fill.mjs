export const name="motion_photos_paused-fill";
export const id="dl_6973887a85e9b6c5e156";
export const url=new URL("../icons/motion_photos_paused-fill.svg?v=0f4ecd3cdb4cd37467649453efa301b0992af9bd6577cf17e3b0a130ea243cba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
