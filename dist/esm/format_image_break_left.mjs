export const name="format_image_break_left";
export const id="dl_a5fdf314d49e5229ae75";
export const url=new URL("../icons/format_image_break_left.svg?v=8b585e3f2d4ee91b494b926a41d8e629cdcd91d33b5445ee2157e29989119169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
