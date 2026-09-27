export const name="spatial_gallery";
export const id="dl_502def4e4fc323d7ae8d";
export const url=new URL("../icons/spatial_gallery.svg?v=824945b1041e20d053d238ccd253c6226fd3289367b38876f8871c2bf66e5621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
