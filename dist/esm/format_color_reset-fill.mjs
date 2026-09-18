export const name="format_color_reset-fill";
export const id="dl_4b9466661e484eeb85f8";
export const url=new URL("../icons/format_color_reset-fill.svg?v=81b9b18d9078c2b47e78baa45208c40a2ac767fe3160eb4869802f06e09c0bce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
