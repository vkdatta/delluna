export const name="spatial_gallery-fill";
export const id="dl_860e66fe326ca263eb62";
export const url=new URL("../icons/spatial_gallery-fill.svg?v=ee43af2eaae54d2b806392f6a3dff9839e2713244cb8860d3e75dff8fbe1e867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
