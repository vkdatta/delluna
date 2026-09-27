export const name="pinch_zoom_in-fill";
export const id="dl_506b0295e1e6550be761";
export const url=new URL("../icons/pinch_zoom_in-fill.svg?v=114ee7bd44a72cfbbdcf593f9c821e7f2b88beecca72f8c713df1ddf1d52f27e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
