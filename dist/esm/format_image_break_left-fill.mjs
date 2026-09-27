export const name="format_image_break_left-fill";
export const id="dl_caaad5c7162f4b5459e6";
export const url=new URL("../icons/format_image_break_left-fill.svg?v=ba91cf5a49af63b6f9fa31a5a3527b871ffba5968aa939e2fee7045dc8e5df6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
