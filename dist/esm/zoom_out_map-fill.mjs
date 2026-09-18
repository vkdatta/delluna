export const name="zoom_out_map-fill";
export const id="dl_7df5f92268c34cfca0d5";
export const url=new URL("../icons/Z/zoom_out_map-fill.svg?v=c473013a363c802e8bc61dc7d089d6546a9cf37a40c5a515f8715219a8367b7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
