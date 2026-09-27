export const name="invert_colors-fill";
export const id="dl_cb760d36f0b5d82b3004";
export const url=new URL("../icons/invert_colors-fill.svg?v=b0ee4b83242e9fc2550aeba5131332a504d4c6ba0dcfdd0bc317983111c474c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
