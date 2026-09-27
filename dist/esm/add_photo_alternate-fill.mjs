export const name="add_photo_alternate-fill";
export const id="dl_6a6aafe1aa87af2d1373";
export const url=new URL("../icons/add_photo_alternate-fill.svg?v=6a8b2b3dce7cc39038169af9c8d9f97356084dbff5bacc76d5502d1fa8b1720d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
