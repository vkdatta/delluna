export const name="polyline";
export const id="dl_2d819d812cf113fefd25";
export const url=new URL("../icons/polyline.svg?v=6924b23a3c97c7840eaa6c80daf3d7d5db53b66ed0ac5366320f6cf9f2f0244c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
