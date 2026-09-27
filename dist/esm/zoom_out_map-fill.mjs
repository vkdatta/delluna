export const name="zoom_out_map-fill";
export const id="dl_a0e44d14a3858461ad24";
export const url=new URL("../icons/zoom_out_map-fill.svg?v=48b10504cf5a7a8794c6100a0f13330e846f7145598d5427855904eda1a5c53b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
