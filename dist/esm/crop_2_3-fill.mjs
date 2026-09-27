export const name="crop_2_3-fill";
export const id="dl_d1a2bca07a499491a495";
export const url=new URL("../icons/crop_2_3-fill.svg?v=5993cdac0d7810f78197423afb34e7d4194240bfd537001c20cee2972444dbbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
