export const name="format_image_inline_left-fill";
export const id="dl_ccaa832955bbb2f9373f";
export const url=new URL("../icons/format_image_inline_left-fill.svg?v=09cedaeccaa8d1ac6f5dcbc970088ff18d120b87faaddda1ba53d8d27bf1fbfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
