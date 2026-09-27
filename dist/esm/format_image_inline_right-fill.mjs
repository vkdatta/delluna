export const name="format_image_inline_right-fill";
export const id="dl_f5e829f29277f432fc28";
export const url=new URL("../icons/format_image_inline_right-fill.svg?v=86a23380bb3cb81278a6acf156856a1d8f5fb926617de02217403288e565c893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
