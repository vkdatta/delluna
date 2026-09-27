export const name="japanese_flag-fill";
export const id="dl_622831ecc1c248da3cf0";
export const url=new URL("../icons/japanese_flag-fill.svg?v=741f32d3b55dfc8ee495e50633b6f717f3e6bc8064dd8366975a7af8cb3d1f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
