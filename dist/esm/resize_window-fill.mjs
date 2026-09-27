export const name="resize_window-fill";
export const id="dl_dba84287a09ac48dea6e";
export const url=new URL("../icons/resize_window-fill.svg?v=e7059b2c702c32888f9a25b5b51e3f5c2eacd95cdfd8a8da49fb0eb4de8d5227",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
