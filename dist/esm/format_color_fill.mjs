export const name="format_color_fill";
export const id="dl_998c67009b791895f3e3";
export const url=new URL("../icons/format_color_fill.svg?v=a9b16e617461bfdf1626006d8d5923411478f83c31006cea5f5089d7a4c476ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
