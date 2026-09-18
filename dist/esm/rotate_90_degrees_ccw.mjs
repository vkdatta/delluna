export const name="rotate_90_degrees_ccw";
export const id="dl_0ea7a1d077f041dc80a0";
export const url=new URL("../icons/R/rotate_90_degrees_ccw.svg?v=aeaa26c3e9af4ad4de1921b6d78ab5a81d03023786ef5be4ef249c783b043625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
