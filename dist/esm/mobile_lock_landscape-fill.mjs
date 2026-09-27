export const name="mobile_lock_landscape-fill";
export const id="dl_db3edebcd816020dd307";
export const url=new URL("../icons/mobile_lock_landscape-fill.svg?v=65c71de90c4558b483c0e8484e7cbbefa2c9e52c3120ad959057364d8d4f6d0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
