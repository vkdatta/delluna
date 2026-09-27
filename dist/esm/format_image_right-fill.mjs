export const name="format_image_right-fill";
export const id="dl_ef6d8563fdf4114b2dc8";
export const url=new URL("../icons/format_image_right-fill.svg?v=1468d03f6532b9f6607ee4d5fdfea6141c2306c708a200c33ecce82fdec5eef3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
