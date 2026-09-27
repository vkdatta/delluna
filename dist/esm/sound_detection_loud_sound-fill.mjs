export const name="sound_detection_loud_sound-fill";
export const id="dl_a01758cf6456f9af8e19";
export const url=new URL("../icons/sound_detection_loud_sound-fill.svg?v=671ac32d18d2351ad34379cf7f88a69caf96170a7d3fa94cb4af4a6b5e2c31ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
