export const name="sound_detection_glass_break-fill";
export const id="dl_6b5c96b1883a444ea9da";
export const url=new URL("../icons/sound_detection_glass_break-fill.svg?v=bc3301e4fa9116e5cf5698103ea9314a55a6985328de9c13319899d531510f9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
