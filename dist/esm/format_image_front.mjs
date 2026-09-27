export const name="format_image_front";
export const id="dl_6eec4dc09d2f9495569c";
export const url=new URL("../icons/format_image_front.svg?v=5e98d1dfef3ef8abf17c39b2ec7708d1281569ea66bc5581192ac07a2204074f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
