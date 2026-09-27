export const name="video-duotone";
export const id="dl_e87c7091619e879daef7";
export const url=new URL("../icons/video-duotone.svg?v=707ba48e44ccafdc2490421aa43a4a845d6339aca25376f5e8f2bd76d9441a80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
