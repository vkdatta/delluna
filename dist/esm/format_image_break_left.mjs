export const name="format_image_break_left";
export const id="dl_0622823c90a83c89ab4b";
export const url=new URL("../icons/format_image_break_left.svg?v=e613ed908bdb76c5206e3a481965994a86f3d329edbb62120eb7e0dd616b6565",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
