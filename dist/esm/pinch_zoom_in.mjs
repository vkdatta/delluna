export const name="pinch_zoom_in";
export const id="dl_f6ca8ad4159702aff9a3";
export const url=new URL("../icons/pinch_zoom_in.svg?v=0e09666b73b20f71a74a5af808937b3cc64ae3a500b3e9096a887a8ce5f0dcaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
