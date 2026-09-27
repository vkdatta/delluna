export const name="security-camera-light";
export const id="dl_fbd6fd64939273dc6408";
export const url=new URL("../icons/security-camera-light.svg?v=82ffb1f366cd2826b27143450ff6661f6d7b7a2d2a88935636babe3c142f68c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
