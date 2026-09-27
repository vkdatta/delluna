export const name="arrow_right_alt-fill";
export const id="dl_42f7ab697ac477cb5266";
export const url=new URL("../icons/arrow_right_alt-fill.svg?v=d634d3006f08ada983946dccd608d60011dd8c5a976615d99e1bf235208eb539",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
