export const name="hot_tub-fill";
export const id="dl_b5a3f7a7cd1172e31127";
export const url=new URL("../icons/hot_tub-fill.svg?v=dae4dda3563d36405c3d3d15545ec039903b0ddded7b63934c9cb55b0cf46e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
