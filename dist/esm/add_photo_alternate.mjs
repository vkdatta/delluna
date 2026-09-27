export const name="add_photo_alternate";
export const id="dl_62ea35ffd0dbbc85cd82";
export const url=new URL("../icons/add_photo_alternate.svg?v=473a4723c33c56316a63327b1a1d29331ddbd4f5ccb7d0d04491cdbaf97aa581",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
