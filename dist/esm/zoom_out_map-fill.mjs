export const name="zoom_out_map-fill";
export const id="dl_332964a482d571875180";
export const url=new URL("../icons/zoom_out_map-fill.svg?v=e789d1cbf9e067868dbf6ad21d752343e0193b7b151534970b73ce98b858833e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
