export const name="pinch_zoom_out";
export const id="dl_ee5661077821832b4adf";
export const url=new URL("../icons/pinch_zoom_out.svg?v=1f1d5c4d2b400d43849250b337ee044b2f409357b770a401833287a40c7ae96f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
