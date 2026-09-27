export const name="slow_motion_video-fill";
export const id="dl_af0483582c87fb4e0bf7";
export const url=new URL("../icons/slow_motion_video-fill.svg?v=c0873984c14fa21d4d3ace4ed698b43ebf01d62d0b6437597a5848f70786a104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
